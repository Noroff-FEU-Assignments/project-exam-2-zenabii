import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export const Review = () => {
    const svgBlack = require("../../images/arrow-right.svg").default;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(show);

    return (
        <>
            <div className="reviewColumn">
                <div className="reviewSection">
                    <span>
                        <p className="threeRem no-margin">4.5</p>
                    </span>
                    <span className="scoreContainer">
                        <p className="no-margin reviewRating">Excellent</p>
                        <p className="no-margin reviewPlacement">
                            #14 of 59 hotels in Reykjavik
                        </p>
                    </span>
                </div>
                <Button onClick={handleShow}>
                    Send an enquiry{" "}
                    <img
                        src={svgBlack}
                        className="buttonIcon flex-shrink-1 "
                        alt="arrow pointing right"
                    />
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
};
