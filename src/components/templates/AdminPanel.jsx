import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Enquires } from "../organisms/Enquiries";
import { NewMessages } from "../organisms/NewMessages";
import { AdministrateHotels } from "./AdministrateHotels";
import { TitleText } from "../molecules/TitleText";

function AdminPanel() {
    return (
        <>
            <section className="ExtremeMarginTop">
                <TitleText
                    theme="blue"
                    subject="Admin Panel"
                    title="Welcome to the Admin Panel"
                    paragraph="This is where you can see all new messages, check the latest enquiries and add new establishments!"
                    secondParagraph="Get started below with simply open up any of the tabs!"
                />
            </section>
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3 adminPanel"
            >
                <Tab eventKey="enquires" title="All enquires">
                    <Enquires />
                </Tab>
                <Tab eventKey="establishments" title="Add new establishment">
                    <AdministrateHotels />
                </Tab>
                <Tab eventKey="messages" title="New messages">
                    <NewMessages />
                </Tab>
            </Tabs>
        </>
    );
}

export default AdminPanel;
