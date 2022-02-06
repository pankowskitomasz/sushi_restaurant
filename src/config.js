import {Redirect} from "react-router-dom";
import About from "./views/about";
import Basket from "./views/basket";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Error from "./views/error";
import Home from "./views/home";
import Login from "./views/login";
import Menu from "./views/menu";
import PrivacyPolicy from "./views/privacy";
import Register from "./views/register";

const appCfg = {
    routes:[
        {navItem:true, exact:true, path:"/",name:"Home",view:<Home backLink={{name:"See more",path:"/menu"}}/>}, 
        {navItem:true, exact:true, path:"/menu",name:"Menu",view:<Menu/>}, 
        {navItem:true, exact:true, path:"/about",name:"About",view:<About/>}, 
        {navItem:true, exact:true, path:"/contact",name:"Contact",view:<Contact/>}, 
        {navItem:true, exact:true, path:"/basket",name:<span className="fa fa-shopping-cart"></span>,view:<Basket/>}, 
        {navItem:true, exact:true, path:"/login",name:<span className="fa fa-user-circle-o"></span>,view:<Login backLink={{name:" Register now!",href:"/register"}}/>}, 
        {navItem:false, exact:true, path:"/register",name:"Register",view:<Register backLink={{name:" Login now!",href:"/login"}}/>}, 
        {navItem:false, exact:true, path:"/comingsoon",name:"Comingsoon",view:<Comingsoon/>},                
        {navItem:false, exact:false, path:"/error",name:"Error",view:<Error backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:true, path:"/privacy",name:"Privacy",view: <PrivacyPolicy backLink={{name:"back to Home",href:"/"}}/>},                
        {navItem:false, exact:false, path:"*",name:"any",view:<Redirect to="/error"/>}
    ]
};

const APP_LINKS = {
    messages: "http://localhost/sushi_restaurant/public/message.php",
    register: "register.php",
    users: "http://localhost/sushi_restaurant/public/user.php"
};

const msgCfg = {
    pageSize: 10
};

export {
    appCfg,
    APP_LINKS,
    msgCfg
}