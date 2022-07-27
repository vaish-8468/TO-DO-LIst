// jshint esversion:6

module.exports.getDate = function () {

let today= new Date();
    //makes a new variable storing current date



    // var currday= today.getDay();
    //fetches current day

    let options={
        weekDay: "Long",
        day: "numeric",
        month: "long"
    } // a JavaScript object

    let day=today.toLocaleDateString("en-US",options);
    //converts JavaScript format into a string






    // switch (currday){
    //     case 1:
    //         day="Monday";
    //         break;
    //     case 2:
   //         day="Tuesday";
    //         break;
    //     case 3:
    //         day="Wednesday";
    //         break;
    //     case 4:
    //         day="Thursday";
    //         break;
    //     case 5:
    //         day="Friday";
    //         break;
    //     case 6:
    //         day="Saturday";
    //         break;
    //     case 7:
    //         day="Sunday";
    //         break;
    //     default:
    //         console.log("Error!") ;

    // }


    return day;
}


module.exports.getDay = function (){
     let today= new Date();

     let options={
        weekday:"long",

     };

     let day= toLocaleDateString("en-US",options);

     return day;

}