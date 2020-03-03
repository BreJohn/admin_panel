class User {
    constructor(
    name = '',
    email = '',
    phone = '',
    address = '',
    company = '') {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.company = company;
    }

}

export default User;