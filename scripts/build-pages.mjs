import { cpSync, existsSync, mkdirSync, renameSync, rmSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { dirname, join } from 'node:path';

const projectRoot = process.cwd();

const renameBackupPairs = [
  ['src/app/(api)', '.pages-build-api-backup'],
  [
    'src/app/(app)/rackets/@modal/(..)racket',
    '.pages-build-modal-intercept-backup',
  ],
  ['src/app/(app)/sign-in', '.pages-build-sign-in-backup'],
  ['src/app/(app)/sign-up', '.pages-build-sign-up-backup'],
];

const stubCopies = [
  ['scripts/pages-stubs/sign-in', 'src/app/(app)/sign-in'],
  ['scripts/pages-stubs/sign-up', 'src/app/(app)/sign-up'],
];

const restoreAll = () => {
  for (const [source, backup] of renameBackupPairs) {
    if (existsSync(backup)) {
      if (existsSync(source)) {
        rmSync(source, { recursive: true, force: true });
      }

      renameSync(backup, source);
    }
  }
};

for (const [source, backup] of renameBackupPairs) {
  if (existsSync(source)) {
    renameSync(source, backup);
  }
}

for (const [stubPath, targetPath] of stubCopies) {
  mkdirSync(dirname(join(projectRoot, targetPath)), { recursive: true });
  cpSync(join(projectRoot, stubPath), join(projectRoot, targetPath), {
    recursive: true,
  });
}

try {
  execSync('next build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      GITHUB_PAGES: 'true',
    },
  });
} finally {
  restoreAll();
}
