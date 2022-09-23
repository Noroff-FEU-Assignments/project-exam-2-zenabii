import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "../atoms/Button";

function ContactForm() {
    return (
        <>
            <section className="formColumn mt-5">
                <div className="me-3">
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
                </div>
                <div>
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
                </div>
            </section>
            <section>
                <FloatingLabel
                    controlId="floatingSelect"
                    label="What can we help you with?"
                    className="mb-3"
                >
                    <Form.Select aria-label="Floating label select example">
                        <option>Payment options</option>
                        <option value="1">Refunds</option>
                        <option value="2">Cancellation</option>
                        <option value="3">Additional questions</option>
                    </Form.Select>
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
                <Button theme="black" link="#" text="Send an enquiry" />
            </section>
        </>
    );
}

export default ContactForm;
