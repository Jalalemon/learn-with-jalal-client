import React from 'react';
import { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)
     const handleSubmit = (event) => {
       event.preventDefault();
       const form = event.target.form;
       const email = form.email.value;
       const password = form.password.value;

       console.log(email, password);
           createUser(email, password)
             .then((result) => {
               const user = result.user;
               console.log(user);
               form.reset();
             })
             .catch((error) => console.error(error));

     };
     return (
       <Form onClick={handleSubmit}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" name="email" placeholder="Enter email" />
           <Form.Text className="text-muted">
             We'll never share your email with anyone else.
           </Form.Text>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control
             type="password"
             name="password"
             placeholder="Password"
           />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
           <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>
         <Button variant="primary" type="submit">
           Register
         </Button>
       </Form>
     );
};

export default Register;