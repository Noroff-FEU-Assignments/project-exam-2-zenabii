import Breadcrumb from "react-bootstrap/Breadcrumb";

export const BreadcrumbNav = (pathList) => (

    <div className="NavMargin">
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>            
            <Breadcrumb.Item href="/findyourstay">{pathList.pathList[0]}</Breadcrumb.Item>
            <Breadcrumb.Item active>{pathList.pathList[1]}</Breadcrumb.Item>
        </Breadcrumb>
    </div>


);
