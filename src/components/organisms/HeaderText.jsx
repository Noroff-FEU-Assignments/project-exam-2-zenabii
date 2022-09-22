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
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            faucib us massa at auctor lacinia."
            />
        </div>
    </section>
);
