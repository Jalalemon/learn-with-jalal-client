import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsFillExclamationOctagonFill, IconName } from "react-icons/bs";
const Footer = () => {
    
    return (
      <div>
        <Card className="mt-5 text-center h-4 bg-dark">
          <Card.Header className='text-danger'>Footer</Card.Header>
          <Card.Body>
            <Card.Title className='text-light'>Learn With Jalal</Card.Title>
           <BsFillExclamationOctagonFill className='text-primary'></BsFillExclamationOctagonFill>
          </Card.Body>
        </Card>
      </div>
    );
};

export default Footer;