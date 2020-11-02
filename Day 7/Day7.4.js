// Set Date Methods😍😍
/*
setDate()	        Set the day as a number
setFullYear()	    Set the year
setHours()	        Set the hour
setMilliseconds()	Set the milliseconds
setMinutes()	    Set the minutes 
setMonth()	        Set the month 
setSeconds()	    Set the seconds 
setTime()	        Set the time 
*/

var date = new Date();
date.setDate(15)
console.log(date);//output:- Sun Nov 15 2020 18:29:31 GMT+0530 (India Standard Time)

var d = new Date();
d.setFullYear(2020);
console.log(d);
//Output:-Mon Nov 02 2020 19:03:41 GMT+0530 (India Standard Time)

var d1 = new Date();
d1.setHours(15);
console.log(d1);
//output:- Mon Nov 02 2020 15:05:35 GMT+0530 (India Standard Time)


var d2 = new Date();
d2.setMilliseconds(192);
var n = d2.getMilliseconds();
console.log(n);
//output:- 192

var d3 = new Date();
d3.setMinutes(17);
console.log(d3);
//output:- Mon Nov 02 2020 19:17:07 GMT+0530 (India Standard Time)

var d4 = new Date();
d4.setMonth(4);
console.log(d4);
//output:-Sat May 02 2020 19:10:20 GMT+0530 (India Standard Time)

var d5 = new Date();
d5.setSeconds(35);
console.log(d5);
//output:Mon Nov 02 2020 19:11:35 GMT+0530 (India Standard Time)

var d6 = new Date();
d6.setTime(1332403882588);
console.log(d6);
//output:Thu Mar 22 2012 13:41:22 GMT+0530 (India Standard Time)
