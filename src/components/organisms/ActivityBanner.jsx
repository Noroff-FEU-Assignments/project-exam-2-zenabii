import { Heading } from "../molecules/Heading";

const image = require("../../images/atlantic-puin-nature-ocean.jpg");

export const ActivityBanner = () => (
    <section className="activityBanner">
        <img
            src={image}
            className="activityBannerImg"
            alt="green landscape mountains snow"
        />
        <div className="activityBannerPosition">
            <Heading
                theme="blue"
                subject="Introduction"
                title="Experience true
                wildlife with us"
            />
        </div>
    </section>
);
