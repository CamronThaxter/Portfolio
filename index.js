let item =  document.querySelectorAll(".item");

window.addEventListener("scroll", function() {
    if (scrollY > 400) {
        item.forEach(it => {
            it.style.transition = ".5s ease-in-out";
            it.style.color = "#000";
        });

        // if (scrollY > 2200) {
        //     item.forEach(it => {
        //         it.style.transition = ".5s ease-in-out";
        //         it.style.color = "#fff";
        //     });
        // }
    }

    else {
        item.forEach(it => {
            it.style.transition = ".5s ease-in-out";
            it.style.color = "#fff";
        });
    }
})
