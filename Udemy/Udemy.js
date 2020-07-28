//Operator Coding Challenge

// var heightJohn = 6.5;
// var heightMark = 5.8;
// var massJohn = 60;
// var massMark = 70;

// var BMIJohn = massJohn / (heightJohn * heightJohn);
// var BMIMark = massMark / (heightMark * heightMark);

// console.log(BMIJohn,BMIMark);

//var markHigherBMI = BMIMark > BMIJohn;
//console.log('is Mark\'s BMI higher than John\'s?' + markHigherBMI);

//================================================================================================//

/* //Ternary Operator//
 var BMI = BMIJohn > BMIMark ? 'John' : 'Mark';
 console.log('Higher BMI? ' + BMI);
*/

//================================================================================================//

//Coding Challenge 2 

//  var JAvgScore = (178 + 122 + 98)/3;
//  var MAvgScore = (170 + 123 + 87)/3;
//  var MarryAvgScore = (114 + 95 + 111)/3;

//  if(JAvgScore > MAvgScore){
//      console.log('John\'s team is the Winner' + JAvgScore);
//  }
//  else{
//     console.log('Mark\'s team is the Winner : ' + MAvgScore);
//  }

//switch implementation

// switch(true){
//     case JAvgScore>MAvgScore && JAvgScore>MarryAvgScore :
//         console.log('John\'s team is the Winner : ' + JAvgScore + ' points');
//         break;
//     case JAvgScore < MAvgScore && MAvgScore > MarryAvgScore :
//         console.log('Mike\'s team is the Winner : ' + MAvgScore + ' points')
//         break;
//     case MarryAvgScore > JAvgScore && MarryAvgScore > MAvgScore :
//         console.log('Marry\'s team is the winner : ' + MarryAvgScore + ' points' )
//         break;
//     case JAvgScore === MAvgScore === MarryAvgScore :
//         console.log('Match is draw : ' + JAvgScore);
//         break;
// }

//================================================================================================//

//coding Challenge 3

// function tipCalculator(bill){
//     var tip;
//     if(bill < 50){
//         tip = bill * (0.2);
//     }
//     else if(bill >50 && bill <200){
//         tip = bill * (0.15);
//     }
//     else{
//         tip = bill * (0.1);
//     }
//     return tip;
// }
// var bill = [124,48,268];

// var tips = [tipCalculator(bill[0]),tipCalculator(bill[1]),tipCalculator(bill[2])];
// console.log(tips);

// var TotalBill = [tips[0] + bill[0], tips[1] + bill[1], tips[2] + bill[2]];
// console.log(TotalBill);

//================================================================================================//

//Coding Challenge 4

// var john = {
//     fullName : 'John Smith',
//     height : 6.2,
//     mass : 80,
//     calcBMI : function(){
//      this.BMI = this.mass/(this.height * this.height);
//      return this.BMI;
//     },
// };
// john.calcBMI();
// var mark = {
//     fullName : 'Mark Doe',
//     height : 5.4,
//     mass : 90,
//     calcBMI : function(){
//      this.BMI = this.mass/(this.height * this.height);
//      return this.BMI;
//     },
// };
// mark.calcBMI();

//john.BMI > mark.BMI ? console.log(john.fullName + ' has higher BMI ' + john.BMI) : console.log(mark.fullName + ' has higher BMI ' + mark.BMI);

//================================================================================================//

console.log("Help");

