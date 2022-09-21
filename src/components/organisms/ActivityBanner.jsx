import { BannerText } from "../molecules/BannerText";

const image = require("../../images/atlantic-puin-nature-ocean.jpg");

export const ActivityBanner = () => (
    <section className="activityBanner">
        <img
            src={image}
            className="activityBannerImg"
            alt="green landscape mountains snow"
        />
        <div className="activityBannerPosition">
            <BannerText
                theme="blue"
                subject="Introduction"
                title="Experience true
                wildlife with us"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
        </div>
    </section>
);
