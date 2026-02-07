var params = new URLSearchParams(window.location.search);

function sendTo(url){
    // Removed the leading "/" to keep links relative to your project folder
    // Added ".html" to ensure GitHub Pages finds the file
    location.href = `${url}.html?` + params.toString();
}

document.querySelectorAll(".bottom_element_grid").forEach((element) => {
    element.addEventListener('click', () => {
        const target = element.getAttribute("send");
        if (target) {
            sendTo(target);
        }
    });
});

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) return 1;
    if (/android/i.test(userAgent)) return 2;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return 3;
    return 4;
}

if (getMobileOperatingSystem() == 2){
    const bottomBar = document.querySelector(".bottom_bar");
    if (bottomBar) bottomBar.style.height = "70px";
}
