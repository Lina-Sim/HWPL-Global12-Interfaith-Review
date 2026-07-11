window.addEventListener("DOMContentLoaded", () => {

    const isMobile = window.matchMedia("(max-width:768px)").matches;

    const options = isMobile ? {

        // ===== Mobile =====
        width: 1600,
        height: 2263,

        size: "fixed",

        minWidth: 390,
        maxWidth: 1600,

        minHeight: 552,
        maxHeight: 2263,

        showCover: true,

        drawShadow: false,
        maxShadowOpacity: 0.15,

        mobileScrollSupport: true,

        usePortrait: true

    } : {

        // ===== Desktop (기존 그대로) =====
        width: 700,
        height: 990,

        size: "stretch",

        minWidth: 315,
        maxWidth: 700,

        minHeight: 450,
        maxHeight: 990,

        showCover: true,

        drawShadow: true,
        maxShadowOpacity: 0.4,

        mobileScrollSupport: false
    };

    const pageFlip = new St.PageFlip(
        document.getElementById("book"),
        options
    );

    pageFlip.loadFromImages([
        "images/cover-vol01.png",
        "pages/vol01-page02.webp",
        "pages/vol01-page03.webp",
        "pages/vol01-page04.webp",
        "pages/vol01-page05.webp",
        "pages/vol01-page06.webp",
        "pages/vol01-page07.webp",
        "pages/vol01-page08.webp",
        "pages/vol01-page09.webp",
        "pages/vol01-page10.webp",
        "pages/vol01-page11.webp",
        "pages/vol01-page12.webp"
    ]);

    document.getElementById("prevBtn").addEventListener("click", () => {
        pageFlip.flipPrev();
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        pageFlip.flipNext();
    });

    const leftZone = document.querySelector(".left-zone");
    const rightZone = document.querySelector(".right-zone");

    if (leftZone) {
        leftZone.addEventListener("click", () => pageFlip.flipPrev());
    }

    if (rightZone) {
        rightZone.addEventListener("click", () => pageFlip.flipNext());
    }

});