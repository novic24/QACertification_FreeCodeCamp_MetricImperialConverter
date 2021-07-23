function ConvertHandler() {
  this.getNum = function (input) {
    let result;

    return result;
  };

  this.getUnit = function (input) {
    let result;

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    if (initUnit === "gal" || initUnit === "GAL") {
      //we convert to L
      result = "l";
    } else if (initUnit === "L" || initUnit === "l") {
      result = "gal";
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    if (initUnit === "gal" || initUnit === "GAL" || initUnit === "Gal") {
      result = (initNum * galToL).toFixed(5);
    } else if (initUnit === "L" || initUnit === "l") {
      result = (initNum / galToL).toFixed(5);
    }

    if (initUnit === "lbs" || initUnit === "LBS" || initUnit === "Lbs") {
      result = (initNum * lbsToKg).toFixed(5);
    } else if (initUnit === "Kg" || initUnit === "kg" || initUnit === "KG") {
      result = (initNum / lbsToKg).toFixed(5);
    }

    if (initUnit === "mi" || initUnit === "MI" || initUnit === "Mi") {
      result = (initNum * miToKm).toFixed(5);
    } else if (initUnit === "KM" || initUnit === "km" || initUnit === "Km") {
      result = (initNum / miToKm).toFixed(5);
    }

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
