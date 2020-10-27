
// 1. 변수 및 상수
// - 변수
var a = 1;
var b = 2
let c = 3;

// * 지역 변수 - 전역 변수
let d = 1;
{
    let dd = 2;
    console.log(d);
}
// console.log(dd); // Error

// - 상수
const dd = 4;

// 2. 함수
function myFunc(){
    console.log('MyFunc');
    return;
}

myFunc();

(function myFunc2(){
    console.log('myFunc2')
})();

var myFunc3 = function(){
    console.log('myFunc3');
}
myFunc3();

var myFunc4 = () => console.log('myFunc4');
myFunc4();

// 배열
var arr = [];

// * 상수라고 해서 배열에 값을 넣지 못하는 게 아님
// 대입한 배열 자체를 변경할 수 는 없을 뿐
const arr2 = [];
arr2.push(1,2,3);
console.log(arr2);
// arr2 = {}; // Error

const arr3 = new Array(1,2,3,4,5);

// * 중복을 허용하지 않는 배열 SET 
const arrSets = new Set([1,2,3,3,33]);
console.log(arrSets);

arr.push(12345); // 뒤부터 추가
arr.pop(); // 뒤부터 제거
arr.shift(); // 앞부터 제거
arr.unshift('123','321'); // 앞부터 추가
// 반복하여 내용 수행 후 새로운 배열을 생성
const arrMap = arr.map((e) => e+1); 
console.log(arrMap); 
// 반복하여 내용만 수행
arr.forEach((e) => console.log(e+2));

// 4. 객체 Obj
const objVar = {'key': 'value', 'key2':'value2'};
const objVar2 = {'key': 'value2'};
console.log(objVar.key);
console.log(Object.keys(objVar));
console.log(Object.values(objVar));
console.log(Object.is(objVar, objVar2));
console.log(Object.freeze(objVar2));

// 5. 클래스 Class

class MyJsClass{
    constructor(a,b){
        // this.a = a;
        // this.b = b;
        // this.a = a, this.b = b;
        [ this.a, this.b] = [a, b];
    }
    myMethod(){
        console.log(this);
        console.log(`a : ${this.a}`);
    }
}
const myJsClass = new MyJsClass(1,2);
console.log(myJsClass.a);
console.log(myJsClass.b);
console.log(myJsClass.myMethod());

class MyJsClass2{
    constructor( { a, b } ){
        // this.a = a;
        // this.b = b;
        // this.a = a, this.b = b;
        this.a = a, this.b = b;
    }
    myMethod2 = () => {
        console.log(this);
        console.log(`b : ${this.b}`);
    }
    fromMap(){
        return { 'a' : this.a, b : this.b};
    }
}
const myJsClass2 = new MyJsClass2( { a:11, b:22 } );
console.log(myJsClass2.a);
console.log(myJsClass2.b);
console.log(myJsClass2.myMethod2());
console.log(myJsClass2.fromMap());

// 6 조건문 if - else if - else
const aIf = 1;
const bIf = 2;
if( aIf === bIf ){
    console.log(`${aIf} === ${bIf}`);
}
else if( aIf > bIf ){
    console.log(`${aIf} > ${bIf}`);
}
else{
    console.log(`${aIf} < ${bIf}`);
}

// 6 반복문 for
// * 주로 배열(순서가 있고, 순서를 보장하며, 반복 가능)을 활용함
const arrFor = [1,2,3,4];
for(let i = 0; i < 10; i++){
    console.log(arrFor[i]);
}
// .map( e => ) / .forEach((e) => )

// for - in
for (const key in arrFor) {
    console.log('-------');
    console.log(`KEY : ${key}`)
    console.log(`ARRFRO : ${arrFor[key]}`);
}
// * Object 객체(순서가 있고, 순서를 보장하며, 반복 가능)도 반복 가능
const objFor = {a:1, b:2, c:33};
for (const key in objFor) {
    console.log('-------');
    console.log(`KEY : ${key}`)
    console.log(`OBJECT : ${objFor[key]}`);
}

// for - of
// * of 는 컬렉션 전용 : String, Array, Set
for (const value of arrFor) {
    console.log(`arrFor : ${value}`);
}
