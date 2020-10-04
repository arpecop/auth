import React, { useState, useEffect } from 'react';

import { Auth } from 'aws-amplify';
import { Input } from 'antd';
import { useRecoilState } from 'recoil';
import Error from '../Error';
import { navigation } from '../../utils/state';

const styles = {
  Input: {
    height: 40,
    margin: '10px 0px',
    padding: 7,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: 'rebeccapurple',
    padding: '15px 7px',
    cursor: 'pointer',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
  },
};
const SignUp = () => {
  const [nav, setNav] = useRecoilState(navigation);
  const [state, setState] = useState({
    username: '',
    password: '',
    email: '',
    authCode: '',
    stage: 0,
    error: '',
  });

  useEffect(() => {
    setNav('signup');
  }, [setNav, nav]);
  const handleUpdate = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const signUp = async () => {
    const { username, password, email } = state;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email },
      });
      setState({ ...state, stage: 1, error: { name: 'Empty' } });
    } catch (err) {
      setState({ ...state, error: err });
      console.log('error signing up...', err);
    }
  };

  const confirmSignUp = async () => {
    const { username, authCode } = state;
    try {
      await Auth.confirmSignUp(username, authCode);
      setState({ ...state, stage: 2, error: { name: 'Empty' } });
    } catch (err) {
      setState({ ...state, error: err });
      console.log('error confirming signing up...', err);
    }
  };
  return (
    <div>
      {state.stage === 0 && (
        <div style={styles.formContainer}>
          <h1>Sign Up</h1>
          {state.error && <Error errorMessage={state.error} />}
          <Input
            onChange={handleUpdate}
            placeholder="Username"
            name="username"
            value={state.username}
            style={styles.Input}
          />
          <Input
            onChange={handleUpdate}
            placeholder="Password"
            name="password"
            value={state.password}
            type="password"
            style={styles.Input}
          />
          <Input
            onChange={handleUpdate}
            placeholder="Email"
            name="email"
            value={state.email}
            style={styles.Input}
          />

          <div style={styles.button} onClick={signUp}>
            <span style={styles.buttonText}>Sign Up</span>
          </div>
        </div>
      )}
      {state.stage === 1 && (
        <div style={styles.formContainer}>
          <h1>Registration</h1>
          {state.error && <Error errorMessage={state.error} />}
          <Input
            onChange={handleUpdate}
            placeholder="Authorization Code"
            name="authCode"
            value={state.authCode}
            style={styles.Input}
          />
          <div style={styles.button} onClick={confirmSignUp}>
            <span style={styles.buttonText}>Confirm Sign Up</span>
          </div>
        </div>
      )}

      {state.stage === 2 && (
        <>
          Registratino successful ,
          <a href="/app/login">Login</a>
        </>
      )}
    </div>
  );
};

export default SignUp;
