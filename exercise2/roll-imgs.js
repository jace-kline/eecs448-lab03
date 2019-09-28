let curImgCode = 0
let srcLoc = "./img/"
let codeImgMap = {
    0: (srcLoc + "mandelbot.jpg"),
    1: (srcLoc + "juliaset.jpg"),
    2: (srcLoc + "serpinski.png"),
    3: (srcLoc + "hilbertscurve.png"),
    4: (srcLoc + "tree.jpg")
}

function nextImg() {
    curImgCode = mod(curImgCode + 1, 5)
    document.getElementById("im").src = codeImgMap[curImgCode]
}

function prevImg() {
    curImgCode = mod(curImgCode - 1, 5)
    document.getElementById("im").src = codeImgMap[curImgCode]
}

function mod(num, n) {
    if(num < 0) {
        return((num % n) + n)
    }
    return(num % n)
}