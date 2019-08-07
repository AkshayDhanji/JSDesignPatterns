var SingletonPattern = (function () {
    var instance;

    createInstance = () => {
        var instance = new Object()

        return instance;
    }
    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

var InstancePattern1 = SingletonPattern.getInstance();
var InstancePattern2 = SingletonPattern.getInstance();
console.log("This is an example of Singleton Pattern");
console.log("Both the patterns are " + InstancePattern1 === InstancePattern2);