import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { VsbBotao } from '../.';

const App = () => {
  return (
    <div>
      <VsbBotao />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
