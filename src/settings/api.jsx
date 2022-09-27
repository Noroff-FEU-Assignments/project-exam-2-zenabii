import { setItem } from "./store";

export const baseUrl = "https://strapi-api-holidaze-maria.herokuapp.com/api/";

export const fetchHotels = async () => {
    const url = baseUrl + "hotels?populate=*";
    try {
        const response = await fetch(url);
        const hotel = await response.json();
        return hotel.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchHotel = async (hotelId) => {
    const url = baseUrl + "hotels/" + hotelId + "?populate=*";
    try {
        const response = await fetch(url);
        const hotel = await response.json();
        return hotel.data;
    } catch (error) {
        console.log(error);
    }
};

export const authenticate = async (username, password) => {
    const url = baseUrl + "auth/local/";
    const data = JSON.stringify({ identifier: username, password: password });
    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const response = await fetch(url, options);
        const auth = await response.json();
        if (auth.user) {
            setItem("token", auth.jwt);
            setItem("user", auth.user);
        }
        return auth;
    } catch (error) {
        console.log(error);
    }
};
