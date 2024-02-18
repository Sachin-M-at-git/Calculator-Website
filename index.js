var exp = "";

document.addEventListener("keydown", function(event) {
    let key = event.key;
    if(key == "Backspace") {
        delChar();
    } else if(key == "Delete") {
        allClear();
    } else if(key == "Enter" || key == "Equal") {
        calculate();
    } else if((key >= 0 && key <= '9') || "+-*/.%".includes(key)) {
        if(key == "/")
        key = "÷";
        typeOnInputField(key);
    }
})

var l = document.querySelectorAll(".round-button").length;

for (var i = 0; i < l; i++) {
    if(i == 9)
    continue;
    document.querySelectorAll(".round-button")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;
        typeOnInputField(buttonInnerHtml);
    });
}

l = document.querySelectorAll(".m-button").length;

for (var i = 0; i < l; i++) {
    if(i == 0) {
        document.querySelectorAll(".m-button")[i].addEventListener("click", function() {
            allClear();
        });
    } else if(i == 1) {
        document.querySelectorAll(".m-button")[i].addEventListener("click", function() {
            delChar();
        });
    } else if(i == 7) {
        document.querySelectorAll(".m-button")[i].addEventListener("click", function() {
            calculate(true);
        });
    } else {
        document.querySelectorAll(".m-button")[i].addEventListener("click", function() {
            var buttonInnerHtml = this.innerHTML;
            typeOnInputField(buttonInnerHtml);
        });
    }
}

function typeOnInputField(buttonTxt) {
    document.getElementById("a").classList.remove("aa");
    exp += buttonTxt;
    exp = exp.replace("‒","-");
    document.getElementById("tv").value = exp;
    calculate(false);
}

function allClear() {
    document.getElementById("a").innerText = "";
    exp = "";
    document.getElementById("tv").value = "";
}

function delChar() {
    exp = exp.slice(0, -1);
    typeOnInputField("");
}

function calculate(cFlag) {
    if(cFlag == true)
    document.getElementById("a").classList.add("aa");

    let e = exp;
    e = e.replace("÷", "/");
    e = e.replace("×", "*");
    res = eval(e);
    
    if(exp == "") {
        document.getElementById("a").innerText = "0";
    } else {
        document.getElementById("a").innerText = "= "+res.toString();
    }
    
}