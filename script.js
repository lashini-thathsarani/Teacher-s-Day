const envelope = document.getElementById("envelope");

const message = document.getElementById("message");

envelope.addEventListener("click",function () {
    message.classList.add("show");

    envelope.style.display = "none";
});