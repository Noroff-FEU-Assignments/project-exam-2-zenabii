import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title, description }) => (
    <Helmet>
        <meta charSet="utf-8" />
        <title>Holidaze | {title}</title>
        <meta name="description" content={description} />
    </Helmet>
);
