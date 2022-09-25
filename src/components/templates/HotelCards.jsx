import { Card } from "../organisms/Card";
import { TitleText } from "../molecules/TitleText";

const image = require("../../images/green-nature-old-house.jpg");

export const HotelCards = () => (
    <section className="CardGroupComponent">
        <TitleText theme="blue" subject="Results" title="Our hotels" />
        <div className="cardGroup">
            <Card img={image} title="test" link="#" />
            <Card img={image} title="test" link="#" />
            <Card img={image} title="test" link="#" />
        </div>
        <div className="cardGroup">
            <Card img={image} title="test" link="#" />
            <Card img={image} title="test" link="#" />
            <Card img={image} title="test" link="#" />
        </div>
        <div className="cardGroup">
            <Card img={image} title="test" link="#" />
            <Card img={image} title="test" link="#" />
            <Card img={image} title="test" link="#" />
        </div>
    </section>
);
