import BreadcrumbNav from "../components/atoms/BreadcrumbNav";
import { AdminLogin } from "../components/organisms/AdminLogin";
import { Footer } from "../components/organisms/Footer";

const image = require("../images/winter-white-house-nature.jpg");

export default function Login() {
    return (
        <>
            <BreadcrumbNav />
            <AdminLogin />

            <Footer />
        </>
    );
}
