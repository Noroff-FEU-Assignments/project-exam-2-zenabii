import { Button } from "../atoms/Button";

export const QnaCta = () => (
    <section className="background">
        <div>
            <h3 className="white-color fourRem">Questions?</h3>
            <h3 className="white-color fourRem">Just ask!</h3>
        </div>
        <div className="quoteWidth">
            <p className="white-color margin-bottom">
                It's not always easy to know what you're missing out on when
                travelling to a new country. Send us an email and we will
                personally tailor your trip to your liking.
            </p>
            <Button theme="white" link="/ContactUs" text="Send us an email" />
        </div>
    </section>
);
