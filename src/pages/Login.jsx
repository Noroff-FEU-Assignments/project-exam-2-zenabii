import { AdminLogin } from "../components/organisms/AdminLogin";
import { PageTitle } from "../components/atoms/PageTitle";

export default function Login({ login }) {
    return (
        <>
            <PageTitle
                title="Admin login"
                description="Login page for administration of Holidaze."
            />
            <AdminLogin login={login} />
        </>
    );
}
