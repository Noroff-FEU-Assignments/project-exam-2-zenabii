import { ArrowButton } from "../atoms/ArrowButton";

export const Card = ({ img, title, link }) => (
    <a href={link}>
        <div className="card">
            <img src={img} alt="illustration" className="cardIllustration" />
            <div className="cardBody">
                <h4>{title}</h4>
                <ArrowButton link={link} />
            </div>
        </div>
    </a>
);
