'use client';

import { useActionState, useEffect } from 'react';
import { signInAction } from './sign-in-action';
import { LoginState } from '../../../types/index';

import styles from './page.module.css';

const SignIn = () => {
  const [{ error, redirectTo }, formAction, isPending] = useActionState<
    LoginState,
    FormData
  >(signInAction, {
    error: '',
    redirectTo: '',
  });

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.input}>
        <label htmlFor='login'>Login:</label>
        <input name='login' id='login' type='text' />
      </div>

      <div>
        <label htmlFor='password'>Password:</label>
        <input name='password' id='password' type='password' />
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <button disabled={isPending} className={styles.button}>
        Sign In
      </button>
    </form>
  );
};

export default SignIn;