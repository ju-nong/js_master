// Variable Type
const sex = "Male";     // 바뀌지 않는 값 상수
let age = 21;           // 바뀌는 값 변수(규칙 O)
var hobby = "Game";     // 요즘은 var 안 씀(규칙 X, 보호 X)
const HIDDEN_CLASSNAME = "hidden";      // string만 포함된 변수는 대문자로 표기하는 관습



// Data Type
const textOrString = "ABC 가나다";
const int = 123;
const float = 123.456;
const booleanOn = true;
const booleanOff = false;
const wallet = null;    // 자연적 발생X, 비어있다라는 뜻
const brain;            // undefined  , 비어있음
// 또 다른 예로 NaN(Not a Number)이 있는데 이것은 숫자가 아님


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



// Data Type 관련
const varName = "100";
console.log(typeof varName);        // 타입 확인, typeof(varName)도 가능

console.log(parseInt(varName));     // 문자열을 정수형으로 변환해줌
console.log(isNaN(varName));        // NaN이면 true



/*
    연산자, 조건문은 다 알잖아
    특이점이라면 ==은 값이 같으면 true (0 == "0", 0 == false, 0 == [])
    ===은 타입까지 같아야 true
    0 != "0"은 false, 0 !== "0" true
*/



console.dir(document);      // json 형태로 보여줌
document.title = "Title change!";


/*
    document.getElementById("Id");
    XXX.id
    XXX.className
    XXX.innerText

    jquery 선택자처럼 사용 가능
    document.querySelector(".className h1");
    근데 첫 번째 element만 가져옴

    그럴 땐
    document.querySelectorAll(".className h1");
    위 메소드를 사용하여 array 형식으로 가져 옴

    console.dir(xxx);
    dir 메소드를 사용하고 style을 찾아서 자바스크립트에서 사용하는
    style명이 무엇인지 확인
    xxx.style.color = "blue"
    

    xxx.addEventListener("click", funName);
    xxx를 click하면 funName 함수를 실행한다.

    또 다른 방법
    xxx.onclick = funName; 위와 같음
    하지만 addEventListener를 사용하면 removeEventListener를 사용하여
    이벤트 삭제 가능해서 addEventListener를 선호한다.

    body는 특별해서 document.body 형태로 가져올 수 있다
    나머지 element는 querySelector 같은 메소드로 가져 와야 됨
    window 객체 : 브라우저의 요소, 모든 변수를 담고 있는 객체, 한마디로 대빵
    저건 그냥 window 써서 가져옴
    

    꿀팁
    element에 event를 찾는 방법
    https://developer.mozilla.org/ko/docs/Web/API/HTMLElement
    console.dir(XXX)해서 나오는 것 중에
    on뭐시기가 붙은 것들은 eventListener

    자바스크립트에서 되도록이면 .style을 사용하여
    스타일을 바꾸지마라
    자바스크립트는 이벤트나 애니메이션 담당이다
    className을 변경하여 바꿔주던지 하셈

    className을 이용하면 전에 있던 class를 무시하고 바꿈
    그것을 방지하기 위해 classList가 있음

    ex)
    const clickClass = "clicked";       //찾는 class명
    if(XXX.classList.contains(clickClass)){
        XXX.classList.remove(clickClass);
    }else{
        XXX.classList.add(clickClass);
    }
    
    위에 코드를 대체하는 함수도 있음
    XXX.classList.toggle("clicked");
*/



// string 관련
const userName = "이준용";
console.log(userName.length);       // 문자의 길이가 정수형으로 나옴

const lorem = "Hello";                      // 문자열 합치기
const inputName = "World!";
const intro = lorem + " " + inputName;      // 구식 방법
const format = `${lorem} ${inputName}`;     // 보기 좋음, 규칙 ``(백틱)쓰고 변수를 ${}로 감쌈



/* form 관련
    input 태그에는 required나 maxlength처럼
    유효성 검사를 해주는 속성이 존재함ㅇㅇ
    근데 이것을 작동시키기 위해선 form태그 안에
    존재해야됨
*/



/* event 관련
    element에 event가 발생했을때
    함수에 첫번째 인자를 통해서 event object를 받을 수 있다
    인자명은 event나 e로 적어주는 것이 관습이다
*/
function onLogin(event){
    event.preventDefault();     // form에 submit을 막아줌
}

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", onLogin);



/* localStorage!! 매우 많이 씀
    브라우저가 가지고 있는 DB같은 API!
    웹 사이트를 나가도 로그인이 유지되거나
    하루동안 팝업 안 보기 등 있잖슴
    위치 : 개발자모드 > Application > Storage
*/
localStorage.setItem("keyName", "valueName");       // 저장
localStorage.getItem("keyName");        // 불러오기, 해당 key가 없으면 null 반환
localStorage.removeItem("keyName");     // 삭제