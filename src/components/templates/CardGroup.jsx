import { Card } from "../organisms/Card";
import { TitleText } from "../atoms/TitleText";

export const CardGroup = () => (
    <section className="CardGroupComponent">
        <TitleText subject="Booking" title="Plan your stay" />
        <div className="cardGroup">
            <Card />
            <Card />
            <Card />
        </div>
    </section>
);
