function continueButtonClick() {
    const inputArea = document.querySelector("textarea");
    if (inputArea) {
        inputArea.focus();
        inputArea.select();
        document.execCommand("insertText", false, "continue");

        const submitButton = document.querySelector("textarea + button");
        if (submitButton) {
            submitButton.click();
        }
    }
}

function createContinueButton() {
    const button = document.createElement("button");
    button.innerText = "Continuer";
    button.style.marginBottom = "10px";
    button.addEventListener("click", continueButtonClick);
    return button;
}

function addContinueButton() {
    const inputWrapper = document.querySelector("textarea").parentElement;
    if (inputWrapper) {
        const continueButton = createContinueButton();
        inputWrapper.parentNode.insertBefore(continueButton, inputWrapper);
    }
}

function waitForElement(selector, callback) {
    if (document.querySelector(selector)) {
        callback();
    } else {
        setTimeout(() => waitForElement(selector, callback), 500);
    }
}

waitForElement("textarea", addContinueButton);
