import React from "react";
import { Button, Form } from "react-bootstrap";


export default function ReviewForm({handelSubmit, defaultText, revText, labelText}) {
    return (
        <Form>
            <Form.Group>
                <Form.Label className="mb-3">{labelText}</Form.Label>
                <Form.Control ref={revText} type="textarea" defaultValue={defaultText}></Form.Control>
            </Form.Group>
            <Button variant="outline-primary" onClick={handelSubmit}>Submit</Button>{' '}
        </Form>
    )
}