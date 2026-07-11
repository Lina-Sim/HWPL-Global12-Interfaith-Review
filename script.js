window.addEventListener("DOMContentLoaded", () => {

    const isMobile = window.matchMedia("(max-width:768px)").matches;

    const pageFlip = new St.PageFlip(
        document.getElementById("book"),
        isMobile
            ? {
                // Mobile
                width: 1000,
                height: 1414,

                size: "fixed",

                minWidth: 390,
                maxWidth: 1000,

                minHeight: 552,
                maxHeight: 1414,

                showCover: true,
                usePortrait: true,
                mobileScrollSupport: true,
                maxShadowOpacity: 0.15
            }
            : {
                // Desktop
                width: 700,
                height: 990,

                size: "stretch",

                minWidth: 315,
                maxWidth: 700,

                minHeight: 450,
                maxHeight: 990,

                showCover: true,
                mobileScrollSupport: true,
                maxShadowOpacity: 0.4
            }
    );

    // 아래 loadFromImages()부터는 그대로 유지

    // viewer.html의 이미지 리스트와 완벽 매칭 완료!
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

    /* =================================================
       1. 하단 화살표 버튼 클릭 이벤트 (기존 코드 유지)
    ================================================= */
    document.getElementById("prevBtn").addEventListener("click", () => {
        pageFlip.flipPrev();
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        pageFlip.flipNext();
    });

    /* =================================================
       2. 양옆 호버 존(hover-zone) 클릭 이벤트 추가 💡
       (이 코드가 있어야 책 옆면을 눌러도 시원하게 넘어갑니다!)
    ================================================= */
    const leftZone = document.querySelector(".left-zone");
    const rightZone = document.querySelector(".right-zone");

    if (leftZone) {
        leftZone.addEventListener("click", () => pageFlip.flipPrev());
    }
    if (rightZone) {
        rightZone.addEventListener("click", () => pageFlip.flipNext());
    }

});