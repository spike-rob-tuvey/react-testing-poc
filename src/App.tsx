import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { get } from './Api';

function useInput(defaultValue: string) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e: any) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}


function App() {
  const inputAProps = useInput('');
  const inputBProps = useInput('');

  const onClick = () => {
    get(inputAProps.value, inputBProps.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <input
          placeholder="Input A"
          className="input"
          {...inputAProps}
        />

        <input
          placeholder="Input B"
          className="input"
          {...inputBProps}
        />

        <Button
          variant="primary"
          onClick={onClick}
          disabled={!inputAProps.value || !inputBProps.value}
        >Click Me</Button>
      </header>
    </div>
  );
}

export default App;
