// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react';

function Greeting() {
  const [name, setName] = React.useState('Nathan');

  function handleChange(event) {
    const name = event.target.value;
    setName(name);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

function App() {
  return <Greeting />;
}

export default App;
