import Breadcrumb from "react-bootstrap/Breadcrumb";

export const BreadcrumbNav = () => (
    <div className="NavMargin">
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Admin login</Breadcrumb.Item>
        </Breadcrumb>
    </div>
);

export default BreadcrumbNav;
