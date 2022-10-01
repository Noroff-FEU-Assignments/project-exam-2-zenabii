import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import {
    fetchHotels,
    createHotel,
    updateHotel,
    deleteHotel,
} from "../../settings/api";
import { DisplayMessage } from "../atoms/DisplayMessage";
import { Button } from "react-bootstrap";

export const AdministrateHotels = () => {
    const blankHotel = {
        title: "",
        information: "",
        price: "",
        featured: false,
    };

    const [hotels, setHotels] = useState([]);
    const [newHotel, setNewHotel] = useState(blankHotel);
    const [displayMessage, setDisplayMessage] = useState();

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
        setDisplayMessage(null);
    };

    const updateHotelProperty = (index, key, value) => {
        setHotels(
            hotels.map((hotel, i) =>
                i !== index
                    ? hotel
                    : {
                          ...hotel,
                          [key]: value,
                      }
            )
        );
    };

    const onNewSubmit = (e) => {
        e.preventDefault();
        if (!validateHotelForm(newHotel)) {
            return setDisplayMessage(
                <DisplayMessage
                    message={"Please supply proper values"}
                    messageType={"warning"}
                />
            );
        }

        // Create, then refresh products, clean up form and set success message.
        createHotel(e.target).then(() => {
            fetchHotels().then((res) => setHotels(res));
            setNewHotel(blankHotel);
            e.target.reset();
            setDisplayMessage(
                <DisplayMessage
                    message={"You have successfully added a new product!"}
                    messageType={"success"}
                />
            );
        });
    };

    const onUpdateSubmit = (e, index) => {
        e.preventDefault();

        const hotel = hotels[index];

        // Update, then refresh products.
        updateHotel(hotel.id, e.target).then(() => {
            fetchHotels().then((res) => setHotels(res));
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
        fetchHotels().then((res) => setHotels(res));
    }, []);

    return (
        <>
            <section className="addHotels">
                <h2 className="text-align-center">Add new establishments</h2>
                <form onSubmit={onNewSubmit}>
                    <div className="message-container">{displayMessage}</div>
                    <div className="input-group upload mb-3">
                        <input
                            name="image"
                            type="file"
                            className="form-control edit"
                            id="inputGroupFile02"
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
                        >
                            upload
                        </Button>
                    </div>
                </form>
            </section>
            <div className="titleSection">
                <h3>All hotels</h3>
                <hr />
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
                                        .url
                                        ? hotel.attributes.images.data[0]
                                              .attributes.url
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
                                    name="image"
                                    type="file"
                                    className="form-control edit"
                                    id="inputGroupFile02"
                                />
                            </div>
                            <div className="input-group upload mb-3">
                                <input
                                    name="title"
                                    type="text"
                                    className="form-control edit"
                                    placeholder="title"
                                    value={hotel.title}
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
                                    placeholder="price"
                                    value={hotel.price}
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
                                    placeholder="information"
                                    value={hotel.information}
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
                                        hotel.featured !== null
                                            ? hotel.featured
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
