import 'assets/css/animation.css';


export var animation = function () {
    var items, winH;

    var initModule = function () {
        items = document.querySelectorAll(".grid_box");
        winH = window.innerHeight;
        _addEventHandlers();
    }

    var _addEventHandlers = function () {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    };

    var _checkPosition = function () {
        for (var i = 0; i < items.length; i++) {
            var posFromTop = items[i].getBoundingClientRect().top;
            if (winH > posFromTop) {
                items[i].classList.add("active");
            }
        }
    }

    return {
        init: initModule
    }
}

export var animateHTML = function () {

    var elems,
        windowHeight, posFromTop2

    var init = function () {
        elems = document.getElementsByClassName("hidden");
        windowHeight = window.innerHeight;
        for (var i = 0; i < elems.length; i++) {
            posFromTop2 = elems[i].getBoundingClientRect().top;
        }
        _addEventHandlers();
    }

    var _addEventHandlers = function () {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("resize", init)
    }
    var _checkPosition = function () {
        var scrollY = window.scrollY;


        for (var i = 0; i < elems.length; i++) {
            var posFromTop = elems[i].getBoundingClientRect().top;
            if (posFromTop - windowHeight <= 0) {
                // elems[i].className = elems[i].className.replace("hidden", "fade-in");
            } else {
                // elems[i].className = elems[i].className.replace("fade-in", "hidden");
            }

        }
        console.log(posFromTop2, windowHeight, scrollY);


    }

    return {
        init: init
    }
}