import person from "../person"

class appCtrl {
    constructor(getItems) {
        this.person = getItems();
        this.maindata = ["id", "celphone", "email", "address"];
    }
}

export default {
    appCtrl
};

appCtrl.$inject = ['getItems'];