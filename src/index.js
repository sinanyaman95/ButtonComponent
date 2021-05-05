import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/Button';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <p>Default</p>
        <Button onClick={(e) => console.log("on click", e)}>Test</Button>
        <p>Text</p>
        <Button variant="text">Test</Button>
        <p>Outline</p>
        <Button variant="outline">Test</Button>
        <p>Disable Shadow</p>
        <Button disableShadow>Test</Button>
        <p>Small</p>
        <Button size='sm'>Test</Button>
        <p>Medium</p>
        <Button size='md'>Test</Button>
        <p>Large</p>
        <Button size='lg'>Test</Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <p>Color Default</p>
        <Button color="default">Test</Button>
        <p>Color Primary</p>
        <Button color="primary">Test</Button>
        <p>Color Secondary</p>
        <Button color="secondary">Test</Button>
        <p>Color Danger</p>
        <Button color="danger">Test</Button>
        <p>Disabled</p>
        <Button disabled>Test</Button>
        <p>Start Icon</p>
        <Button startIcon="start">Test</Button>
        <p>End Icon</p>
        <Button endIcon="end">Test</Button>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
