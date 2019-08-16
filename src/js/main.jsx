import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ResumeBuilder from './resume-builder/resume-builder.jsx';
import ResumeViewer from './resume-view/resume-view.jsx';

export default class Container extends Component {
    render() {
        return (
        <div className="resume-main">
            <div><ResumeViewer/></div>
            <div><ResumeBuilder/></div>
        </div>
        );
    }
}