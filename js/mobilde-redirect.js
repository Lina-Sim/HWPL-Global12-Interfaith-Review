alert("mobile redirect 실행됨");

const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {
    window.location.replace("mobile-viewer.html");
}