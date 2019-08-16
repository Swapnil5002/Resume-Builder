import React from 'react';
import Container from './main.jsx';
 

export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <header className="header">Resume-builder</header>
                <section className="grid-item">                    
                    <Container/>
                </section>
                <footer className="header"></footer>
            </div>
        )
    }
}