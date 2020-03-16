import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Root } from './components/Root';
import './css/meme.css'

ReactDOM.render(<Root></Root>, document.getElementById('root'));


serviceWorker.unregister();
