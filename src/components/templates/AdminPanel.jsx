import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Paragraph } from "../atoms/Paragraph";
import { Enquires } from "../organisms/Enquiries";
import { NesMessages } from "../organisms/NewMessages";
import { CreateHotel } from "../organisms/CreateHotel";

function AdminPanel() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3 adminPanel"
            justify
        >
            <Tab eventKey="enquires" title="All Enquires">
                <Enquires />
            </Tab>
            <Tab eventKey="establishments" title="Create new establishment">
                <CreateHotel />
            </Tab>
            <Tab eventKey="messages" title="New messages">
                <NesMessages />
            </Tab>
        </Tabs>
    );
}

export default AdminPanel;
