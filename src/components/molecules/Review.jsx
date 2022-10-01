import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { baseUrl } from "../../settings/api";
import axios from "axios";

export const Review = ({ id, title, img }) => {
    const svgBlack = require("../../images/arrow-right.svg").default;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const url = baseUrl + "enquiries";

    const [validated, setValidated] = useState(false);

    const handleValidationOnSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const [form, setForm] = useState({
        hoteldata: {
            id,
            title,
            img,
        },
        name: "",
        lastname: "",
        email: "",
        message: "",
    });

    const handleOnChange = (e, key) => {
        setForm({
            ...form,
            [key]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post(
            url,
            { data: form },
            {
                headers: { "content-type": "application/json" },
            }
        );
        console.log(handleSubmit);
        console.log(form);
    };

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
                    Send an enquiry
                    <img
                        src={svgBlack}
                        className="buttonIcon flex-shrink-1 "
                        alt="arrow pointing right"
                        id="animation"
                    />
                </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Do you wish to send a request on this hotel?
                        <div className="requestContainer">
                            <img
                                src={img}
                                className="requestImg"
                                alt="asdf"
                                onChange={(e) => handleOnChange(e, "img")}
                            />
                            <div className="requestGrid">
                                <span onChange={(e) => handleOnChange(e, "id")}>
                                    ID: {id}
                                </span>
                                <span
                                    onChange={(e) => handleOnChange(e, "title")}
                                >
                                    {title}
                                </span>
                            </div>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={(handleSubmit, handleValidationOnSubmit)}
                        noValidate
                        validated={validated}
                    >
                        <FloatingLabel
                            controlId="floatingName"
                            label="name"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="First name"
                                onChange={(e) => handleOnChange(e, "name")}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please fill in your first name.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingLastName"
                            label="lastname"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                onChange={(e) => handleOnChange(e, "lastname")}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please fill in your last name.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="email"
                            className="mb-3"
                        >
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                onChange={(e) => handleOnChange(e, "email")}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide your email adress.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingTextarea2"
                            label="message"
                            className="mb-3"
                        >
                            <Form.Control
                                as="textarea"
                                type="text"
                                placeholder="Leave a message here"
                                style={{ height: "100px" }}
                                onChange={(e) => handleOnChange(e, "message")}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please fill in information about date and
                                pricerange you're interested in.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                        <Button
                            // onClick={handleClose}
                            type="submit"
                            onSubmit={handleSubmit}
                        >
                            Send an enquiry
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
};
