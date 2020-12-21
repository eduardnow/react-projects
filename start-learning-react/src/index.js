import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HelloWorld from "./HelloWorld";
import PropertiesComponent from "./components/PropertiesComponent";
import ManageStateComponent from "./components/ManageStateComponent";
import ChildrenComponent from "./components/ChildrenComponent";

ReactDOM.render(
    <React.StrictMode>
        <HelloWorld/>

        <PropertiesComponent cat={5}/>

        <ManageStateComponent/>

        <ChildrenComponent/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
