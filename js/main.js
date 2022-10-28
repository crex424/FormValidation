window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
}
function isTextPresent(id, errMsg) {
    var textBox = document.getElementById(id);
    var txtBoxValue = textBox.value;
    if (txtBoxValue == "") {
        var errSpan = textBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
