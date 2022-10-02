import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../settings/api";
import Spinner from "react-bootstrap/Spinner";
import { DisplayMessage } from "../atoms/DisplayMessage";

export const ContactForm = () => {
    const url = baseUrl + "contacts";
    const [loading, setLoading] = useState(true);
    const [validated, setValidated] = useState(false);
    const [message, setMessage] = useState("");
    const [errormessage, setErrormessage] = useState("");

    const blankForm = {
        name: "",
        lastname: "",
        email: "",
        message: "",
    };

    const [form, setForm] = useState(blankForm);

    const handleOnChange = (key) => (e) => {
        setForm({
            ...form,
            [key]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        setValidated(true);

        const contactForm = e.currentTarget;
        if (contactForm.checkValidity() === true) {
            const response = await axios.post(
                url,
                { data: form },
                {
                    headers: { "content-type": "application/json" },
                }
            );
            if (response.status === 200) {
                setMessage("Your message has been sent!");
                setForm(blankForm);
                setValidated(false);
            } else {
                setErrormessage("Something happend!");
            }
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit} noValidate validated={validated}>
                <FloatingLabel
                    controlId="floatingName"
                    label="name"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="First name"
                        value={form.name}
                        onChange={handleOnChange("name")}
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
                        value={form.lastname}
                        onChange={handleOnChange("lastname")}
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
                        value={form.email}
                        onChange={handleOnChange("email")}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide with your email adress.
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
                        value={form.message}
                        onChange={handleOnChange("message")}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please tell us what we can help you with.
                    </Form.Control.Feedback>
                </FloatingLabel>
                <Button theme="black" link="#" type="submit">
                    Send an enquiry
                </Button>
            </Form>
            <div className="message-container">
                {message && (
                    <DisplayMessage message={message} messageType={"success"} />
                )}
                {errormessage && (
                    <DisplayMessage
                        message={errormessage}
                        messageType={"error"}
                    />
                )}
            </div>
        </>
    );
};
