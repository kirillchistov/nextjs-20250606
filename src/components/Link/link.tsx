'use client';

import NextLink from 'next/link';
import { ComponentProps, FC } from 'react';

import styles from './link.module.css';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

type Props = ComponentProps<typeof NextLink>;

export const Link: FC<Props> = ({ children, ...props }) => {
  const pathname = usePathname();

  const isActive = pathname === props.href;

  return (
    <NextLink
      {...props}
      className={classNames(styles.link, {
        [styles.isActive]: isActive,
      })}
    >
      {children}
    </NextLink>
  );
};