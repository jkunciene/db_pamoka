import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import firebase from "./firebase"

function Contacts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // sitoje vietoje namu darbas - formos validacija, kad neleistu pateikti tusciu lauku
        firebase
        .firestore()
        .collection('contacts').add({
            name:name,
            email:email,
            message:message,
        })
        .then(()=>{
            alert("tau pavyko, zinute gauta")
        })
        .catch((error)=>{
            alert(error.message)
        })

        
    }
    return (
        <div className="mt-5">
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Enter your name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />               
            </Form.Group>
             <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}/>               
            </Form.Group>
           <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Question</Form.Label>
                <Form.Control 
                as="textarea" 
                rows={3} 
                value={message}
                onChange={(e)=>setMessage(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default Contacts
