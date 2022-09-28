import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export const Review = () => {
    const svgBlack = require("../../images/arrow-right.svg").default;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // console.log(show);

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
                    <Modal.Title>
                        Do you wish to send a request on this hotel?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        controlId="floatingName"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control type="name" placeholder="First name" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingLastName"
                        label="Last name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Last Name" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingPhone"
                        label="Phone"
                        className="mb-3"
                    >
                        <Form.Control type="phone" placeholder="Phone" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Message"
                        className="mb-3"
                    >
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a message here"
                            style={{ height: "100px" }}
                        />
                    </FloatingLabel>
                    <Button onClick={handleClose}>Send an enquiry</Button>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
};
