import React,{Component} from "react";
import AboutDesc from "../components/about-desc";
import AboutExt from "../components/about-ext";

class About extends Component{
    render(){
        return(          
            <main className="minh-footer-adj">   
                <AboutExt/>  
                <AboutDesc/>
            </main>
        );
    }
}

export default About;