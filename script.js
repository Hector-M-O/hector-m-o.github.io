function sendMail(){
    if (!window.emailjs || typeof window.emailjs.send !== 'function') {
        console.error("EmailJS not loaded or initialized. Make sure email.min.js is included and emailjs.init(...) was called correctly in the page.");
        alert("Email service is not available right now. Please try again later.");
        return;
    }

    const btn = document.querySelector('button[onclick="sendMail()"]');
    if (btn) btn.disabled = true;

    const parms = {
        first_name: document.getElementById("first-name").value,
        last_name: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    console.log("Sending email with params:", parms);

    emailjs.send("service_sp1ofd1", "contact_form", parms)
        .then(function(res){
            console.log("EmailJS success:", res);
            alert("Your message has been sent successfully!");
            // small delay so the user can read the alert; then force a reload.
            setTimeout(() => {
                try {
                    window.location.reload();
                    // fallback if reload() doesn't run for some reason
                    window.location.href = window.location.href;
                } catch (e) {
                    console.error("Reload failed, using href fallback:", e);
                    window.location.href = window.location.href;
                }
            }, 300);
        })
        .catch(function(err){
            console.error("EmailJS error:", err);
            if (btn) btn.disabled = false;
            alert("Failed to send message. Please try again later.");
        });
}