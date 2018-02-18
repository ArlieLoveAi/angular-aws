function getItems() {
    return () => require('../person.json');
};

export default {
    getItems,
};