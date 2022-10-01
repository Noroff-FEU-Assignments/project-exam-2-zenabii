import { Button } from "../atoms/Button";

export const QnaCta = () => (
    <section className="background">
        <div>
            <h3 className="white-color fourRem">Questions?</h3>
            <h3 className="white-color fourRem">Just ask!</h3>
        </div>
        <div className="quoteWidth">
            <p className="white-color margin-bottom">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                faucib us massa at auctor lacinia.
            </p>
            <Button theme="white" link="/ContactUs" text="Send us an email" />
        </div>
    </section>
);
