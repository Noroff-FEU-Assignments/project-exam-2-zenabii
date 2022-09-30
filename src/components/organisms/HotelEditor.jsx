import { Button } from "react-bootstrap";

export const HotelEditor = ({ img, title }) => (
    <div className="card">
        <img src={img} alt="illustration" className="cardIllustration" />
        <div className="cardBody">
            <h4>{title}</h4>
            <Button>Save changes</Button>
            <Button>Delete</Button>
        </div>
    </div>
);
