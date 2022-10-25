import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/footer/Footer';
import Header from '../pages/header/Header';
import Lefside from '../pages/leftside/Lefside';
import RightSide from '../pages/Rightside/RightSide';

const MainPage = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="3">
                    <Lefside></Lefside>
                    </Col>
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='2' >
                    <RightSide></RightSide>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
            
        </div>
    );
};

export default MainPage;