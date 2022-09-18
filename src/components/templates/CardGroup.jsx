import { Card } from "../organisms/Card";

export const CardGroup = () => (
    <section className="CardGroupComponent">
        <div className="text-part">
            <p className="subject">Booking</p>
            <h2>Plan your stay</h2>
        </div>
        <div className="cardGroup">
            <Card />
            <Card />
            <Card />
        </div>
    </section>
);
