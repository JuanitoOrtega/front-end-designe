window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {

        document.querySelector(".header-sticky-bar").classList.add("sticky");
    } else {

        document.querySelector(".header-sticky-bar").classList.remove("sticky");
    }

    
}

