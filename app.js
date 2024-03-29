










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
    } else if (password != repeat) {
        swal("Password not match");
    }
    else {
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


var htmlQuiz = [

    {
        que: '1. Who is making the Web standards?',
        opt1: 'GOOGLE',
        opt2: 'MICROSOFT',
        opt3: 'MOZILLA', opt4: 'WORLD WIDE WEB',
        ans: 'WORLD WIDE WEB'
    },

    {
        que: '2. What is the abbreviation of HTML',
        opt1: 'HYPER TEXT MARKUP LANGUAGE',
        opt2: 'HYPER INFO MARKUP LANGUAGE',
        opt3: 'HYPER TEND MARK LANGUAGE', opt4: 'HYPER TEST MARKS LANGUAGE',
        ans: 'HYPER TEXT MARKUP LANGUAGE'
    }
    ,


    {
        que: '3. Choose the correct HTML element to define important text',
        opt1: 'STRONG',
        opt2: 'I', opt3: 'B',
        opt4: 'IMPORTANT',
        ans: 'IMPORTANT'
    },

]




var questionCount = 0
var score = 0



var label1 = document.querySelector('#val1')
var label2 = document.querySelector('#val2')
var label3 = document.querySelector('#val3')
var label4 = document.querySelector('#val4')

var opt1 = document.querySelector('#option1')
var opt2 = document.querySelector('#option2')
var opt3 = document.querySelector('#option3')
var opt4 = document.querySelector('#option4')

var quizWindow = document.querySelector('#quizWindow')

var resultWindow = document.querySelector('#result')

var question = document.querySelector('#question')

var announce = document.querySelector('#announce')


var totalQueCount = document.querySelector('#totalQueCount')

var correctQueCount = document.querySelector('#correctQueCount')

var answers = document.getElementsByClassName('optionsCheck')


function renderQuestion() {
    question.innerHTML = htmlQuiz[questionCount].que

    label1.innerHTML = htmlQuiz[questionCount].opt1
    label2.innerHTML = htmlQuiz[questionCount].opt2
    label3.innerHTML = htmlQuiz[questionCount].opt3
    label4.innerHTML = htmlQuiz[questionCount].opt4

    opt1.value = htmlQuiz[questionCount].opt1
    opt2.value = htmlQuiz[questionCount].opt2
    opt3.value = htmlQuiz[questionCount].opt3
    opt4.value = htmlQuiz[questionCount].opt4

}





function deSelect() {
    for (var i = 0; i < answers.length; i++) {
        answers[i].checked = false
    }
}

function next() {
    var checkedAns = false
    for (var i = 0; i < answers.length; i++) {
        // console.log(answers[i].value)
        // console.log(answers[i].checked)
        if (answers[i].checked) {
            checkedAns = true
            if (answers[i].value === htmlQuiz[questionCount].ans) {
                score++
            }
        }
    }



    if (!checkedAns) {
        swal('Please Select Any Option')
    } else {
        if (questionCount < htmlQuiz.length - 1) {
            questionCount++
            deSelect()
            renderQuestion()
        } else {
            showResult()
        }
    }


}

function showResult() {
    console.log('your score is ' + score)
    quizWindow.style.display = 'none'
    resultWindow.style.display = 'flex'
    totalQueCount.innerHTML = htmlQuiz.length
    correctQueCount.innerHTML = score

    var percentage = Math.floor((score / htmlQuiz.length) * 100)

    if (percentage < 70) {
        announce.innerHTML = 'You have Failed'
        announce.style.color = "red";
    } else {
        announce.innerHTML = 'You Passed';
        announce.style.color = "green";

    }



}
window.onload = renderQuestion()


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
        quizWindow.style.display = "flex";
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