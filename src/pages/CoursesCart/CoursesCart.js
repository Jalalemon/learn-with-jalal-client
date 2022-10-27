import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { FaFileDownload, IconName } from "react-icons/fa";
import PrivateRoute from '../../privateRoute/PrivateRoute';
const CoursesCart = ({singleCourse}) =>{
    const [accepted, setAccepted] = useState(false)
    console.log(singleCourse);
    const { balance, address, about, name,_id,id, picture } = singleCourse;

    const handleAccepted = (event) =>{
        setAccepted(event.target.checked)
    }
    return (
      <Card>

        <Button className='m-4 w-60 mx-auto'> Download pdf<FaFileDownload className='ms-2'></FaFileDownload> </Button>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>name: {name}</Card.Title>
          <Card.Text>
            {" "}
            {about.length > 200 ? (
              <p>
                {about.slice(0, 200) + "..."}{" "}
                <Link to={`/coursedetails/${_id}`}>reademore</Link>{" "}
              </p>
            ) : (
              <p>{about} </p>
            )}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                onClick={handleAccepted}
                label={
                  <>
                    {" "}
                    Accept<Link to="/terms"> Terms and condition</Link>{" "}
                  </>
                }
              />
            </Form.Group>
          </Card.Text>
        
            <Link
              className="d-flex align-items-center justify-content-between"
              to={`/coursedetails/${_id}`}
            >
              <Button disabled={!accepted} variant="primary">
                <p>Get access</p>
              </Button>
              <h5 className="text-primary">Price: {balance}</h5>
            </Link>
        
        </Card.Body>
      </Card>
    );
};

export default CoursesCart;