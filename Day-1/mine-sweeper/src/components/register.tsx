import { useContext, useState } from 'preact/hooks';
import { GameContext, PathProps } from '../util/types';

export const Register = (_: PathProps) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {
    allUsers,
    setAllUsers,
  } = useContext(GameContext)

  const handleRegister = (event: Event) => {
    event.preventDefault();

    console.log(`Registering user:${fullName} with username:${username} and password:${password}`)

    // TODO: Handle register logic here -> save user to backend

    const newUser = {
      name: fullName,
      username: username
    }

    setAllUsers([...allUsers, newUser])
  };

  return (
    <form onSubmit={handleRegister}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <label>
        Full Name:
        <input
          type="text"
          value={fullName}
          onInput={(e: any) => setFullName(e.currentTarget.value)}
        />
      </label>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onInput={(e) => setUsername(e.currentTarget.value)} />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onInput={(e) => setPassword(e.currentTarget.value)} />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onInput={(e) => setConfirmPassword(e.currentTarget.value)} />
      </label>
      <input type="submit" value="Register" />
    </form>
  );
};