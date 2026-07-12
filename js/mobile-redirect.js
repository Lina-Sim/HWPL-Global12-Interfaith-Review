const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {

    setTimeout(() => {
        window.location.replace("mobile-viewer.html");
    }, 100);

}