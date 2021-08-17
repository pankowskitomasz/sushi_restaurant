import React,{Component} from "react";
import RegisterForm from "../components/register-form";

class Register extends Component{
    render(){
        return(          
            <main className="minh-footer-adj">    
                <RegisterForm backLink={this.props.backLink}/>
            </main>
        );
    }
}

export default Register;