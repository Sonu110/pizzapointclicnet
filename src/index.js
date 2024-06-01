import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store/Store';
import { MyProvider } from './context/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Provider store={store}>
    <MyProvider>
    

    <App />
    </MyProvider>
</Provider>
);

