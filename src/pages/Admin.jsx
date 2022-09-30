import AdminPanel from "../components/templates/AdminPanel";
import { PageTitle } from "../components/atoms/PageTitle";

export default function Admin() {
    return (
        <>
            <PageTitle
                title="Admin panel"
                description="The admin panel for creating new establishments and handle enquiries."
            />
            <AdminPanel />
        </>
    );
}
