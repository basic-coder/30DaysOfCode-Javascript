// Get Date Methods😍😍

//😎 getFullYear():-return year as a four digit number
var date = new Date();
console.log(date);//output:- Mon Nov 02 2020 15:12:00 GMT+0530 (India Standard Time)
console.log(date.getFullYear());//output:-2020

//😎 getMonth():-return month as a number
console.log(date.getMonth());//output:- 10

// 😎Note:- JavaScript counts months from 0 to 11 therefore add 1 
console.log(date.getMonth() + 1);//output:- 11


//😎 getDate():- return the day as a number
console.log(date.getDate());//output:- 2


//😎 getHours():- return hour
console.log(date.getHours());//output:- 15


//😎 getMinutes():- return Minutes
console.log(date.getMinutes());//output:- 16


//😎 getSeconds():- return Seconds
console.log(date.getSeconds());//output:- 23


//😎 getMilliseconds():- return Milliseconds
console.log(date.getMilliseconds());//output:- 532


//😎 getTime():- return milliseconds since January 1, 1970
console.log(date.getTime());//output:- 1604321337324


//😎 getDay():- return weekday
console.log(date.getDay());//output:- 1


/*😎😎
getUTCFullYear()	    but returns the UTC year
getUTCDate()	        returns the UTC date
getUTCDay()	            returns the UTC day
getUTCHours()	        returns the UTC hour
getUTCMinutes()	        returns the UTC minutes
getUTCSeconds()	        returns the UTC seconds
getUTCMilliseconds()	returns the UTC milliseconds
getUTCMonth()	        returns the UTC month
getUTCDate()	        returns the UTC date
*/😎😎