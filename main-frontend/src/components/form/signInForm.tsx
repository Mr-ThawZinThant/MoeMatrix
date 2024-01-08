import React, { useState } from 'react';

interface SignInFormProps {
  onSignIn: (username: string, password: string) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSignIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform validation if needed
    onSignIn(username, password);
  };

  return (
    <form onSubmit={handleSignIn}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
