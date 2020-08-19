const convertToEuro = (value, currency) => {
  let euro = null;

  switch (currency) {
    case "USD":
      euro = value * 1.3;
      break;
    case "GBP":
      euro = value * 2;
      break;
    default:
      euro = 0;
  }

  return euro;
};

module.exports = convertToEuro;
