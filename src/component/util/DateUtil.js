export const getLocaleDateFromString = (rawDate) => {
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return new Date(rawDate).toLocaleDateString([], options);
};

export const getLocaleTimeFromString = (rawDate) => {
    var options = {
        hour: 'numeric',
        minute: 'numeric'
    };

    return new Date(rawDate).toLocaleTimeString([], options);
};