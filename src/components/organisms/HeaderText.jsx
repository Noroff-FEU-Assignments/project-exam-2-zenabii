import { TitleText } from "../molecules/TitleText";

export const HeaderText = () => (
    <section className="two-columns-grid height">
        <div className="hero-text-column">
            <h1 className="reduced-line-height text-align-center">
                Holi<span className="font-weight">daze</span>
            </h1>
        </div>
        <div className="textWidth">
            <TitleText
                theme="blue"
                subject="Who are we"
                title="We tailor the best experience"
                paragraph="Our passion is to provide you the best travel experience in Iceland. We will go far to fulfill your needs!"
            />
        </div>
    </section>
);
