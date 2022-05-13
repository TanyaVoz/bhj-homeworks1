var clicks = document.getElementById("clicker__counter");
var cookieID = document.getElementById("cookie");
var clickscounter = 0; // счетчик
cookieID.addEventListener("click", function() {
    clickscounter = clickscounter + 1;
    clicks.textContent =  clickscounter;  // изменение контента тега
});// обработка событий(событие и действие)


var bigsize = "300"; //Размер большой картинки
var smallsize = "200"; //Размер маленькой картинки
function changeSizeImage(im) {
if(im.width == bigsize) im.width = smallsize;
else im.width = bigsize;
}