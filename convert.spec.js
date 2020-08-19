const { expect } = require("chai");

const convertToEuro = require("./convert");

describe("Convert", () => {
  it("1 USD === 1.30 EUR", () => {
    // Given
    const value = 1;
    const currency = "USD";
    // When
    const euro = convertToEuro(value, currency);
    // Then
    expect(euro).to.equal(1.3);
  });

  it("2 GBP === 4 EUR", () => {
    // Given
    const value = 2;
    const currency = "GBP";
    // When
    const euro = convertToEuro(value, currency);
    // Then
    expect(euro).to.equal(4);
  });

  it("return 0 if currency is unknown", () => {
    // Given
    const value = 42;
    const currency = "WESH";
    // When
    const euro = convertToEuro(value, currency);
    // Then
    expect(euro).to.equal(0);
  });
});
