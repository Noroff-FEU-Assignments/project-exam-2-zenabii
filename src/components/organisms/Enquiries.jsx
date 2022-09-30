const image = require("../../images/atlantic-puffin-grass-green.jpg");

export const Enquires = () => (
    <>
        <span>Enquire request: 05/09/2022</span>
        <div className="enquireBody">
            <div>
                <img src={image} alt="illustration" className="enquireHotel" />
            </div>
            <div>
                <span className="d-flex">
                    <p className="me-2">Hotel:</p> <p>Hotel Borg</p>
                </span>
                <span className="d-flex">
                    <p className="me-2">First name:</p> <p>Jane</p>
                </span>
                <span className="d-flex">
                    <p className="me-2">Last name:</p> <p>Doe</p>
                </span>
                <span className="d-flex">
                    <p className="me-2">Email:</p> <p>jane.doe@gmail.com</p>
                </span>
                <span className="d-flex">
                    <p className="me-2">Message:</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipis cing
                        elit. Vivamus faucib us massa at auctor lacinia. Proin
                        porta a orci in aliquet.
                    </p>
                </span>
            </div>
        </div>
    </>
);
