import React, { Component } from 'react';
import './one-resume-view.scss';

export default class OneResumeView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.props.setDataForResumeBuilder(this.props.resume)
    }

    render() {
        return (
            <div className="resume" id={`resume${this.props.resume.id}`} onClick={this.handleClick}>
                <h2>{this.props.resume.fullName}</h2>
                <h5>{this.props.resume.email}</h5>
                <h5>{this.props.resume.address}</h5>
                <h5>{this.props.resume.city}</h5>
                <h5>{this.props.resume.phone}</h5>
            <div className="objective">
                {this.props.resume.objective}
            </div>
                <h3>Education</h3>
                <div className="">
                    <table>
                        <tbody>
                        <tr>
                            <th>Course</th>
                            <th>University</th>
                            <th>Passing</th>
                            <th>Percentage</th>
                        </tr>
                        {this.props.resume.education.map((education, i) => {
                            return (  
                            <tr key={i}>
                                <td>{education.course}</td>
                                <td>{education.university}</td>
                                <td>{education.year}</td>
                                <td>{education.percentage}</td>
                            </tr>
                            );
                        })}
                        </tbody>
                    </table>
                    
                    <h3>Skills</h3>
                    {this.props.resume.skills.map((skills, i) => {
                        return(
                          <div className="skill">
                            <li key={i}>{this.props.resume.skills[i]}</li>
                          </div>
                        );
                    })}
                    <div>
                        <h3>Projects</h3>
                        {this.props.resume.project}
                    </div>
                    

                    <div>
                       <h3>Interests</h3>
                       {this.props.resume.interests}
                    </div>

                    <div>    
                       <h3>Declaration</h3>
                       {this.props.resume.declaration}
                    </div>
                </div>
            </div>
        );
    }
}