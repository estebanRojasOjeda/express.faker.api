const express = require('express');
const { fake } = require('faker');
const faker = require('faker');
const app = express();
const port = 8000;


class User{
    constructor(){
        this.ci = faker.address.zipCode();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.pass = faker.internet.password();  
    }
}

class Company{
    constructor(){
        this.ci = faker.address.zipCode();
        this.name = faker.company.companyName();
        this.toTalk = {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            postalNumber: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) =>{
    res.json(new User);
});

app.get("/api/companies/new", (req, res) =>{
    res.json(new Company);
});

app.get("/api/user/company", (req, res) =>{
    res.json([{user: new User}, {company: new Company}]);
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );