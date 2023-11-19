function message(){
    var userName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    alert (userName+ " Thank you for your details. We will be in touch via "+ email + " shortly.")
    document.getElementsByClassName('form')[0].style.display='none'; // To hide the form
    return false; // To prevent page refresh
}