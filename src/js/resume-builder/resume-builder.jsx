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

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    render() { 
        return ( 
            <div>
                  <h2 className="nav">Resume</h2>
                  <div className="info-section">
                    <div className="name">
                        <label>FullName:</label>
                        <input type="text" onChange={this.handleChange} name="fullName" placeholder="Fullname.."/>
                    </div>
                    <div className="name">
                        <label>Email:</label>
                        <input type="text" onChange={this.handleChange} name="email" placeholder="Email.."/>
                    </div>
                    <div className="name">
                        <label>Mobile:</label>
                        <input type="number" onChange={this.handleChange} name="phone" placeholder="Number.."/>
                    </div>
                  </div>

                
                

            <div className="objective">

                  <label>Objective:</label>
                  <textarea placeholder="Objective"></textarea>

            </div>
                

                
            <div className="education">

                    <label>Master's Degree:</label>
                    <input type="text" placeholder="Degree.."/>
                
                    <label>Year:</label>
                    <input type="number" placeholder="Year.."/>
               
                    <label>University:</label>
                    <input type="text" placeholder="University.."/>
                
                    <label>Percentage:</label>
                    <input type="number" placeholder="Percentage.."/>
                
                </div>
                
                

            <div className="education">
                

                    <label>Bachelor's Degree:</label>
                    <input type="text" placeholder="Degree.."/>

                    <label>Year:</label>
                    <input type="number" placeholder="Year.."/>

                    <label>University:</label>
                    <input type="text" placeholder="University.."/>

                    <label>Percentage:</label>
                    <input type="number" placeholder="Percentage.."/>

                
            </div>        

            <div className="education">
            

                    <label>High School:</label>
                    <input type="text" placeholder="Degree.."/>

                    <label>Year:</label>
                    <input type="number" placeholder="Year.."/>

                    <label>University:</label>
                    <input type="text" placeholder="Board.."/>

                    <label>Percentage:</label>
                    <input type="number" placeholder="Percentage.."/>

            </div>       

            <div className="education">

                    <label>Intermediate:</label>
                    <input type="text" placeholder="Degree.."/>

                    <label>Year:</label>
                    <input type="number" placeholder="Year.."/>

                    <label>University:</label>
                    <input type="text" placeholder="Board.."/>

                    <label>Percentage:</label>
                    <input type="number" placeholder="Percentage.."/>

            </div>            

            
                <div>

                   <label>Skills:</label>
                   <input type="text" placeholder="Enter your skills.."></input>

                </div>
                <div>

                   <label>Address:</label>
                   <input type="text" placeholder="Address.."></input>

                </div>

                <div>

                   <label>City:</label>
                   <input type="text" placeholder="City.."></input>

                </div>
                <div>

                   <label>Project:</label>
                   <input type="text" placeholder="Project details.."></input>
 
                </div>
             
           <div>
                    <button>Save</button>
            </div>
            </div>         
         );
    }
}
