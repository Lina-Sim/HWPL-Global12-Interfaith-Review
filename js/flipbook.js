document.addEventListener(
    "DOMContentLoaded",
    function(){


    const pageFlip =
        new St.PageFlip(
            document.getElementById("book"),
            {


                width:600,

                height:850,


                size:"stretch",


                minWidth:300,

                maxWidth:1000,


                minHeight:420,

                maxHeight:1400,


                showCover:true,


                mobileScrollSupport:false,


                flippingTime:900,


                usePortrait:true,


                drawShadow:true,


                maxShadowOpacity:0.5


            }
        );



    const pages =
        document.querySelectorAll(".page");



    pageFlip.loadFromHTML(pages);



    document
    .getElementById("prevBtn")
    .addEventListener(
        "click",
        function(){

            pageFlip.flipPrev();

        }
    );



    document
    .getElementById("nextBtn")
    .addEventListener(
        "click",
        function(){

            pageFlip.flipNext();

        }
    );



});