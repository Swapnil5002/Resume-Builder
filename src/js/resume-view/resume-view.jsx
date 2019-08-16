import React, {Component} from 'react';
import './resume-view.scss';
import OneResumeView from './one-resume-view/one-resume-view.jsx';
import * as Resume from './resume.json';

export default class ResumeViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div className="resume-view">
            {Object.entries(Resume.default).map((resume, i) => {
                return <div key={i}><OneResumeView key={i} resume={resume[1]} /></div>
            })}
        </div>
        );
    }
}
 