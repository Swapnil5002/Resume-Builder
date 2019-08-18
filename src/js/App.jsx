import React from 'react';
import Container from './main.jsx';
 

export default class App extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount() {
        const resumes = this.prepareResumeObjects();
        localStorage.setItem("resumes", JSON.stringify(resumes));
    }

    prepareResumeObjects() {
        const resumes = {resume1: {
            id: 1,
            fullName: 'Swapnil Varshney',
            email: "swapnilvarshney3@gmail.com",
            phone: "9901750029",
            objective:"Aiming to learn more technologies and to work in a friendly and professional environment. ",
            
            education: [
                {   id: 1,
                   course: "M.Tech",
                   year: "2017-2018",
                   university:"AKTU",
                   percentage:"80"
                },
                {  id: 2,
                   course: "B.Tech",
                   year: "2012-2016",
                   university:"AKTU",
                   percentage:"78"
                },
                {  id: 3,
                   course: "AECS",
                   year: "2009-2010",
                   university:"CBSE",
                   percentage:"82"
                },
                {   id: 4,
                    course: "AECS",
                    year: "2009-2010",
                    university:"CBSE",
                    percentage:"75"
                }
            ],
            
                skills:["ReactJS","Redux","SASS"],
                address:"House No. 79, RR Nagar",
                city:"Ghaziabad",
                project:"GENIUS, EIStC, Chroma",
                interests:"Cricket, Badminton, Chess",
                declaration: "I here by declare that the details provided in this resume are valid."
            
            
            },

            resume2 :{
                id: 2,
                fullName: "Ajay Kumar",
                email: "ajaykumar@gmail.com",
                phone: "8899197579",
                objective:"Aiming to utilise my skills and provide the best output to the company.",
                
                education: [
                    {  id: 1,
                       course: "M.Tech",
                       year: "2017-2018",
                       university:"AKTU",
                       percentage:"76"
                    },
                    {  id: 2,
                       course: "B.Tech",
                       year: "2012-2016",
                       university:"AKTU",
                       percentage:"65"
                    },
                    {  id: 3,
                       course: "Army Public School",
                       year: "2009-2010",
                       university:"CBSE",
                       percentage:"85"
                    },
                    {   id: 4,
                        course: "Army Public School",
                        year: "2011-2012",
                        university:"CBSE",
                        percentage:"88"
                    }
                ],
                
                    skills:["ReactJS","Redux","SASS","HTML","CSS"],
                    address:"#44, Bassapa layout",
                    city:"Ahemdabad",
                    project:"Flags, Ecospace, SpaceX",
                    interests:"Listening songs, playing guitar",
                    declaration: "I here by declare that the details provided in this resume are valid."
                
                
                }
            }
            return resumes;
    }

    render(){
        return(
            <div>
                <section className="grid-item">                    
                    <Container/>
                </section>
            </div>
        )
    }
}