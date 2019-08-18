import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ResumeBuilder from './resume-builder/resume-builder.jsx';
import ResumeViewer from './resume-view/resume-view.jsx';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resumes: JSON.parse(localStorage.getItem("resumes")),
            resumeForBuilder: {}
        };
        this.setDataForResumeBuilder = this.setDataForResumeBuilder.bind(this);
        this.updateResumeView = this.updateResumeView.bind(this);
    }
    
    setDataForResumeBuilder(resume) {
        this.setState({
            resumeForBuilder: resume
        })
    }

    updateResumeView(resumeId, changeObject) {
        let resumes = this.state.resumes;
        let resumeName = `resume${resumeId}`;
        const keyChanged = changeObject.key;
        const valueChanged = changeObject.value;
        let Obj = {};
        let newResumes = {};
        Object.keys(resumes).forEach((key) => {
            if(resumes[key].id == resumeId) {
               Object.keys(resumes[key]).forEach(objKey => {
                    if (objKey == keyChanged) {
                        Obj[objKey] = valueChanged;
                    } else {
                        Obj[objKey] = resumes[key][objKey];
                    }
               })
               newResumes[key] = Obj;
            } else {
                newResumes[key] = resumes[key];
            }
        });
        this.setState({
            resumes: newResumes
        }, () => {
            localStorage.setItem("resumes", JSON.stringify(this.state.resumes));
            const idOfResumeBuilder = this.state.resumeForBuilder.id;
            const resumes = this.state.resumes;
            Object.keys(resumes).forEach((key) => {
                if(resumes[key].id == idOfResumeBuilder) {
                    this.setDataForResumeBuilder(resumes[key]);
                }
            })
        })
    
    }

    render() {
        return (
        <div className="resume-main" onClick={this.handleClick}>
            <div><ResumeViewer resumes={this.state.resumes} setDataForResumeBuilder={this.setDataForResumeBuilder}/></div>
            <div><ResumeBuilder updateResumeView={this.updateResumeView} resume={this.state.resumeForBuilder}/></div>
        </div>
        );
    }
}