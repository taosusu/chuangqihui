var talkBox = document.getElementsByClassName("talk-box")[0];
var talkTitle = document.getElementsByClassName("talk-title")[0];
var talkP = document.getElementById("talk-p");
function closebox() {
    console.log("111")
    event.stopPropagation();
    talkBox.className = "none"
    talkTitle.className = "none"
    talkP.className = "none"
}
function jump() {
    window.location.href = "";
}

// 页面加载
window.onload = function () {
    var timer1 = window.setTimeout(function () {
        talkBox.style.display = "block";

    }, 2000);
}

