//4.1
//4.1.4 检测类型
var colors = [1,2,3];
console.log(colors instanceof Object);
console.log(colors instanceof Array);

//5.1
var person = new Object();
person.name = "maokailu";
person.age = 21;

var person1 = {
    name:"maoning",
    age: 21
}

//5.2
var colors= new Array();
var colors = new Array(20);
var colors = new Array("red","blue","green");

var colors = Array();
var colors = Array(20);
var colors = Array("red","blue","green");

var colors = ["red","blue","green"];
colors.length = 2;
console.log(colors[2]);
colors[colors.length] = "black";
console.log(colors[2]);
console.log(Array.isArray(colors));

var count = colors.push("yellow");
var item = colors.pop();
var count = colors.unshift("orange");
var item = colors.shift();

//5.2.8
var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item,index,array){
    return (item>2);
})
console.log(everyResult);
var someResult = numbers.some(function(item,index,array){
    return (item>2)
})
console.log(someResult);
var filterResult = numbers.filter(function(item,index,array){
    return (item>2);
})
console.log(filterResult);

// 7.2.3 内存泄露
function assignhandler(){
    var element = document.getElmenentById("someElement");
    element.onclick = function(){
        console.log(element.id);
    }
}
function assignhandler1(){
    var element = document.getElementById("someElement");
    var id = element.id;
    element.onclick = function(){
        console.log(id);
    }
    element = null;
}
assignhandler1();
// 13.5.2移除事件处理程序
btn.onclick = function(){
    // 先执行某些操作
    btn.onclick = null;
    document.getElementById("myDiv").innerHTML = "Processing...";
}