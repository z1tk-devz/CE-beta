const left = document.querySelector(".left"),
right = document.querySelector(".right"),
bar = document.querySelector(".bar"),
editor = document.querySelector(".editor"),
run = document.querySelector(".btn-run"),
iframe = document.querySelector(".iframe"),
darkMode = document.querySelector(".btn-dark"),
lightMode = document.querySelector(".btn-light"),
menu = document.querySelector(".editor-menu"),
live = document.querySelector(".live"),
body = document.querySelector(".body");


const drag = (e) => {
    e.preventDefault();
    document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
    left.style.width = (e.pageX - bar.offsetWidth / 3) + "px";
    editor.resize();
}

bar.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", drag);
})

bar.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", drag);
})

// Run Btn Event Listener
run.addEventListener("click", () => {
    const html = editor.textContent;
    var run = "data:text/html;charset-utf-8," + encodeURI(html);
    iframe.src = run;
})

// Set Dark Mode
darkMode.addEventListener("click", () => {
    editor.style.backgroundColor = "#363836";
    editor.style.color = "#eee";
    menu.style.backgroundColor = "#363836";    
    body.style.backgroundColor = "darkslategray";
    darkMode.style.backgroundColor = "darkslategray";
    lightMode.style.backgroundColor = "darkslategray";
    run.style.backgroundColor = "darkslategray";
    darkMode.style.color = "#eee";
    lightMode.style.color = "#eee";
    run.style.color = "#eee";
    live.style.color = "#eee";
})

// Set Light Mode
lightMode.addEventListener("click", () => {
    editor.style.backgroundColor = "";
    editor.style.color = "";
    body.style.backgroundColor = "";
    menu.style.backgroundColor = "";
    darkMode.style.backgroundColor = "#31ad26";
    lightMode.style.backgroundColor = "#31ad26";
    run.style.backgroundColor = "#31ad26";
    darkMode.style.color = "#fff";
    lightMode.style.color = "#fff"
    run.style.color = "#fff";
    live.style.color = "";
})

// LIVE CODE
document.getElementById("live").onclick = function() {
    if (this.checked) {
        editor.addEventListener("keyup", update)
    } else {
        editor.removeEventListener("keyup", update)
        uc = "data:text/html;charset-utf-8," + encodeURI(html);
        iframe.src = uc;
    }
}

function update() {
        const html = editor.textContent;
        iframe.src = "data:text/html;charset-utf-8," + encodeURI(html);
}
