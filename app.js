// QUESTION 1

var student_name=[];
console.log(student_name)

// QUESTION 2

var student_name2={};
console.log(student_name2)

// QUESTION 3

var boys_name=["ali","ahmed","abdullah"]
console.log(boys_name)

// QUESTION 4

 var num=[1,2,3,4]
 console.log(num)

//  QUESTION 5

var boolean=[true]
console.log(boolean)

// QUESTION6

var mixed=[false,5,6,"sami","hamza"]
console.log(mixed)

// QUESATION 7

var education_qualifications=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"]
console.log(education_qualifications)

// QUESTION 8

var student_name3=["adeel","jibran","saad"]
var student_marks=[320,230,480]
var total_marks=500
var percentage_student1=  student_marks[0]/total_marks*100
console.log( "score of ", student_name3[0] , "is", student_marks[0] , "percentage", percentage_student1)
var percentage_student1=  student_marks[1]/total_marks*100
console.log( "score of ", student_name3[1] , "is", student_marks[1] , "percentage", percentage_student1)
var percentage_student1=  student_marks[2]/total_marks*100
console.log( "score of ", student_name3[2] , "is", student_marks[2] , "percentage", percentage_student1)
 
// QUESTION 9

var color_name=["blue","red","green"]

// A

var user_add_color1=prompt("add your color")
color_name.unshift(user_add_color1)
console.log(color_name)

// B

var user_add_color2=prompt("add your color")
color_name.push(user_add_color2)
console.log(color_name)

// C
color_name.unshift("gray","brown")
console.log(color_name)

// D

color_name.shift()
console.log(color_name)

// E

color_name.pop()
console.log(color_name)

// F


// QUESTION10

var number=[23,12,26,15,29,18]
var new_number=number.sort()
console.log(new_number)

//QUESTION 11

var city_names=["karachi" ,"lahore","peshawer","hydrabad","islamabad"]
Select_cities=city_names.slice(1,4)
console.log("select cities list",Select_cities)

// QUESTION 12

var arr = ["This ", "is  " ,  "my  ", "cat  "];
console.log("arrys:",arr)
var result=arr.join("")
console.log( "join method: ",result)

// QUESTION 13

var electronic_item=["keyboard","mouse","printer","moniter" ]
console.log(electronic_item)
electronic_item.shift()
console.log(electronic_item)
// keyboard out
electronic_item.shift()
console.log(electronic_item)
// mouse out
electronic_item.shift()
console.log(electronic_item)
// printer out
electronic_item.shift()
console.log(electronic_item)
// moniter out

// QUESTION 14

var electronic_item2=["phone","calculator","computer","laptop"]
console.log(electronic_item2)
electronic_item2.pop()
console.log(electronic_item2)
// laptop out
electronic_item2.pop()
console.log(electronic_item2)
// computer out
electronic_item2.pop()
console.log(electronic_item2)
// calculator out
electronic_item2.pop()
console.log(electronic_item2)
// phone out





