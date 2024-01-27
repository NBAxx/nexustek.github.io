// Sticky Navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector("#header");
    header.classList.toggle("sticky", window.scrollY > 350);
});

// Open and Close Navigation
var open = document.querySelector("#icon");
var close = document.querySelector(".close");
var nav = document.querySelector(".navlinks");

open.addEventListener("click", ()=>{
        nav.style.left= "0";
        nav.style.display= "block";
        header.classList.toggle("sticky2");
});

close.addEventListener("click", ()=>{
    nav.style.left= "100%";
    nav.style.display= "none";
    header.classList.remove("sticky2");
});

// Submenu Open Close trigger
var itarrow = document.querySelector(".itarrow");

itarrow.addEventListener("click", ()=>{
    nav.classList.toggle("show1");
});

var subarrow1 = document.querySelector(".subarrow1");

subarrow1.addEventListener("click", ()=>{
    nav.classList.toggle("show2");
});

var subarrow2 = document.querySelector(".subarrow2");

subarrow2.addEventListener("click", ()=>{
    nav.classList.toggle("show3");
});

var subarrow3 = document.querySelector(".subarrow3");

subarrow3.addEventListener("click", ()=>{
    nav.classList.toggle("show4");
});

var subarrow4 = document.querySelector(".subarrow4");

subarrow4.addEventListener("click", ()=>{
    nav.classList.toggle("show5");
});


// faq
var que = document.getElementsByClassName("que");
var ans = document.querySelector(".ans");
var quearrow = document.getElementsByClassName("quearrow");
var i;

for(i = 0; i < que.length; i++)
{
    que[i].addEventListener("click", function() {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var ans = this.nextElementSibling;
        if(ans.style.display === "block")
        {
            ans.style.display = "none";

        }else{
            ans.style.display = "block";
        }
    });
};

// Date
var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;
