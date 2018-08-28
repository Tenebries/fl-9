const findType = (type) => typeof type;

const forEach = function (array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
};

const map = function (array, callback) {
    let newArray = [];

    forEach(array, el => newArray.push(callback(el)));

    return newArray;
};

const filter = function (array, callback) {
    let newArray = [];

    forEach(array, el => {
        if (callback(el)) {
            newArray.push(el);
        }
    });

    return newArray;
};

const getAdultAppleLovers = (data) =>
    map(filter(data, el => el.age > 18 && el.favoriteFruit === 'apple'),
        el => el.name);

const keys = function (obj) {
    let newArray = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newArray.push(key);
        }
    }

    return newArray;
};

const values = function (obj) {
    let newArray = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newArray.push(obj[key]);
        }
    }

    return newArray;
};

const showFormattedDate = function (date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return `It is ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`;
};
