const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const logo = document.getElementById('logo');


function toggleButton(){
    navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);

var about = 
"My name is Abdalla Sarhan, I am very passionate about the software and computer engineering field, I consider myself enthusiastic, hard-working and a team player. During highschool, I accumulated skills and leadership in several fields including working as a host in a restaurant and creating and maintaining my own car detailing business. I moved to Toronto shortly after graduting high school and I am always eager to learn more and improve my skills.";
var education = 
"<ul class='list'><li class='item'> - I graduted from Lillian Osborne high school located in Edmonton, Alberta in <strong>2020</strong>.</li><li class='item'> - <strong>Currently</strong> enrolled in my second year of computer engineering at York University in Toronto, Ontario.</li></ul>";
var Professional = 
"<ul class='list'><li class='item'> - Building websites using <strong>HTML</strong>, <strong>CSS</strong> and <strong>Javascript</strong>.</li><li class='item'> - Good understanding of <strong>Java, C</strong> and <strong>Object Oriented Programming</strong> concepts through relevant school work.</li><li class='item'> - Frameworks: <strong>Django</strong>, <strong>ReactJS</strong>, <strong>Tailwind CSS</strong>, basic knowledge of <strong>Xcode</strong>.</li><li class='item'> - Understanding of <strong>Relational Databases</strong> and <strong>mySQL</strong>.</li><li class='item'> - <strong>Python</strong> understanding and Certificate in 'Python for Data Science, AI and development' by IBM through coursera which covered working with data in Python such as using <strong>Pandas</strong>, <strong>Numpy</strong> and <strong>BeautifulSoup</strong> libraries. Data structures such as dictionaries, lists... etc.</li></ul>";
var work=
"<ul class='list'><li class='item'> - <strong>Tutti Frutti breakfast and lunch (2018-2020):</strong> working in a restaurant setting taught me lots about dealing with people in a general sense as well as built my customer service skills and I enjoyed the working enviorment even though at some times there was lots of pressure.</li><li class='item'> - <strong>Car Detailing (2018-2021)</strong>: I operated my own small Car Detailing business where the service was done at the customers house. Setting this up included getting all the necessary supplies, I also had a few workers which I rotated between based on their availability and advertised through Kijiji and creating flyers. I received awesome feedback from customers, since I've moved to Toronto, I still get contacted from time to time regarding people getting my number from others because of the great word of mouth.</li><li class='item'> - For other information please download a copy of my resume below my picture!</li></ul>";
var hobbies =
"In my free time I enjoy working out, playing basketball, spending time with my family and friends as well as video games every once in a while.";
var future=
"<ul class='list'><li class='item'> - Continue working on projects and improving my frontend skills through ReactJS.</li><li class='item'> - strengthen Django and python backend skills to integrate in projects.</li><li class='item'> - Future learning plans: php, interested in getting into mobile application development.</li></ul>";

let count = 0;
function show() {
    document.getElementById("about").innerHTML="";
    count = count +1;
    if(count%2 === 0){

    }
    else {
        document.getElementById("about").innerHTML = about;
    }

}
let number = 0;
function showTwo() {
    document.getElementById("education").innerHTML= "";
    number = number +1;
    if(number%2 === 0){

    }
    else {
        document.getElementById("education").innerHTML = education;
    }

}
let n = 0;
function showThree() {
    document.getElementById("professional").innerHTML="";
    n = n +1;
    if(n%2 === 0){

    }
    else {
        document.getElementById("professional").innerHTML = Professional;
    }

}
let digit = 0;
function showFour() {
    document.getElementById("work").innerHTML="";
    digit = digit +1;
    if(digit%2 === 0){

    }
    else {
        document.getElementById("work").innerHTML = work;
    }

}
let d = 0;
function showFive() {
    document.getElementById("hobbies").innerHTML="";
    d = d +1;
    if(d%2 === 0){

    }
    else {
        document.getElementById("hobbies").innerHTML = hobbies;
    }

}
let l = 0;
function showSix() {
    document.getElementById("future").innerHTML="";
    l = l +1;
    if(l%2 === 0){

    }
    else {
        document.getElementById("future").innerHTML = future;
    }

}



var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)