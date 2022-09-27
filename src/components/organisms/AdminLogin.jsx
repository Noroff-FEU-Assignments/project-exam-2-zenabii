import { Heading } from "../molecules/Heading";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { authenticate } from "../../settings/api";
import { useNavigate } from "react-router-dom";

export const AdminLogin = (props) => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        setErrorMsg("");

        console.log(onSubmit);

        authenticate(username, password).then((res) => {
            if (res.error) {
                setErrorMsg("Invalid login credentials.");
            } else {
                navigate("/admin");
            }
        });
    };
    return (
        <section className="adminSection">
            <div className="loginTitle">
                <Heading
                    theme="blue"
                    subject="Admin panel"
                    title="Admin login"
                />
            </div>
            <div className="adminLoginSection">
                <Form onSubmit={(e) => onSubmit(e)}>
                    <div className="message-container">{errorMsg}</div>
                    <FloatingLabel
                        controlId="floatingName"
                        label="Username"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            placeholder="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        className="mb-3"
                    >
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FloatingLabel>
                    <Button type="submit">Login</Button>
                </Form>
            </div>
        </section>
    );
};
