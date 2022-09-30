import { setItem, getItem } from "./store";

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

export const fetchContacts = async () => {
    const url = baseUrl + "contacts";
    try {
        const response = await fetch(url);
        const contact = await response.json();
        return contact.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchEnequiries = async () => {
    const url = baseUrl + "enquiries";
    try {
        const response = await fetch(url);
        const contact = await response.json();
        return contact.data;
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

const getFormData = (form) => {
    const formData = new FormData();
    const formElements = form.elements;
    let data = {};
    for (let i = 0; i < formElements.length; i++) {
        const currentElement = formElements[i];
        if (!["submit", "file"].includes(currentElement.type)) {
            if (currentElement.type === "checkbox") {
                data[currentElement.name] = currentElement.checked;
            } else {
                data[currentElement.name] = currentElement.value;
            }
        } else if (currentElement.type === "file") {
            for (let i = 0; i < currentElement.files.length; i++) {
                const file = currentElement.files[i];
                formData.append(
                    `files.${currentElement.name}`,
                    file,
                    file.name
                );
            }
        }
    }
    formData.append("data", JSON.stringify(data));
    return formData;
};

export const createHotel = async (form) => {
    const url = baseUrl + "hotels/";

    const token = getItem("token");
    const options = {
        method: "POST",
        body: getFormData(form),
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    console.log({ token });
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const updateHotel = async (id, form) => {
    const url = baseUrl + "hotels/" + id;
    const token = getItem("token");
    const options = {
        method: "PUT",
        body: getFormData(form),
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const deleteHotel = async (hotelId) => {
    const url = baseUrl + "hotels/" + hotelId;
    const token = getItem("token");
    const options = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};
