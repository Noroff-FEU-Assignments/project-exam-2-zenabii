import { fetchContacts } from "../../settings/api";
import React from "react";
import { useState, useEffect } from "react";

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

    return (
        <>
            {results.map((contact) => (
                <>
                    <div className="dateAdded">
                        <p className="me-2">Message sent:</p>
                        {contact.attributes.createdAt}
                    </div>
                    <div className="enquireBody">
                        <div>
                            <span className="d-flex">
                                <p className="me-2">First name:</p>{" "}
                                <p>{contact.attributes.name}</p>
                            </span>
                            <span className="d-flex">
                                <p className="me-2">Last name:</p>{" "}
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
                </>
            ))}
        </>
    );
};
