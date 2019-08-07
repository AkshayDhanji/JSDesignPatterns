class UnimartOld {
    constructor() {
        this.showUnimart = () => {
            console.log("This is developed using ASP NET MVC and SQL");
        }
    }
}

class UnimartNew {
    constructor() {
        this.showUnimart = () => {
            console.log("This is developed using ASP NET MVC, ReactJS, NodeJS, Elastic Search and SQL");
        }
    }
}


class Unimart {//acts as an adapter class (interface or wrapper)
    constructor() {
        var pre_unimart = new UnimartOld();
        var post_unimart = new UnimartNew();
        this.showUnimart = () => {
            post_unimart.showUnimart();
        }
    }
}

var result = new Unimart();
console.log("This is an example of Adapter Pattern");
result.showUnimart();