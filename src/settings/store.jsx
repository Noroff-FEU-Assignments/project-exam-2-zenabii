export const setItem = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item));
};

export const getItem = (key, init = null) =>
    JSON.parse(localStorage.getItem(key) || JSON.stringify(init));

export const removeItem = (key) => localStorage.removeItem(key);
