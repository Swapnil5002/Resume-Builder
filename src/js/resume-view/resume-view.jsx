import React, {Component} from 'react';
import './resume-view.scss';
import OneResumeView from './one-resume-view/one-resume-view.jsx';

export default class ResumeViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div className="resume-view">
            {Object.entries(this.props.resumes).map((resume, i) => {
                return <div key={i}><OneResumeView key={i} resume={resume[1]} setDataForResumeBuilder={this.props.setDataForResumeBuilder} /></div>
            })}
        </div>
        );
    }
}
 