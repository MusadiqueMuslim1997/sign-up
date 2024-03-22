










var signUp = document.getElementById("signup");
var signIn = document.getElementById("signin");

function sign() {
    var em = document.getElementById("em").value;
    var password = document.getElementById("password").value;
    var repeat = document.getElementById("repeat").value;
    var fn = document.getElementById("fn").value;

    if (password === repeat && password !== "" && repeat !== "" && fn !== "" && em !== "") {
       
        localStorage.setItem("user", JSON.stringify({ email: em, password: password }));
        window.location.assign("login.html");
    } else if(password != repeat){
        swal("Password not match");
    } 
    else{
        swal("Please Fill Input");
    }
}

function login() {
    var loginEmail = document.getElementById("login-mail").value;
    var loginPassword = document.getElementById("login-password").value;

   
    var userData = JSON.parse(localStorage.getItem("user"));
    if (userData && userData.email === loginEmail && userData.password === loginPassword) {
       
        window.location.assign("cards.html");
        
    } else {
        swal("Invalid Candidate");
    }
}


var quetionList = [

    {

        que: "1. The external JavaScript file must contain the <script> tag.",
        a: "True",
        b: "False",
        c: "Both of the above",
        d: "None of the above",
        ans: "false"
    }
    ,
    {

        que: "2. Inside which HTML element do we put the JavaScript?",
        a: "scripting",
        b: "javascript",
        c: "script",
        d: "js",
        ans: "script"
    },

    {

        que: "3. JavaScript File Has An Extension of:",
        a: ".js",
        b: ".java",
        c: ".javascript",
        d: "None of the above",
        ans: ".js"

    },
    {

        que: "4. Which built-in method returns the characters in a string beginning at the specified location?",
        a: "substr()",
        b: "getSubstring()",
        c: "slice()",
        d: "None of the above",
        ans: "slice()"

    },

    {

        que: "5. Which of the following function of Number object returns a string value version of the current number?",
        a: "toString()",
        b: "toFixed()",
        c: "toLocaleString()",
        d: "toPrecision()",
        ans: "toFixed()"

    },
    {

        que: "6. Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
        a: "slice()",
        b: "split()",
        c: "replace()",
        d: "search()",
        ans: "split()"

    },
    {

        que: "7.Which of the following function of String object creates an HTML anchor that is used as a hypertext target?",
        a: "anchor()",
        b: "link()",
        c: "blink()",
        d: "big()",
        ans: "blink()"

    },
    {

        que: "8.  Which of the following function of String object causes a string to be displayed as a superscript, as if it were in a <sup> tag?",
        a: "sup()",
        b: "small()",
        c: "strike()",
        d: "sub()",
        ans: "sup()"

    },
    {

        que: "9. Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?",
        a: "indexOf()",
        b: "join()",
        c: "lastIndexOf()",
        d: "map()",
        ans: "indexOf()"

    },
    {

        que: "10. Which of the following function of Array object sorts the elements of an array?",
        a: "toSource()",
        b: "sort()",
        c: "toString()",
        d: "unshift()",
        ans: "sort()"

    },



]


var questionGenerate = document.getElementById("questiongenerate");

var a = document.getElementById("a_text");
var b = document.getElementById("b_text");
var c = document.getElementById("c_text");
var d = document.getElementById("d_text");
var index = 0;
var score = 0;


function load() {
    var data = quetionList[index]
    questionGenerate.innerText = `${data.que}`;
    a_text.innerText = `${data.a}`;
    b_text.innerText = `${data.b}`;
    c_text.innerText = `${data.c}`;
    d_text.innerText = `${data.d}`;


}

var optName = document.getElementsByName("option");


load()
function submit() {
    index++;
    load()

    for (var i = 0; i < optName.length; i++) {

        optName[i].checked = false;

    }




}
var hero = document.getElementById("hero")
var courselist1 = document.getElementById("courselist1")
function join1() {
    courselist1.style.display = "block";
    hero.style.display = 'none';
    courselist2.style.display = "none";
    courselist3.style.display = "none";
    courselist4.style.display = "none";
    courselist5.style.display = "none";
    courselist6.style.display = "none";
    courselist7.style.display = "none";
    courselist8.style.display = "none";
    courselist9.style.display = "none";


}

var courselist2 = document.getElementById("courselist2")
function join2() {
    courselist1.style.display = "none";
    hero.style.display = 'none';
    courselist2.style.display = "block";
    courselist3.style.display = "none";
    courselist4.style.display = "none";
    courselist5.style.display = "none";
    courselist6.style.display = "none";
    courselist7.style.display = "none";
    courselist8.style.display = "none";
    courselist9.style.display = "none";
}

var courselist3 = document.getElementById("courselist3")
function join3() {
    courselist1.style.display = "none";
    hero.style.display = 'none';
    courselist2.style.display = "none";
    courselist3.style.display = "block";
    courselist4.style.display = "none";
    courselist5.style.display = "none";
    courselist6.style.display = "none";
    courselist7.style.display = "none";
    courselist8.style.display = "none";
    courselist9.style.display = "none";
}
var courselist4 = document.getElementById("courselist4")
function join4() {
    courselist1.style.display = "none";
    hero.style.display = 'none';
    courselist2.style.display = "none";
    courselist3.style.display = "none";
    courselist4.style.display = "block";
    courselist5.style.display = "none";
    courselist6.style.display = "none";
    courselist7.style.display = "none";
    courselist8.style.display = "none";
    courselist9.style.display = "none";
}

var courselist5 = document.getElementById("courselist5")
function join5() {
    courselist1.style.display = "none";
    hero.style.display = 'none';
    courselist2.style.display = "none";
    courselist3.style.display = "none";
    courselist4.style.display = "none";
    courselist5.style.display = "block";
    courselist6.style.display = "none";
    courselist7.style.display = "none";
    courselist8.style.display = "none";
    courselist9.style.display = "none";
}

var courselist6 = document.getElementById("courselist6")
function join6() {
    courselist1.style.display = "none";
    hero.style.display = 'none';
    courselist2.style.display = "none";
    courselist3.style.display = "none";
    courselist4.style.display = "none";
    courselist5.style.display = "none";
    courselist6.style.display = "block";
    courselist7.style.display = "none";
    courselist8.style.display = "none";
    courselist9.style.display = "none";
}

var courselist7 = document.getElementById("courselist7")
function join7() {
    courselist1.style.display = "none";
    hero.style.display = 'none';
    courselist2.style.display = "none";
    courselist3.style.display = "none";
    courselist4.style.display = "none";
    courselist5.style.display = "none";
    courselist6.style.display = "none";
    courselist7.style.display = "block";
    courselist8.style.display = "none";
    courselist9.style.display = "none";
}

var courselist8 = document.getElementById("courselist8")
function join8() {
    courselist1.style.display = "none";
    hero.style.display = 'none';
    courselist2.style.display = "none";
    courselist3.style.display = "none";
    courselist4.style.display = "none";
    courselist5.style.display = "none";
    courselist6.style.display = "none";
    courselist7.style.display = "none";
    courselist8.style.display = "block";
    courselist9.style.display = "none";
}

var courselist9 = document.getElementById("courselist9")
function join9() {
    courselist1.style.display = "none";
    hero.style.display = 'none';
    courselist2.style.display = "none";
    courselist3.style.display = "none";
    courselist4.style.display = "none";
    courselist5.style.display = "none";
    courselist6.style.display = "none";
    courselist7.style.display = "none";
    courselist8.style.display = "none";
    courselist9.style.display = "block";
}



var backs = document.getElementById("backs");
function back() {
    hero.style.display = 'block';
    courselist1.style.display = "none";
    courselist2.style.display = "none";
    courselist3.style.display = "none";
    courselist4.style.display = "none";
    courselist5.style.display = "none";
    courselist6.style.display = "none";
    courselist7.style.display = "none";
    courselist8.style.display = "none";
    courselist9.style.display = "none";
}



var keySec = document.getElementById("keySec");
var quiz = document.getElementById("quiz");
var pass = document.getElementById("pass");
function startquiz() {

    if (pass.value == "123") {
        quiz.style.display = "flex";
        keySec.style.display = "none";
    }
    else if (pass.value == "") {
        swal("Enter test key 123");
    }
    else {
        swal("Invalid key please enter 123")
    }
}

function key() {
    keySec.style.display = "flex";
    courselist1.style.display = "none";
    courselist2.style.display = "none";
    courselist3.style.display = "none";
    courselist4.style.display = "none";
    courselist5.style.display = "none";
    courselist6.style.display = "none";
    courselist7.style.display = "none";
    courselist8.style.display = "none";
    courselist9.style.display = "none";
}                                                                       