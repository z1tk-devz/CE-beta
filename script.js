const left = document.querySelector(".left"),
right = document.querySelector(".right"),
bar = document.querySelector(".bar"),
editorhtml = document.querySelector(".editor-html"),
editorcss = document.querySelector(".editor-css"),
editorjs = document.querySelector(".editor-js"),
tocl1 = document.querySelector(".tocl-1"),
tocl2 = document.querySelector(".tocl-2"),
tocl3 = document.querySelector(".tocl-3"),
run = document.querySelector(".btn-run"),
iframe = document.querySelector(".iframe"),
darkMode = document.querySelector(".btn-dark"),
lightMode = document.querySelector(".btn-light"),
menu = document.querySelector(".editor-menu"),
live = document.querySelector(".live"),
livebtn = document.querySelector("#live"),
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
run.addEventListener("click", runcode)

// Set Dark Mode
darkMode.addEventListener("click", () => {
    editorhtml.style.backgroundColor = "#363836";
    editorhtml.style.color = "#eee";
    editorcss.style.backgroundColor = "#363836";
    editorcss.style.color = "#eee";
    editorjs.style.backgroundColor = "#363836";
    editorjs.style.color = "#eee";
    tocl1.style.backgroundColor = "darkslategray";
    tocl1.style.color = "#eee";
    tocl2.style.backgroundColor = "darkslategray";
    tocl2.style.color = "#eee";    
    tocl3.style.backgroundColor = "darkslategray";
    tocl3.style.color = "#eee";
    menu.style.backgroundColor = "#363836";    
    body.style.backgroundColor = "darkslategray";
    darkMode.style.backgroundColor = "darkslategray";
    lightMode.style.backgroundColor = "darkslategray";
    live.style.backgroundColor = "darkslategray";
    run.style.backgroundColor = "darkslategray";
    darkMode.style.color = "#eee";
    lightMode.style.color = "#eee";
    run.style.color = "#eee";
    live.style.color = "#eee";
})

// Set Light Mode
lightMode.addEventListener("click", () => {
    editorhtml.style.backgroundColor = "";
    editorhtml.style.color = "";
    editorcss.style.backgroundColor = "";
    editorcss.style.color = "";    
    editorjs.style.backgroundColor = "";
    editorjs.style.color = "";
    tocl1.style.backgroundColor = "lightgray";
    tocl1.style.color = "";
    tocl2.style.backgroundColor = "lightgray";
    tocl2.style.color = "";
    tocl3.style.backgroundColor = "lightgray";
    tocl3.style.color = "";
    body.style.backgroundColor = "";
    menu.style.backgroundColor = "";
    darkMode.style.backgroundColor = "#31ad26";
    lightMode.style.backgroundColor = "#31ad26";
    live.style.backgroundColor = "#31ad26";
    run.style.backgroundColor = "#31ad26";
    darkMode.style.color = "#fff";
    lightMode.style.color = "#fff"
    run.style.color = "#fff";
    live.style.color = "";
})

// LIVE CODE
livebtn.addEventListener("click", () => {
    if (livebtn.checked) {
        addEventListener("keyup", runcode);
    } else {
        removeEventListener("keyup", runcode);
    }
})

function runcode() {
    let html = editorhtml.value;
    let css = "<style>"+editorcss.value+"</style>";
    let js = editorjs.value;
    iframe.contentDocument.body.innerHTML=html+css;
    iframe.contentWindow.eval(js);
}
