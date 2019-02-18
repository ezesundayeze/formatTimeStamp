const expect = require("chai").expect;
const formatDateTime = require("../formatDateTime");

describe("formatDate", () => {
  it("should show the return value of formatDate", () => {
    expect(formatDateTime.formatDate()).to.be.a("string");
  });
});

describe("formatTime", () => {
  it("should show the return value of formatTime", () => {
    expect(formatDateTime.formatTime()).to.be.a("string");
  });
});
