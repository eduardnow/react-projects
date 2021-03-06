import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HelloWorld from "./HelloWorld";
import PropertiesComponent from "./components/PropertiesComponent";
import ManageStateComponent from "./components/ManageStateComponent";
import ChildrenComponent from "./components/ChildrenComponent";
import AccessNestedDataComponent from "./components/AccessNestedDataComponent";
import CustomPropTypeValidationComponent from "./components/CustomPropTypeValidationComponent";
import NormalizeEventsComponent from "./components/NormalizeEventsComponent";
import GetReferenceComponent from "./components/GetReferenceComponent";

ReactDOM.render(
    <React.StrictMode>
        <HelloWorld/>
        <hr/>
        <PropertiesComponent cat={5}/>
        <hr/>
        <ManageStateComponent/>
        <hr/>
        <ChildrenComponent/>
        <hr/>
        <AccessNestedDataComponent/>
        <hr/>
        <CustomPropTypeValidationComponent/>
        <hr/>
        <NormalizeEventsComponent/>
        <hr/>
        <GetReferenceComponent/>
        <hr/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
