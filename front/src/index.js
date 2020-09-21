import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import { createStore, applyMiddleware } from 'redux';


const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<>
	<Provider store={store}>
		<App />
	</Provider>
	</>,
	document.getElementById('root'));
