import { Card } from "../organisms/Card";
import { TitleText } from "../molecules/TitleText";

export const HotelCards = () => (
    <section className="CardGroupComponent">
        <TitleText theme="blue" subject="Results" title="Our hotels" />
        <div className="cardGroup">
            <Card />
            <Card />
            <Card />
        </div>
        <div className="cardGroup">
            <Card />
            <Card />
            <Card />
        </div>
        <div className="cardGroup">
            <Card />
            <Card />
            <Card />
        </div>
    </section>
);
