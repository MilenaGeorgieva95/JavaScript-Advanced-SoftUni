function previousDay(year, month, day) {
    let myDate = new Date(year, month - 1, day);
    myDate.setDate(myDate.getDate() - 1);

    console.log(`${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`)
}

previousDay(2016, 9, 30)

//let myDate=new Date(2023, 0, 0, 0, 0);
//myDate.getMonth() 0-11, .getHours(), .getFullYear(), .getDay()=>0-6 Sun to Sat

//myDate.setHours(myDate.getUTCHours());
//myDate.setHours(26)=>>Feb 02:00 autoCorrection
//myDate.setMonth(myDate.getMonth()+15)=>>goes to next year autoCorrection
//myDate.getUTCHours()=>> universal time without the timezone correction
//console.log(myDate.toUTCString())=>>returns string

//last day of given month
//let myDate=new Date(2023,1,1); 01 Feb 2023
//myDate.setMonth(myDate.getMonth()+1);
//myDate.setDate(0);
//console.log(myDate)=>> 28 Feb 2023
