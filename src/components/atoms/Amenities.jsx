import { Heading } from "../molecules/Heading";

const barLounge = require("../../images/icons/bar_lounge.svg").default;
const bathRobe = require("../../images/icons/bathrobe.svg").default;
const fitnessCenter = require("../../images/icons/fitness_center.svg").default;
const flatscreenTv = require("../../images/icons/flatscreen_tv.svg").default;
const hairDryer = require("../../images/icons/hair-dryer.svg").default;
const housekeeping = require("../../images/icons/housekeeping.svg").default;
const minibar = require("../../images/icons/minibar.svg").default;
const restaurant = require("../../images/icons/restaurant.svg").default;
const roomService = require("../../images/icons/room_service.svg").default;
const safe = require("../../images/icons/safe.svg").default;
const shower = require("../../images/icons/shower.svg").default;
const spa = require("../../images/icons/spa.svg").default;
const taxiService = require("../../images/icons/taxi_service.svg").default;
const wifi = require("../../images/icons/wifi.svg").default;

export const Amenities = () => (
    <div className="amenitiesSection">
        <div>
            <h4 className="amenitiesTitle">Property amenities</h4>
            <div className="amenitiesGrid">
                <div className="iconWrapperAmenities">
                    <img
                        src={taxiService}
                        alt="taxi service"
                        className="amenityIcon"
                    />
                    <p className="no-margin">Taxi service</p>
                </div>
                <div className="iconWrapperAmenities">
                    <img src={spa} alt="spa service" className="amenityIcon" />
                    <p className="no-margin">Spa</p>
                </div>
                <div className="iconWrapperAmenities">
                    <img
                        src={barLounge}
                        alt="bar and lounge"
                        className="amenityIcon"
                    />
                    <p className="no-margin">Bar / lounge</p>
                </div>
                <div className="iconWrapperAmenities">
                    <img
                        src={wifi}
                        alt="wifi service"
                        className="amenityIcon"
                    />
                    <p className="no-margin">Wifi</p>
                </div>
                <div className="iconWrapperAmenities">
                    <img
                        src={restaurant}
                        alt="restaurant service"
                        className="amenityIcon"
                    />
                    <p className="no-margin">Restaurant</p>
                </div>
                <div className="iconWrapperAmenities">
                    <img
                        src={fitnessCenter}
                        alt="fitness center service"
                        className="amenityIcon"
                    />
                    <p className="no-margin">Fitness center</p>
                </div>
            </div>
        </div>
        <div>
            <h4 className="amenitiesTitle">Room features</h4>
            <div className="amenitiesGrid">
                <div className="iconWrapperAmenities">
                    <img
                        src={bathRobe}
                        alt="bathrobe service"
                        className="amenityIcon"
                    />
                    <p className="no-margin">Bathrobe</p>
                </div>
                <div className="iconWrapperAmenities">
                    <img
                        src={housekeeping}
                        alt="housekeeping service"
                        className="amenityIcon"
                    />
                    <p className="no-margin">Housekeeping</p>
                </div>
                <div className="iconWrapperAmenities">
                    <img
                        src={roomService}
                        alt="Room service "
                        className="amenityIcon"
                    />
                    <p className="no-margin">Room service</p>
                </div>
                <div className="iconWrapperAmenities">
                    <img
                        src={minibar}
                        alt="minibar service"
                        className="amenityIcon"
                    />
                    <p className="no-margin">Minibar</p>
                </div>
                <div className="iconWrapperAmenities">
                    <img
                        src={hairDryer}
                        alt="hair dryer service"
                        className="amenityIcon"
                    />
                    <p className="no-margin">Hair dryer</p>
                </div>
                <div className="iconWrapperAmenities">
                    <img
                        src={flatscreenTv}
                        alt="flatscreen tv  service"
                        className="amenityIcon"
                    />
                    <p className="no-margin">Flatscreen TV</p>
                </div>
                <div className="iconWrapperAmenities">
                    <img
                        src={safe}
                        alt="safe service"
                        className="amenityIcon"
                    />
                    <p className="no-margin">Safe</p>
                </div>
                <div className="iconWrapperAmenities">
                    <img
                        src={shower}
                        alt="shower  service"
                        className="amenityIcon"
                    />
                    <p className="no-margin">Shower</p>
                </div>
            </div>
        </div>
    </div>
);
