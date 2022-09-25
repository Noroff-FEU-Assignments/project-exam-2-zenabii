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
