import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../settings/api";

function ContactForm() {
    const url = baseUrl + "contacts";

    const [validated, setValidated] = useState(false);

    const handleValidationOnSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        console.log("submit");
        console.log(handleSubmit);
        console.log(setForm);
    };

    const [form, setForm] = useState({
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

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(
            url,
            { data: form },
            {
                headers: { "content-type": "application/json" },
            }
        );
        console.log("submit");
        console.log(handleSubmit);
        console.log(form);
    };

    return (
        <>
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
                        value={form.name}
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
                        value={form.lastname}
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
                        value={form.email}
                        onChange={(e) => handleOnChange(e, "email")}
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
                        onChange={(e) => handleOnChange(e, "message")}
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
        </>
    );
}

export default ContactForm;
