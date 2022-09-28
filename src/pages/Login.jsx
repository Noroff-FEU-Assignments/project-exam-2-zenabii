import { AdminLogin } from "../components/organisms/AdminLogin";
import { Footer } from "../components/organisms/Footer";

export default function Login({ login }) {
    return (
        <>
            <AdminLogin login={login} />
            <Footer />
        </>
    );
}
