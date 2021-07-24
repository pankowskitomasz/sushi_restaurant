import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import {Link} from "react-router-dom";

class Error extends Component{
    render(){
        return(        
            <Container fluid className="error-s1 d-flex align-items-center p-header">
                <Row className="mx-auto text-center d-flex w-100">
                    <Col xs={10} sm={7} md={6} lg={5} xl={4}  className="mx-auto text-shadow">
                        <div className="card bg-dark text-white box-shadow p-3 py-5 opacity-8 border border-secondary">
                            <h2 class="text-white font-weight-bold">
                                Page not found!
                            </h2>                            
                            <div className="w-100">
                                <Link to={this.props.backLink.href} className="btn btn-outline-light d-inline rounded-pill mt-3">
                                    {this.props.backLink.name}
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default Error;