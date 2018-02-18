import person from "../person"

class appCtrl {
    constructor(getItems) {
        console.log('getItems', getItems);
        this.person = getItems();
        this.maindata = ["id", "celphone", "email", "address"];
    }
}

export default {
    appCtrl
};

appCtrl.$inject = ['getItems'];