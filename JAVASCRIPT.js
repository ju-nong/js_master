// document 메소드 위주로 정리 한 번 싹 해야 될 듯, 내일 알아서 하셈

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
console.log(week.length);   // 배열의 길이 출력

const newWeek1 = week.filter(day => day !== "Mon");      // filter, true인 값으로 새로운 array 구성

function arrayFilter(day){
    return day !== "Tue";
}
const newWeek2 = week.filter(arrayFilter);      // 함수명 적어서도 가능



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



// 데이터 타입 변경 관련
const varName = "100";
console.log(typeof varName);        // 타입 확인, typeof(varName)도 가능

console.log(parseInt(varName));     // 문자 -> 숫자
console.log(String(100));           // 숫자 -> 문자
console.log(isNaN(varName));        // NaN이면 true

const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayString = JSON.stringify(day);      // object를 문자열로 바꿔줌 중요!
console.log(dayString);
console.log(JSON.parse(dayString));         // 문자열을 object로



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

const second = "5";
console.log(second.padStart(2, "0"));       // 시계 만들때 유용, (원하는 글자 수, 여백 채울 글자)
console.log(second.padEnd(2, "0"));         // 위와 같음, 1 : 05, 2 : 50 형태로 출력




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

    console.log(event.target);      // 이벤트가 발생된 element를 가르킴
    console.log(event.target.parentElement);        // 부모 element
}

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", onLogin);



// API 관련
/*  localStorage!! 매우 많이 씀
    브라우저가 가지고 있는 DB같은 API!
    웹 사이트를 나가도 로그인이 유지되거나
    하루동안 팝업 안 보기 등 있잖슴
    위치 : 개발자모드 > Application > Storage
*/
localStorage.setItem("keyName", "valueName");       // 저장
localStorage.getItem("keyName");        // 불러오기, 해당 key가 없으면 null 반환
localStorage.removeItem("keyName");     // 삭제

/*  date!! 이것도 매우 많이 씀
    날짜 관련해서 유용하게 쓰임
*/
const date = new Date();
console.dir(date);              // 목록들 자세히 나오니까 찾아봐
console.log(date.getDate(), date.getHours());    // 등등
console.log(Date.now());        // 밀리초 단위로 숫자 반환 (key값으로 많이 사용)

// Math!! 안 쓰이는 곳이 없음
Math.random();      // 난수 발생
Math.random() * 10; // 0.0 ~ 9.9 대충 요정도 난수 발생
Math.round(1.5);    // 반올림, 2
Math.floor(1.9);    // 내림, 1
Math.ceil(1.1);    // 올림, 2
Math.floor(Math.random() * 10);     //0 ~ 9까지 나옴



// setInterval, setTimeout
function setTest(){
    console.log("하하");
}

setInterval(setTest, 5000);       // 일정한 시간마다 함수 반복 (함수명, ms단위)
setTimeout(setTest, 5000);        // 일정 시간 뒤 함수 호출 (함수명, ms단위)



// createElement!
const img = document.createElement("img");      // img 요소를 만든다
const span = document.createElement("span");
img.src = "/img/test.img";      // img 주소 설정



// append
document.body.append(img, span, "Text도 가능!");    // 여러 노드와 문자열도 가능
document.body.appendChild(img);     // body에 맨 마지막 자식으로 추가 (하나의 노드만 가능, 문자열 불가)
document.body.prependChild(img);     // body에 맨 첫 자식으로 추가



// forEach 형식이 매우 다양, 유용
function writeConsole(element, index, array){       // 순서 중요
    console.log(element, index, array);
}
const korean = ["가", "나", "다", "라", "마"];

korean.forEach(writeConsole);
korean.forEach(function(element, index, array){
    console.log(element, index, array);
});
korean.forEach((element, index, array) => console.log(element, index, array));



// geolocation 위치를 알 수 있음, 쩜
function successFunc(position){     // 객체를 반환해 줌
    console.log(position);
    console.log(position.coords.latitude, position.coords.longitude);
    // 위도와 경도, 구글 지도에서 찾을 수 있음
}

function errorFunc(){
    alert("위치를 찾을 수 없대");
}

navigator.geolocation.getCurrentPosition(successFunc, errorFunc);       // 성공했을 때 함수, 실패
/*
    openweathermap.org에서 api를 사용할 수 있음 for free!

    회원가입 하고 위에 API 메뉴로 간다음, Current Weather Data에
    API doc 클릭, By geographic coordinates API call 찾으셈 위쪽에 있어
    밑에 url에 {}를 successFunc함수로 받은 위도와 경도로 바꿔주고, api key는
    내 프로필에 가면 있음

    밑에 추가할 수 있는 매개변수들이 있는데
    &units=metric&lang=kr   를 추가하여 섭씨온도와 한국어로 보자

    fetch(url)를 작성 후, f12 -> network가서 잘 작동하는지 확인
    정확한 내용은 wetube 강의를 듣기 (유료임)
*/