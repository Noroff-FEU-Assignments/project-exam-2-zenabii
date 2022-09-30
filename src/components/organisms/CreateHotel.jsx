import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Button } from "react-bootstrap";

export const CreateHotel = () => (
    <>
        <section className="formColumn mt-5">
            <div>
                <FloatingLabel
                    controlId="floatingTitle"
                    label="Title"
                    className="mb-3"
                >
                    <Form.Control type="title" placeholder="Title" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Information"
                    className="mb-3"
                >
                    <Form.Control
                        as="textarea"
                        placeholder="Information about the hotel"
                        style={{ height: "100px" }}
                    />
                </FloatingLabel>
            </div>
        </section>
        <section>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload images</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Button theme="black" link="#">
                Send an enquiry
            </Button>
        </section>
    </>
);
