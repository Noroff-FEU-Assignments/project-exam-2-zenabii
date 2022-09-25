import { Card } from "../organisms/Card";
import { TitleText } from "../molecules/TitleText";
const image = require("../../images/green-nature-old-house.jpg");

export const CardGroup = () => (
    <section className="CardGroupComponent">
        <TitleText theme="blue" subject="Booking" title="Plan your stay" />
        <div className="cardGroup">
            <Card img={image} title="test" link="#" />
            <Card img={image} title="test" link="#" />
            <Card img={image} title="test" link="#" />
        </div>
    </section>
);
