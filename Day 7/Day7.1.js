// Date Object😍😍
var date = new Date();
console.log(date);//output:-3 Mon Nov 02 2020 09:54:57 GMT+0530 (India Standard Time)

/*
ways to create date object
new Date()
new Date(string)
new Date(milliseconds)
new Date(year, month, day, hours, minutes, seconds, milliseconds)
*/

// Note:- JavaScript counts months from 0 to 11

var a = new Date(2015, 0, 25, 8, 10);
console.log(a);//output:-Sun Jan 25 2015 08:10:00 GMT+0530 (India Standard Time)



// new Date(string) 
// ex:-
var b = new Date("Jun 2, 2010 07:02:00");
console.log(b);//output:-Wed Jun 02 2010 07:02:00 GMT+0530 (India Standard Time)