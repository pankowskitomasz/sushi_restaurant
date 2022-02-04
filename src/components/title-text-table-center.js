import React,{Component} from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";

class TitleTextTableCenter extends Component{
    render(){
        return(        
            <Container fluid className={"contact-data align-items-center py-5 d-flex minh-100vh "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5">
                    <Col xs={12} md={7} className="mx-auto minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center">
                            <h2 className="dispaly-6 fw-bold text-green">
                                Menu and pricing
                            </h2>
                            <p className="text-white">
                                Wondering what's best here at this evening go-to? Users love the Pick Any Three 
                                Rolls, which is one of the most ordered items on the menu, as well as the Large 
                                Create You Own bowl and the Regular Create You Own Bowl, which are two of the 
                                items most commonly ordered together.
                            </p>
                            <Table hover striped className="text-start">
                                <thead>
                                    <tr className="text-green">
                                        <th className="w-25">Name</th>
                                        <th className="w-50">Description</th>
                                        <th className="w-25">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default TitleTextTableCenter;