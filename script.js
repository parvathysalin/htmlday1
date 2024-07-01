console.log("welcome");
var a=6;let g=true;
{var a=76;let g=90;console.log(g);}
console.log(a)
console.log(g);
console.log(typeof(g));
let person={
    name:"parvathy",
    age:20,
    location:"tvm"
}
console.log(person.name);
let arr=['hello','hi',40]
console.log(arr.indexOf(40));

let arr_obj=[{age:80,name:'ehj'},{age:98,name:"yhg"}]
console.log(arr_obj[1].name);
function add(a,b){
    var sum=a+b;
    return sum;
}let result=add(20,30);
console.log(result)
var c=1;
var b=++c;
console.log(b);
console.log(c);
var a1=99;
var a2='99';
if(a1>a2){
    console.log("a1 greater");}
    else if(a1==a2){ 
        console.log("both are equal and the value is "+a1);
    }
    else {
        console.log("a2 is greater");
    }
    let arr2=[1,2,3,4,5]
for(let i=0;i<arr2.length;i++)
    {console.log(arr2[i]);}
for(const i in arr2){console.log(i);}