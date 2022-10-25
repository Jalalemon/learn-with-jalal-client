import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
const CoursesCart = ({singleCourse}) =>{
    console.log(singleCourse);
    const { balance, address, about, name,_id, picture } = singleCourse;
    return (
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>name: {name}</Card.Title>
          <Card.Text>
            {" "}
            {about.length > 200 ? (
              <p>
                {about.slice(0, 200) + "..."}{" "}
                <Link to={`/allCourse/${_id}`}>reademore</Link>{" "}
              </p>
            ) : (
              <p>{about} </p>
            )}
          </Card.Text>
          <Link to={`/allCourse/${_id}`}>
            <Button variant="primary">Get premium access</Button>
          </Link>
        </Card.Body>
      </Card>
    );
};

export default CoursesCart;