//Array
var photo = ["image/1.jpg", "image/2.jpg", "image/3.jpg"];
var find = document.querySelector("img");
//
var count = 0;
function func_pervious() {
  count--;
  if (count < 0) {
    //count=-1 then sesh index e jabe
    count = photo.length - 1;
    find.src = photo[count];
  } else {
    find.src = photo[count];
  }
}
function func_next() {
  count++;
  if (count >= photo.length) {
    count = 0;
    find.src = photo[count];
  } else {
    find.src = photo[count];
  }
}
