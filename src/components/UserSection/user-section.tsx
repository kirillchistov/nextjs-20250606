'use client';

import { FC, use, useTransition } from 'react';
import classNames from 'classnames';
import { UserContext } from '../../providers/user';
import { Link } from '../Link/link';
import { handleLogout } from './handle-login';

import styles from './user-section.module.css';

interface Props {
  className: string;
}

export const UserSection: FC<Props> = ({ className }) => {
  const { isAuthorized } = use(UserContext);

  const [isPending, startTransition] = useTransition();

  return (
    <div className={classNames(className, styles.container)}>
      {isAuthorized ? (
        <button className={styles.userButton}
          disabled={isPending}
          onClick={() => startTransition(handleLogout)}
        >
          Logout
        </button>
      ) : (
        <>
          <Link href='/sign-in'>Sign In</Link>
          <Link href='/sign-up'>Sign Up</Link>
        </>
      )}
    </div>
  );
};