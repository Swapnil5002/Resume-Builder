import React, {Component} from 'react';
import './resume-builder.scss';

export default class ResumeBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fullName: "",
            email: "",
            phone: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
           resume: props.resume 
        }, () => {
            this.setInputBuilderViews();
        })
    }

    setInputBuilderViews() {
        this.setState({
            fullName: this.state.resume.fullName,
            email: this.state.resume.email,
            phone: this.state.resume.phone,
            objective: this.state.resume.objective,
            masters: this.state.resume.education[0].course,
            mastersYear: this.state.resume.education[0].year,
            university: this.state.resume.education[0].university,
            percentage: this.state.resume.education[0].percentage,
            bachelor: this.state.resume.education[1].course,
            bYear: this.state.resume.education[1].year,
            buniversity: this.state.resume.education[1].university,
            bpercentage: this.state.resume.education[1].percentage,
            hSchool: this.state.resume.education[2].course,
            hYear: this.state.resume.education[2].year,
            hUniversity: this.state.resume.education[2].university,
            hPercentage: this.state.resume.education[2].percentage,
            iSchool: this.state.resume.education[3].course,
            iYear: this.state.resume.education[3].year,
            iUniversity: this.state.resume.education[3].university,
            iPercentage: this.state.resume.education[3].percentage,
            address: this.state.resume.address,
            city: this.state.resume.city,
            project: this.state.resume.project,
            interests: this.state.resume.interests,
            skills: this.state.resume.skills

        })
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
        this.prpareResumeUpdateObject(event);
    }

    prpareResumeUpdateObject(event) {
        let updateObj = {};
        if (event.srcElement.parentElement.className == "education") {
            let Obj = {};

        } 
        this.props.updateResumeView(this.state.resume.id, {key: name, value: event.target.value});
    }

    onClick(){
        
    }

    render() { 
        return ( 
            <div>
                <div className="resume-size">
                <h2 className="nav">Resume</h2>
                  <div className="info-section">
                    <div className="name">
                        <label>FullName:</label>
                        <input type="text" onChange={this.handleChange} name="fullName" value={this.state.fullName} placeholder="Fullname.."/>
                    </div>
                    <div className="name">
                        <label>Email:</label>
                        <input type="text" onChange={this.handleChange} name="email" value={this.state.email} placeholder="Email.."/>
                    </div>
                    <div className="name">
                        <label>Mobile:</label>
                        <input className="quantity" type="number" onChange={this.handleChange} name="phone" value={this.state.phone} placeholder="Number.."/>
                    </div>
                  </div>

                
                

            <div className="objective">

                  <label>Objective:</label>
                  <textarea placeholder="Objective" onChange={this.handleChange} name="objective" value={this.state.objective}></textarea>

            </div> 
                

                
            <div className="education" id={this.props.resume.education && this.props.resume.education[0].id ? this.props.resume.education[0].id: ""}>

                    <label>Master's Degree:</label>
                    <input type="text" onChange={this.handleChange} name="course" value={this.state.masters} placeholder="Degree.."/>
                
                    <label>Year:</label>
                    <input type="text" onChange={this.handleChange} name="mastersYear" value={this.state.mastersYear} placeholder="Year.."/>
               
                    <label>University:</label>
                    <input type="text" onChange={this.handleChange} name="university" value={this.state.university} placeholder="University.."/>
                
                    <label>Percentage:</label>
                    <input type="number" onChange={this.handleChange} name="percentage" value={this.state.percentage} placeholder="Percentage.."/>
                
                </div>
                
                

            <div className="education" id={this.props.resume.education && this.props.resume.education[1].id ? this.props.resume.education[1].id: ""}>
                

                    <label>Bachelor's Degree:</label>
                    <input type="text" onChange={this.handleChange} name="bachelor" value={this.state.bachelor} placeholder="Degree.."/>

                    <label>Year:</label>
                    <input type="text" onChange={this.handleChange} name="bYear" value={this.state.bYear} placeholder="Year.."/>

                    <label>University:</label>
                    <input type="text" onChange={this.handleChange} name="buniversity" value={this.state.buniversity} placeholder="University.."/>

                    <label>Percentage:</label>
                    <input type="number" onChange={this.handleChange} name="bpercentage" value={this.state.bpercentage} placeholder="Percentage.."/>

                
            </div>        

            <div className="education" id={this.props.resume.education && this.props.resume.education[2].id ? this.props.resume.education[2].id: ""}>
            

                    <label>High School:</label>
                    <input type="text" onChange={this.handleChange} name="hSchool" value={this.state.hSchool} placeholder="Degree.."/>

                    <label>Year:</label>
                    <input type="text" onChange={this.handleChange} name="hYear" value={this.state.hYear} placeholder="Year.."/>

                    <label>University:</label>
                    <input type="text" onChange={this.handleChange} name="hUniversity" value={this.state.hUniversity} placeholder="Board.."/>

                    <label>Percentage:</label>
                    <input type="number" onChange={this.handleChange} name="hPercentage" value={this.state.hPercentage} placeholder="Percentage.."/>

            </div>       

            <div className="education" id={this.props.resume.education && this.props.resume.education[3].id ? this.props.resume.education[3].id: ""}>

                    <label>Intermediate:</label>
                    <input type="text" onChange={this.handleChange} name="iSchool" value={this.state.iSchool} placeholder="Degree.."/>

                    <label>Year:</label>
                    <input type="text" onChange={this.handleChange} name="iYear" value={this.state.iYear} placeholder="Year.."/>

                    <label>University:</label>
                    <input type="text" onChange={this.handleChange} name="iUniversity" value={this.state.iUniversity} placeholder="Board.."/>

                    <label>Percentage:</label>
                    <input type="number" onChange={this.handleChange} name="iPercentage" value={this.state.iPercentage} placeholder="Percentage.."/>

            </div>            

            
                <div className="skills">

                   <label>Skills:</label>
                   <input type="text" onChange={this.handleChange} name="skills" value={this.state.skills} placeholder="Enter your skills.."></input>

                </div>
                <div className="address">

                   <label>Address:</label>
                   <input type="text" onChange={this.handleChange} name="address" value={this.state.address} placeholder="Address.."></input>

                </div>

                <div className="city">

                   <label>City:</label>
                   <input type="text" onChange={this.handleChange} name="city" value={this.state.city} placeholder="City.."></input>

                </div>
                <div className="project">

                   <label>Project:</label>
                   <input type="text" onChange={this.handleChange} name="project" value={this.state.project} placeholder="Project details.."></input>
 
                </div>

                <div className="interests">

                   <label>Interests:</label>
                   <input type="text" onChange={this.handleChange} name="interests" value={this.state.interests} placeholder="Project details.."></input>
 
                </div>
             
                <div className="button">
                    <a href="Resume.pdf" download="How-to-download-file.pdf"><button>Download</button></a>
                </div>
                </div>
                  
            </div>         
         );
    }
}
