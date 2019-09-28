
function updateAll() {

    let targetParagraph = document.getElementById("target");
    let desiredFields = scrapeInputsObj();


    let actionToErrorMsgID = {
        0: "border-color-error",
        1: "border-width-error",
        2: "bg-color-error",
        3: "error-header"
    }

    let borderColorSuccess = updateBorderColor(targetParagraph, desiredFields.borderColors);
    let borderWidthSuccess = updateBorderWidth(targetParagraph, desiredFields.border_width);
    let bgColorSuccess = updateBgColor(targetParagraph, desiredFields.bgColors);
    
    let successes = [borderColorSuccess, borderWidthSuccess, bgColorSuccess];

    let getElementFromCode = (i) => document.getElementById(actionToErrorMsgID[i]);

    let id = (x) => x

    if(successes.every(id)){
        hideElements([0, 1, 2, 3].map(getElementFromCode));
    }
    else {
        showElement(getElementFromCode(3));
        for(i = 0; i < 3; i++) {
            if(successes[i]) {
                hideElement(getElementFromCode(i));
            }
            else{
                showElement(getElementFromCode(i));
            }
        }
    }

}

function scrapeInputsObj() {
    return(
        {
            borderColors : [
                parseInt(document.getElementById("border-red").value),
                parseInt(document.getElementById("border-green").value),
                parseInt(document.getElementById("border-blue").value)
            ],
            
            border_width : parseInt(document.getElementById("border-width").value),
    
            bgColors : [
                parseInt(document.getElementById("bg-red").value),
                parseInt(document.getElementById("bg-green").value),
                parseInt(document.getElementById("bg-blue").value)
            ]
        }
    );
}

function validColorCombo(l) {
    return((l.length == 3) && l.every(validColorCode))
}

function validColorCode(i) {
    return(!(isNaN(i)) && (i >= 0) && (i <= 255));
}

function validBorderWidth(w) {
    return(!(isNaN(w)) && (w > 0))
}

function listToRgb(l) {
    return("rgb(" + l[0].toString() + "," + l[1].toString() + "," + l[2].toString() + ")");
}

function updateBorderColor(el, l) {
    if(validColorCombo(l)) {
        el.style.borderColor = listToRgb(l);
        return true;
    }
    return false;
}

function updateBgColor(el, l) {
    if(validColorCombo(l)) {
        el.style.backgroundColor = listToRgb(l);
        return true;
    }
    return false;
}

function updateBorderWidth(el, w) {
    if(validBorderWidth(w)) {
        el.style.borderWidth = w.toString() + "px";
        return true;
    }
    return false;
}

function hideElement(l) {
    l.style.display = "none";
}

function showElement(l) {
    l.style.display = "block";
}

function hideElements(els) {
    els.forEach(hideElement);
}