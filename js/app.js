cl= console.log;

const toggleMenu = document.getElementById("toggleMenu");

const onToggleMenu = (eve) => {
    cl("Click Trigger")
    navbar.classList.toggle("visible")
}

toggleMenu.addEventListener('click', onToggleMenu);