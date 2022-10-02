import { fetchContacts } from "../../settings/api";
import React from "react";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

export const NewMessages = () => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts().then((contacts) => {
            setLoading(false);
            setContacts(contacts);
        });
    }, []);

    const results =
        searchTerm.length > 1
            ? contacts.filter(
                  (contacts) =>
                      contacts.id
                          .toLowerCase()
                          .indexOf(searchTerm.toLowerCase()) !== -1
              )
            : contacts;

    if (loading) {
        return <Spinner />;
    }

    return results.map((contact) => (
        <React.Fragment key={contact.id}>
            <div className="enquireBody">
                <div>
                    <span className="d-flex">
                        <p className="me-2">First name:</p>
                        <p>{contact.attributes.name}</p>
                    </span>
                    <span className="d-flex">
                        <p className="me-2">Last name:</p>
                        <p>{contact.attributes.lastname}</p>
                    </span>
                    <span className="d-flex">
                        <p className="me-2">Email:</p>
                        <p>{contact.attributes.email}</p>
                    </span>
                    <span className="d-flex">
                        <p className="me-2">Message:</p>
                        <p>{contact.attributes.message}</p>
                    </span>
                </div>
            </div>
        </React.Fragment>
    ));
};
