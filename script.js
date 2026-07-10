window.addEventListener("DOMContentLoaded", () => {

    const pageFlip = new St.PageFlip(
        document.getElementById("book"),
        {
            width:700,
            height:990,

            size:"stretch",

            minWidth:315,
            maxWidth:700,

            minHeight:450,
            maxHeight:990,

            showCover:true,

            mobileScrollSupport:true
        }
    );

    pageFlip.loadFromImages([
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
    ]);

});