function sendMail(){
    let parms = {
        first_name: document.getElementById("first-name").value,
        last_name: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_sp1ofd1", "contact_form", parms)
        .then(function(res){
            alert("Your message has been sent successfully!");
        })
        .catch(function(err){
            console.error("EmailJS error:", err);
            alert("Failed to send message. Please try again later.");
        });
}