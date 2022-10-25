import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const CoursesCart = ({singleCourse}) =>{
    console.log(singleCourse);
    const { balance, address, about, name, picture } = singleCourse;
    return (
      <Card style={{ width: "28rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>name: {name}</Card.Title>
          <Card.Text> {about}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
};

export default CoursesCart;