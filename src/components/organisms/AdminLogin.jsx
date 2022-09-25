import { Heading } from "../molecules/Heading";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "../atoms/Button";

export const AdminLogin = () => (
    <section className="adminSection">
        <div className="loginTitle">
            <Heading theme="blue" subject="Admin panel" title="Admin login" />
        </div>
        <div className="adminLoginSection">
            <FloatingLabel
                controlId="floatingName"
                label="Name"
                className="mb-3"
            >
                <Form.Control type="name" placeholder="First name" />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
            >
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <Button theme="black" link="#" text="Login" />
        </div>
    </section>
);
