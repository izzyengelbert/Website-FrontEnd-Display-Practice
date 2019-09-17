function toggle_sidebar() {
    if (document.getElementById("main").style.paddingLeft === "18%") {
        document.getElementById("main").style.paddingLeft = "20px";
        document.getElementById("drawer").style.display = "none";
    } else {
        setTimeout(function () {
            document.getElementById("main").style.paddingLeft = "18%";
            document.getElementById("drawer").style.display = "flex";
        }, 50);

    }
}