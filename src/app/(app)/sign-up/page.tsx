'use client';

import { useActionState, useEffect } from 'react';
import { signUpAction } from './sign-up-action';
import { LoginState } from '../../../types/index';

import styles from './page.module.css';

const SignUp = () => {
  const [{ error, redirectTo }, formAction, isPending] = useActionState<
    LoginState,
    FormData
  >(signUpAction, {
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
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;