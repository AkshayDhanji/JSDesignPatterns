class ConstructorPattern {
    constructor(name, designation, company) {
        this._name = name;
        this._designation = designation;
        this._company = company;

        this.getDetails = () => {
            return `${this._name}` + ' is the ' + `${this._designation}` + ' of ' + `${this._company}`;
        }
    }
}

const AmazonDetails = new ConstructorPattern('Jeff Bezos', 'Chief Executive Officer', 'Amazon.com, Inc');
console.log('This is an example of Constructor Pattern');
console.log(AmazonDetails.getDetails());