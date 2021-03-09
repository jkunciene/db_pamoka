import React from 'react'
import { Form, Button } from 'react-bootstrap'

function Contacts() {
    return (
        <div className="mt-5">
            <Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />               
            </Form.Group>
             <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />               
            </Form.Group>
           <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Question</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default Contacts
