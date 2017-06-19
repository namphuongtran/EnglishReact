export default class User {
    constructor(id, firstName, lastName, email, password, dateOfBirth, phone, address, /*avatar,*/ createdDate, updatedDate, isActive) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.phone = phone;
        this.address = address;
        // this.avatar = avatar;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.isActive = isActive;
    }
};