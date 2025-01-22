let server = require("../index");

let chai = require("chai");
let chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

describe("/GET /", () => {
  it("it should return 200", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe("/GET /:name", () => {
  it("it should return 200 and test text in body", (done) => {
    chai
      .request(server)
      .get("/test")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.eql("Hello test");
        done();
      });
  });
});

describe("/GET /dev", () => {
  it("it should return dev name", (done) => {
    chai
      .request(server)
      .get("/dev")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.eql("Hello not_push to main");
        done();
      });
  });
});
