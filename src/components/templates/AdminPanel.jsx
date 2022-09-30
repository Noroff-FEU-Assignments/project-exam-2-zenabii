import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Enquires } from "../organisms/Enquiries";
import { NesMessages } from "../organisms/NewMessages";
import { AdministrateHotels } from "./AdministrateHotels";

function AdminPanel() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3 adminPanel"
            justify
        >
            <Tab eventKey="enquires" title="All Enquires">
                <span>heia</span>
            </Tab>
            <Tab eventKey="establishments" title="Create new establishment">
                <AdministrateHotels />
            </Tab>
            <Tab eventKey="messages" title="New messages">
                <NesMessages />
            </Tab>
        </Tabs>
    );
}

export default AdminPanel;
