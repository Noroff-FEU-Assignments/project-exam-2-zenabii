import { Card } from "../organisms/Card";
import { TitleText } from "../molecules/TitleText";

export const CardGroup = () => (
    <section className="CardGroupComponent">
        <TitleText theme="blue" subject="Booking" title="Plan your stay" />
        <div className="cardGroup">
            <Card />
            <Card />
            <Card />
        </div>
    </section>
);
