try {
  alert("Hi!This is first message");
  alert(x);
  alert("Hlw!This is second message");
} catch (error) {
  console.log("Inside catch block");
  console.log(error);
  console.log(error.name);
  console.log(error.message);
} finally {
  alert("Hlw!This is Third message");
}
