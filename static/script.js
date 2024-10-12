function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var age = document.forms["myForm"]["age"].value;
    if (name == "" || age == "") {
        alert("Both Name and Age fields must be filled out.");
        return false;
    }
}