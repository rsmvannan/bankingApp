const chai = require("chai");
const chaiHttp = require("chai-http");

const server = require("../expressServer");

chai.should();

chai.use(chaiHttp);

describe("test for GET methods", () => {
  it("should get all the users", (done) => {
    chai
      .request(server)
      .get("http://localhost:8001/user")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });

  it("should not GET all the users ", (done) => {
    chai
      .request(server)
      .get("http://localhost:8001/usr")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
