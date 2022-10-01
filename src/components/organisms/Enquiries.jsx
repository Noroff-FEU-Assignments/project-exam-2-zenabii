import { fetchEnequiries } from "../../settings/api";
import React from "react";
import { useState, useEffect } from "react";

export const Enquires = () => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [enquiry, setEnquiry] = useState([]);

    useEffect(() => {
        fetchEnequiries().then((enquiry) => {
            setLoading(false);
            setEnquiry(enquiry);
        });
    }, []);

    const results =
        searchTerm.length > 1
            ? enquiry.filter(
                  (enquiry) =>
                      enquiry.id
                          .toLowerCase()
                          .indexOf(searchTerm.toLowerCase()) !== -1
              )
            : enquiry;

    return (
        <>
            {results.map((enquiry) => (
                <>
                    <div className="dateAdded">
                        <p className="me-2">Message sent:</p>
                        {enquiry.attributes.createdAt}
                    </div>
                    <div className="enquireBody bodyFlex" key={enquiry.id}>
                        <div>
                            <img
                                src={enquiry.attributes.hoteldata.img}
                                alt="The requested hotel in this enquiry"
                                className="enquireHotel"
                            />
                        </div>
                        <div key={enquiry.id}>
                            <span className="d-flex">
                                <p className="me-2">Hotel:</p>{" "}
                                <p>{enquiry.attributes.hoteldata.title}</p>
                            </span>
                            <span className="d-flex">
                                <p className="me-2">First name:</p>{" "}
                                <p>{enquiry.attributes.name}</p>
                            </span>
                            <span className="d-flex">
                                <p className="me-2">Last name:</p>{" "}
                                <p>{enquiry.attributes.lastname}</p>
                            </span>
                            <span className="d-flex">
                                <p className="me-2">Email:</p>{" "}
                                <p>{enquiry.attributes.email}</p>
                            </span>
                            <span className="d-flex">
                                <p className="me-2">Message:</p>
                                <p>{enquiry.attributes.message}</p>
                            </span>
                        </div>
                    </div>
                </>
            ))}
        </>
    );
};
