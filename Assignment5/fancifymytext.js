

window.onload = function() {
    const textarea = document.getElementById("textarea");
    const fancyRadio = document.getElementById("fancy");
    const boringRadio = document.getElementById("boring");
    const biggerButton = document.getElementById("bigger_button");
    const mooButton = document.getElementById("moo_button")

    biggerButton.onclick = function(event) {
        textarea.style.fontSize = "24pt";
    }
    
    mooButton.onclick = function(event) {
        mooify()
    }
    
    fancyRadio.onchange = function(event) {
        alert("You have selected the 'FancySchmancy option!'");
        fancify();
    }
    
    boringRadio.onchange = function(event) {
        alert("You have selected the 'Boring option!'");
        boringfy();
    }
    
    function mooify() {
        textarea.value = textarea.value.toUpperCase();
        var str = textarea.value;
        var parts = str.split(" ");
        parts.push("Moo");
        str = parts.join(" ");
        textarea.value = str;
    }
    
    function fancify() {
        textarea.style.fontWeight = "bold";
        textarea.style.color = "blue";
        textarea.style.textDecoration = "underline"
        boringRadio.checked = false;
    }
    
    function boringfy() {
        textarea.style.fontWeight = "normal";
        textarea.style.color = "black";
        textarea.style.textDecoration = "none"
        fancyRadio.checked = false;
    }
}