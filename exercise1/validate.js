

function validate() {
    let str1 = document.getElementById("entry1").value
    let str2 = document.getElementById("entry2").value
    let feedback = document.getElementById("feedback")
    if(!(str1 === str2)) {
        // display error - not matching
        feedback.style.color = 'red'
        feedback.innerHTML = "The passwords do not match. Try again."
    } else if(str1.length < 8) {
        // display error - not long enough
        feedback.style.color = 'red'
        feedback.innerHTML = "The password is not at least 8 characters long. Try again."
    } else {
        feedback.style.color = 'green'
        feedback.innerHTML = "This password satisfies the requirements."
    }  

}
