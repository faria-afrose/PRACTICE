//---------------local storage-------------
localStorage.setItem("userName", "Faria Afrose");
localStorage.setItem("password", "019756325");
//get item(key)
const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("password");
console.log(userName, userPassword);
//update
localStorage.setItem("userName", "AKi");

//remove
localStorage.removeItem("userName");
localStorage.removeItem("password");
//set country's
const country = ["India", "Rasia", "Pakistan"];
localStorage.setItem("country", JSON.stringify(country));
//get country's
//?string get korar jonno parse korte hbe
const countryList = JSON.parse(localStorage.getItem("country"));
console.log(countryList);
