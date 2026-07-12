window.addEventListener("DOMContentLoaded", () => {

    const pageFlip = new St.PageFlip(
    // PC 전용 북클립 설정  
        document.getElementById("book"),
        {
            width: 700,
            height: 990,
            size: "stretch", // PC에서는 화면 비율에 맞게 늘어나는 게 최고예요
            minWidth: 400,
            maxWidth: 700,
            minHeight: 500,
            maxHeight: 990,
            showCover: true,
            drawShadow: true,
            maxShadowOpacity: 0.4,
            usePortrait: false,
            mobileScrollSupport: false // PC니까 끕니다
        }
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

    // 이벤트 리스너들...
    document.getElementById("prevBtn").addEventListener("click", () => pageFlip.flipPrev());
    document.getElementById("nextBtn").addEventListener("click", () => pageFlip.flipNext());
});

    if (leftZone) {
        leftZone.addEventListener("click", () => pageFlip.flipPrev());
    }

    if (rightZone) {
        rightZone.addEventListener("click", () => pageFlip.flipNext());
    }
