//////////////////////////////Типы данных и переменные
var name = "Юлия";
alert(name);
name = "Дмитрий";
alert(name);
//////////////////////////////Условный оператор if
var a = 1;
var b = 2;

if (a == b) {
  console.log("a равно b");
} else {
  console.log("a не равно b");
  alert("a не равно b");
}
//////////////////////////////Циклический оператор for:
for (i = 1; i <= 10; i++) {
  console.log(i);
}
//////////////////////////////Функции:
var result;
function sum(p1, p2, p3) {
  var res;
  res = p1 + p2 + p3;
  return res;
}
result = sum(10, 20, 30);
alert(result);
console.log(result);
result = sum(11, 21, 31);
console.log(result);
result = sum(30, 40, 30);
console.log(result);
//////////////////////////////Массивы и объекты -1

var array1 = ["привет", "loftschool"];
array1.push("я изучаю", "javascript");
console.log(array1);
console.log(array1.length);
for (i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}
//////////////////////////////Массивы и объекты -2
var array = [10, 101, 30, 120, 65, 402, 33, 154, 87, 290];
for (i = 0; i < array.length; i++) {
  if (array[i] > 100) {
    console.log(array[i]);
  }
}
//////////////////////////////Массивы и объекты -3
var obj1 = {
  name: "Julia",
  lastName: "Bubnova",
  age: 30
};
console.log(obj1.name);
console.log(obj1.lastName);
console.log(obj1.age);
obj1.position = "student";
alert(obj1.position);
//////////////////////////////Массивы и объекты -4

function hello(human) {
  var result =
    "Привет, меня зовут " +
    human.name +
    " " +
    human.lastName +
    " и мне " +
    human.age +
    " лет!";
  return result;
}
var result2 = hello(obj1);
alert(result2);

//////////////////////////////switch
var a = 5;
switch (a) {
  case 2:
    console.log("Мало ");
    break;
  case 6:
    console.log("Много");
    break;
  case 5:
    console.log("В точку");
    break;
  default:
    console.log("Мимо");
}

//////////////////////////////While
var count = 0;
while (count < 10) {
  console.log(count + " - Pаботаем!");
  count++;
}
//////////////////////////////Do While
var count = 10;
do {
  console.log(count);
  count++;
} while (count < 10);
//////////////////////////////For Break
var theValue = 4;
var a = [1, 6, 4, 8, 9];
for (i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    console.log("theValue " + theValue);
    break;
  }
  console.log(a[i]);
}
