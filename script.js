
const pages = [

"images/cover-vol01.png",

"pages/vol01-page02.jpg",

"pages/vol01-page03.jpg",

"pages/vol01-page04.jpg",

"pages/vol01-page05.jpg",

"pages/vol01-page06.jpg",

"pages/vol01-page07.jpg",

"pages/vol01-page08.jpg",

"pages/vol01-page09.jpg",

"pages/vol01-page10.jpg",

"pages/vol01-page11.jpg",

"pages/vol01-page12.jpg"

];

let current = 0;

const img = document.getElementById("pageImage");

const page = document.getElementById("currentPage");

document.getElementById("nextBtn").onclick = ()=>{

    if(current < pages.length-1){

        current++;

        updatePage();

    }

};

document.getElementById("prevBtn").onclick = ()=>{

    if(current>0){

        current--;

        updatePage();

    }

};

function updatePage(){

    img.style.opacity=0;

    setTimeout(()=>{

        img.src=pages[current];

        page.textContent=current+1;

        img.style.opacity=1;

    },180);

}

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        document.getElementById("nextBtn").click();

    }

    if(e.key==="ArrowLeft"){

        document.getElementById("prevBtn").click();

    }

});