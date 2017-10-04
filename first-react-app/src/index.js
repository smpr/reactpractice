import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// has two arguements. the first arguement is saying to refrence App from the import list. The second is getElementById is saying to go get the root
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
