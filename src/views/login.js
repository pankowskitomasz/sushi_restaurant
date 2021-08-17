import React,{Component} from "react";
import LoginForm from "../components/login-form";

class Login extends Component{
    render(){
        return(          
            <main className="minh-footer-adj">    
                <LoginForm backLink={this.props.backLink}/>
            </main>
        );
    }
}

export default Login;