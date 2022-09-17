import { ArrowButton } from "../ArrowButton";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export const FeaturedItems = () => (
    <CardGroup>
        <Card className="border-bottom">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body className="d-flex justify-content-between">
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    <ArrowButton link="#" />
                </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                </Card.Text>
            </Card.Body>
        </Card>
    </CardGroup>
);
