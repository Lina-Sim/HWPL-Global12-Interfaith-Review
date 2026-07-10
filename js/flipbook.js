document.addEventListener(
"DOMContentLoaded",
()=>{


const pageFlip =
new St.PageFlip(
document.getElementById("book"),
{


width:600,

height:850,


showCover:true,


flippingTime:900,


usePortrait:true,


drawShadow:true,


maxShadowOpacity:0.5


});


const pages =
document.querySelectorAll(".page");


pageFlip.loadFromHTML(pages);



document
.getElementById("prevBtn")
.addEventListener(
"click",
()=>{

pageFlip.flipPrev();

});


document
.getElementById("nextBtn")
.addEventListener(
"click",
()=>{

pageFlip.flipNext();

});


});