import Breadcrumb from "react-bootstrap/Breadcrumb";

export const BreadcrumbNav = (pathList) => (

    <div className="NavMargin">
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            {pathList && Object.keys(pathList).length && (Object.keys(pathList).map((path, index) => {
               return <Breadcrumb.Item key={index} active={index === Object.keys(pathList).length -1}>{path}</Breadcrumb.Item>
            }))}
            
        </Breadcrumb>
    </div>


);
