window.addEventListener('load', function () {

    document.getElementById('loader').style.display = 'none';

});

/* WhatsApp Inquiry */

function sendToWhatsapp() {

    var name = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;
    var message = document.getElementById('message').value;

    var whatsappMessage =
        "New Inquiry%0A%0A" +
        "Name : " + name + "%0A" +
        "Mobile : " + mobile + "%0A" +
        "Message : " + message;

    var whatsappURL =
        "https://wa.me/8450928057?text=" + whatsappMessage;

    window.open(whatsappURL, '_blank');

}