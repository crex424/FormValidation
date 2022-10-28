
window.onload = function() {
    let formBtn = 
        <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}


function main():void {
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
}

/**
 * @param id The id of the <input type = "text"> to validate
 * @param errMsg The message to display in the sibling span of the 
 * text box
 * @returns true if the text box with the given id
 * has some text inside it, false if there is no text
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let textBox = 
        <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = textBox.value;

    if (txtBoxValue == "") {
        let errSpan =
            <HTMLElement>textBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
