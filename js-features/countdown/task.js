///таймер на 60 сек 60-0
let seconds = document.getElementById("timer");

let interval = setInterval(function () { 

	seconds.textContent -- ;

if(seconds.textContent == 0) {
 	alert('Вы победили в конкурсе!');
	clearInterval(interval);
	}
 
},1000)

///попробовала реализовать доп задание получился только таймер обратного отсчета с конкретной установленной датой 
document.addEventListener('DOMContentLoaded', () => {
	const newprizedraw = new Date('may 29 2022 1:24:00');
	
	const daysVal = document.querySelector('.time-count__days .time-count__val');
	const hoursVal = document.querySelector('.time-count__hours .time-count__val');
	const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
	const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

    const daysText = document.querySelector('.time-count__days .time-count__text');
	const hoursText = document.querySelector('.time-count__hours .time-count__text');
	const minutesText = document.querySelector('.time-count__minutes .time-count__text');
	const secondsText = document.querySelector('.time-count__seconds .time-count__text');

    function declOfNum(number, titles) {  
		let cases = [2, 0, 1, 1, 1, 2];  
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
         } // cклонение числительных
    
	 const timeCount = () => {
		let now = new Date();
		let leftUntil = newprizedraw - now;
		
		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		let seconds = Math.floor(leftUntil / 1000) % 60;

        if (leftUntil < 0) {
            alert("Вы победили в конкурсе!") // сообщение
            
          }
    

        seconds = seconds < 10 ? "0" + seconds : seconds; // Добавляем 0 при однозначном значении 
        minutes = minutes < 10 ? "0" + minutes : minutes; // Добавляем 0 при однозначном значении 
        hours = hours < 10 ? "0" + hours : hours; // Добавляем 0 при однозначном значении 
        days = days < 10 ? "0" + days : days; // Добавляем 0 при однозначном значении 

		daysVal.textContent = days;
		hoursVal.textContent =	hours;
		minutesVal.textContent = minutes;
		secondsVal.textContent = seconds;

		daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
		hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
		minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
		secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
	};

	timeCount();
    
    setInterval(timeCount, 1000);
    
});