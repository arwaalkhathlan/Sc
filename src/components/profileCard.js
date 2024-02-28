import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Nav, Col, Row ,Image } from "react-bootstrap";
import profile from '../assets/profile.png';


const ProfileCard = () => {
    return ( 
         <Card Card style={{ width: '15rem'  }}> 
          <Card.Body >
            <Image  src={profile} style={{ width: '140px',marginLeft:'29px' }} />
            <Card.Title className="text-center">userName</Card.Title>
            <Card.Subtitle  className="mb-2 text-muted text-center">example@example.com</Card.Subtitle>

            <Container fluid="md" >
              <Nav className="justify-content-center">
                <Row >
                  <Nav.Item style={{ marginBottom: '8px'}}>
                    < Col className="text-center">
                      <Card.Link style={{textDecoration:'none' ,color:'black'}} href="#" >Personal information</Card.Link>
                    </Col>
                  </Nav.Item >
                </Row>
                <Row>
                  <Nav.Item style={{ marginBottom: '8px'}} >
                    <Col>
                      <Link to={'/myCourses'} style={{textDecoration:'none' ,color:'black'}} href="#">My Courses</Link>
                    </Col>
                  </Nav.Item>
                </Row>
                <Row>
                  <Nav.Item  style={{ marginBottom: '8px'}}>
                  <Col>
                  <Link to={'/reviewProject'} style={{textDecoration:'none' ,color:'black'}} href="#">Review Projects</Link>
                  </Col>
                  </Nav.Item>
                </Row>
              </Nav>
            </Container>
            </Card.Body>
        </Card> );
}
 
export default ProfileCard;