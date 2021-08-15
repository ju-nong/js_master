// Variable Type
const sex = "Male";     // 바뀌지 않는 값 상수
let age = 21;           // 바뀌는 값 변수(규칙 O)
var hobby = "Game";     // 요즘은 var 안 씀(규칙 X, 보호 X)



// Data Type
const textOrString = "ABC 가나다";
const int = 123;
const float = 123.456;
const booleanOn = true;
const booleanOff = false;
const wallet = null;    // 자연적 발생X, 비어있다라는 뜻
const brain;            // undefined  , 비어있음


// Array(배열)
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(week[0]);       // 출력
week[1] = "I hate Monday";  // 수정
week.push("birthday");      // 추가


// Object(객체)
const my = {        // object명, property(속성)들
    name: "junyong",
    age: 21,
    sex: "male",
    sayHello: function(otherName){      // 객체내 함수
        console.log("Hello " + otherName + " nice to meet you");
    }
};

console.log(my.name);       // 출력 방법(둘이 같음)
console.log(my["name"]);
my.sayHello("Babo");

my.age += 1;                // 수정
my.lastName = "Lee";        // 추가
//my = false;     const라서 수정불가(property들은 추가 수정 가능)



// Function     // 작성 function 함수명(parameter)
function mySelf(name, age){
    console.log("Hello my name is " + name + "and I'm " + age);
}

mySelf("Lee", 21);          // 실행 함수명(argument)
mySelf("Kim", 20, "Park");  // 여러 인자를 보내도 오류 안 남    



// Recap (윗 내용 요약)
const me = {
    firstName: "junyong",
    lastName: "Lee",
    age: 21,
    say: function(intro){
        console.log("이건 나와");
        return intro + ", " + me.firstName + " " + me.lastName;     // this.firstName
        //console.log("이건 안 나와");
    }
};

const ex = me.say("Hi");
console.log(ex);



const varName = "string";
console.log(typeof varName);        // 데이터 타입 확인(typeof(varName)도 가능)



console.log("커밋 테스트2");