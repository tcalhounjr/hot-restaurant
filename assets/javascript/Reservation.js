"use strict"

class Reservation {
    constructor(name, phone, email) {
        this.customerName = name;
        this.phoneNumber = phone;
        this.customerEmail = email;
    }
};


module.exports = Reservation;