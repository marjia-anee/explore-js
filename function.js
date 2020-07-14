function hello(){
    console.log('i am anee');
    console.log('i am aneeee');
}
hello();

function doubleIt(num){
    var result = num * 2;
    console.log(result);
}
doubleIt(5);
doubleIt(50);
doubleIt(500);

function doubleIt (num){
    var result = num * 2;
    return result;
}
var first = doubleIt(5);
var second = doubleIt(200)
var total = first + second;
//console.log(total);

function add (num1, num2){
    var result = num1+ num2;
    return result;
}

var sum = add(10, 10);
console.log(sum);