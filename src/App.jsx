import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const App = ({ signOut, user }) =>  {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out!!</Button>
      <h2>Amplify Todos</h2>
      ...
    </div>
  );
}

export default withAuthenticator(App);
