var testObj =
    {
      "hat": "ballcap",
      "shirt": "jersey",
      "shoes": "cleats",
      "a drink": "gatorade"
    };

console.log(testObj.hat); //dot notation to access object members
console.log(testObj["a drink"]); // objects with spaces need to retrieved with brackets

testObj.sport = "baseball";

console.log(testObj);

delete testObj["a drink"];

console.log(testObj);

