import { ArrowButton } from "../atoms/ArrowButton";

export const Card = ({ img, title, link, alternativetext }) => (
    <a href={link}>
        <div className="card">
            <img src={img} alt={alternativetext} className="cardIllustration" />
            <div className="cardBody">
                <h4>{title}</h4>
                <ArrowButton />
            </div>
        </div>
    </a>
);
