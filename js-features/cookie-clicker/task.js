var clicks = document.getElementById("clicker__counter");
var cookieID = document.getElementById("cookie");
var clickscounter = 0; // счетчик
var Clicked = 0;/// переменная времени щелчка
var clicksTime = document.getElementById("clicker__counter1");

 
cookieID.addEventListener("click", function() {
    clickscounter = clickscounter + 1;
    clicks.textContent =  clickscounter;  // изменение контента тега

   
   // var t = (new Date()).getSeconds();
    //Clicked =  clickscounter / t  ;
    //clicksTime.textContent = Clicked;
   
   
});

var bigsize = "300"; //Размер большой картинки
var smallsize = "200"; //Размер маленькой картинки
function changeSizeImage(im) {
if(im.width == bigsize) im.width = smallsize;
else im.width = bigsize;
}
