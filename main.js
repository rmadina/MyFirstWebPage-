var name = prompt("Enter your name")//takes input as string

alert("Hello " + name + "!")
var grade = parseInt(prompt("Enter your grade"))//change string into integer

if(grade<60){
    alert("Xeyirli olsun, kesildin!")
}
else if(grade>=60 && grade <70){
    alert("Your grade is D")
}
else if(grade>=70 && grade<80){
    alert("Your grade is C")
}
else if(grade >=80 && grade<90){
    alert("Your grade is B")
}
else if(grade>=90 && grade <100){
    alert("Your grade is A")
}
else{
    alert("No such case!")
}


