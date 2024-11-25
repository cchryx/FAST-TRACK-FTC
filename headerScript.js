const navContent = document.getElementById("nav-content");
const header_nav_containerSub = document.getElementById(
    "header_nav_container-sub"
);
const header_nav_wrapperSub = document.getElementById("header_nav_wrapper-sub");
const header_nav_list = document.getElementById("header_nav_list");
const logo_image = document.getElementById("logo_image");
const header_nav_container = document.getElementById("header_nav_container");

// toggle on click
navContent.addEventListener("click", function () {
    if (
        header_nav_containerSub.style.display === "none" ||
        !header_nav_containerSub.style.display
    ) {
        header_nav_containerSub.style.display = "flex";
    } else {
        header_nav_containerSub.style.display = "none";
    }
});

document.addEventListener("click", function (event) {
    if (
        header_nav_containerSub.style.display === "flex" &&
        event.target !== navContent &&
        !header_nav_wrapperSub.contains(event.target)
    ) {
        header_nav_containerSub.style.display = "none";
    }
});

document.addEventListener("scroll", function (event) {
    header_nav_containerSub.style.display = "none";
});
