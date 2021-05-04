import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/Button';

ReactDOM.render(
  <React.StrictMode>
    <p>Default</p>
    <Button>Test</Button>
    <p>Text</p>
    <Button variant="text">Test</Button>
    <p>Outline</p>
    <Button variant="outline">Test</Button>
    <p>Disable Shadow</p>
    <Button disableShadow>Test</Button>
  </React.StrictMode>,
  document.getElementById('root')
);
