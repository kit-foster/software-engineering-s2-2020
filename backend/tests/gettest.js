const assert = require('assert');
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../server");
chai.use(chaiHttp);

// this test is to check the HTTP get route created on the users route
describe('get users', function() {
    it ("Should Fecth all the user", (done)=>{
        chai.request('http://localhost:5000')
            .get("/user/")
            .end((err, result)=>{
                result.should.have.status(200);
                console.log ("Result:", result.body);                
                done()
        })
    })
})

//test could also ge generalised to other get tests