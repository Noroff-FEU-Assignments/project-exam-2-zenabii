const image = require("../../../images/green-nature-old-house.jpg");

export const TextIllustrated = () => (
    <section className="two-columns-grid">
        <div className="text-part">
            <p className="subject">Introduction</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
            <p className="line-height">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                faucib us massa at auctor lacinia. Proin porta a orci in
                aliquet. Nam a nunc quam. Maecenas lacinia facilisis bibendum.
                Suspendisse potenti. Vivamus erat ligula, iaculis quis pulvinar
                id, imperdiet et orci.{" "}
            </p>
        </div>
        <div className="illustraton-part">
            <img src={image} alt="illustration" className="illustration"></img>
        </div>
    </section>
);
