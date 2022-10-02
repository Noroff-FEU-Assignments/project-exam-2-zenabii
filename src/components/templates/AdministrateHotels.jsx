import { Link } from "react-router-dom";
import { useState, useEffect, React, useRef } from "react";
import {
    fetchHotels,
    createHotel,
    updateHotel,
    deleteHotel,
} from "../../settings/api";
import { DisplayMessage } from "../atoms/DisplayMessage";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

export const AdministrateHotels = () => {
    const blankHotel = {
        title: "",
        information: "",
        price: "",
        featured: false,
    };

    const [hotels, setHotels] = useState([]);
    const [newHotel, setNewHotel] = useState(blankHotel);
    const [displayMessage, setDisplayMessage] = useState("");
    const [displayErrorMessage, setDisplayErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [editMessage, setEditMessage] = useState("");
    const [editErrorMessage, setEditErrorMessage] = useState("");
    const messageRef = useRef();

    const validateHotelForm = (hotel) =>
        hotel.title.length === 0 ||
        hotel.price.length === 0 ||
        isNaN(hotel.price) ||
        hotel.information.length === 0
            ? false
            : true;

    const updateNewHotelProperty = (key, value) => {
        setNewHotel({
            ...newHotel,
            [key]: value,
        });
    };

    const updateHotelProperty = (index, key, value) => {
        setHotels(
            hotels.map((hotel, i) =>
                i !== index
                    ? hotel
                    : {
                          ...hotel,
                          attributes: {
                              ...hotel.attributes,
                              [key]: value,
                          },
                      }
            )
        );
    };

    const onNewSubmit = (e) => {
        e.preventDefault();
        if (!validateHotelForm(newHotel)) {
            return setDisplayErrorMessage("oops! Something happend!");
        }

        setLoading(true);

        // Create, then refresh products, clean up form and set success message.
        createHotel(e.target).then(() => {
            fetchHotels().then((res) => setHotels(res));
            setNewHotel(blankHotel);
            e.target.reset();
            setDisplayMessage("Your new establishment has been created!");
            setLoading(false);
        });
    };

    const onUpdateSubmit = (e, index) => {
        e.preventDefault();

        const hotel = hotels[index];

        // Update, then refresh products.
        updateHotel(hotel.id, e.target).then(() => {
            fetchHotels().then((res) => setHotels(res));
            setEditMessage("Your establishment has been updated!");
            messageRef.current.scrollIntoView();
        });
    };

    const onDeleteProduct = (hotelId) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            // Delete product, then refresh state with current products from a new fetch result.
            deleteHotel(hotelId).then(() => {
                fetchHotels().then((res) => setHotels(res));
            });
        }
    };

    useEffect(() => {
        fetchHotels().then((res) => {
            setHotels(res);
            console.log(res);
        });
    }, []);

    return (
        <>
            <section className="addHotels">
                <h2 className="text-align-center">Add new establishments</h2>
                <form onSubmit={onNewSubmit}>
                    <div className="message-container">
                        {displayMessage && (
                            <DisplayMessage
                                message={displayMessage}
                                messageType={"success"}
                            />
                        )}
                        {displayErrorMessage && (
                            <DisplayMessage
                                message={displayErrorMessage}
                                messageType={"error"}
                            />
                        )}
                    </div>
                    <p>You can select multiple images!</p>
                    <div className="input-group upload mb-3">
                        <input
                            name="images"
                            type="file"
                            className="form-control edit"
                            id="inputGroupFile02"
                            multiple
                        />
                    </div>
                    <div className="input-group upload mb-3">
                        <input
                            name="title"
                            type="text"
                            className="form-control edit"
                            placeholder="title"
                            value={newHotel.title}
                            onChange={(e) =>
                                updateNewHotelProperty("title", e.target.value)
                            }
                        />
                    </div>
                    <div className="input-group upload mb-3">
                        <input
                            name="price"
                            type="number"
                            className="form-control edit"
                            placeholder="price"
                            value={newHotel.price}
                            onChange={(e) =>
                                updateNewHotelProperty("price", e.target.value)
                            }
                        />
                    </div>
                    <div className="input-group upload">
                        <textarea
                            name="information"
                            className="form-control edit"
                            placeholder="information"
                            value={newHotel.information}
                            onChange={(e) =>
                                updateNewHotelProperty(
                                    "information",
                                    e.target.value
                                )
                            }
                        />
                    </div>
                    <div className="form-check">
                        <input
                            name="featured"
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            checked={newHotel.featured}
                            onChange={(e) =>
                                updateNewHotelProperty(
                                    "featured",
                                    e.target.checked
                                )
                            }
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                        >
                            set as featured product
                        </label>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <Button
                            type="submit"
                            className="btn btn-primary"
                            onSubmit={onNewSubmit}
                            disabled={loading}
                        >
                            Upload
                            {loading && (
                                <Spinner
                                    as="span"
                                    role="status"
                                    aria-hidden="true"
                                    animation="border"
                                    size="sm"
                                    className="ms-2"
                                />
                            )}
                        </Button>
                    </div>
                </form>
            </section>
            <div className="titleSection">
                <h3>All hotels</h3>
                <hr />
                <div className="message-container" ref={messageRef}>
                    {editMessage && (
                        <DisplayMessage
                            message={editMessage}
                            messageType={"success"}
                        />
                    )}
                    {editErrorMessage && (
                        <DisplayMessage
                            message={editErrorMessage}
                            messageType={"error"}
                        />
                    )}
                </div>
            </div>
            <section className="editHotels">
                {hotels.map((hotel, index) => (
                    <div className="hotelContainerEdit" key={hotel.id}>
                        <Link to={"/hotel/" + hotel.id}>
                            <img
                                src={
                                    hotel.attributes.images.data[0].attributes
                                        .url
                                }
                                className="imgHotelEdit"
                                alt={
                                    hotel.attributes.images.data[0].attributes
                                        .alternativeText
                                        ? hotel.attributes.images.data[0]
                                              .attributes.alternativeText
                                        : "picture of " + hotel.title
                                }
                            />
                        </Link>
                        <form
                            className="form-margin"
                            onSubmit={(e) => onUpdateSubmit(e, index)}
                        >
                            <div className="message-container"></div>
                            <div className="input-group upload mb-3">
                                <input
                                    name="images"
                                    type="file"
                                    className="form-control edit"
                                    id="inputGroupFile02"
                                    multiple
                                />
                            </div>
                            <div className="input-group upload mb-3">
                                <input
                                    name="title"
                                    type="text"
                                    className="form-control edit"
                                    placeholder={hotel.attributes.title}
                                    value={hotel.attributes.title}
                                    onChange={(e) =>
                                        updateHotelProperty(
                                            index,
                                            "title",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <div className="input-group upload mb-3">
                                <input
                                    name="price"
                                    type="number"
                                    className="form-control edit"
                                    placeholder={hotel.attributes.price}
                                    value={hotel.attributes.price ?? 0}
                                    onChange={(e) =>
                                        updateHotelProperty(
                                            index,
                                            "price",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <div className="input-group upload">
                                <textarea
                                    name="information"
                                    className="form-control edit"
                                    placeholder={hotel.attributes.information}
                                    value={hotel.attributes.information}
                                    onChange={(e) =>
                                        updateHotelProperty(
                                            index,
                                            "information",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <div className="form-check">
                                <input
                                    name="featured"
                                    className="form-check-input"
                                    type="checkbox"
                                    id={"flexCheckDefault-" + hotel.id}
                                    checked={
                                        hotel.attributes.featured !== null
                                            ? hotel.attributes.featured
                                            : false
                                    }
                                    onChange={(e) =>
                                        updateHotelProperty(
                                            index,
                                            "featured",
                                            e.target.checked
                                        )
                                    }
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={"flexCheckDefault-" + hotel.id}
                                >
                                    set as featured product
                                </label>
                            </div>
                            <div className="d-flex justify-content-evenly mt-3 mb-2">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    save
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary deleteButton"
                                    onClick={() => onDeleteProduct(hotel.id)}
                                >
                                    delete
                                </button>
                            </div>
                        </form>
                    </div>
                ))}
            </section>
        </>
    );
};
