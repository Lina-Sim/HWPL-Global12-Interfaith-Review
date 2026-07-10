window.addEventListener("DOMContentLoaded", () => {

    const pageFlip = new St.PageFlip(
        document.getElementById("book"),
        {
            width: 700,
            height: 990,
            size: "stretch",
            minWidth: 315,
            maxWidth: 700,
            minHeight: 450,
            maxHeight: 990,
            showCover: true,
            mobileScrollSupport: true
        }
    );

    // viewer.html의 이미지 리스트와 완벽 매칭 완료!
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