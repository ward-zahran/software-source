function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


window.onload = function() {
    var savedMode = localStorage.getItem("mode");
    if (savedMode === "dark-mode") {
        document.body.classList.add("dark-mode");
    }
}

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Save the current mode in localStorage
    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("mode", "dark-mode");
    } else {
        localStorage.setItem("mode", "light-mode");
    }
}

function redirectToThankYouPage() {
    window.location.href = "#thankyou";
}

function changeSetting() {
    var settingValue = document.getElementById("settingValue").innerText;
    // Change the setting value here...
        settingValue = "New Value"; // Replace this with the new setting value
    document.getElementById("settingValue").innerText = settingValue;
}

function confirmPayment() {
    window.location.href = '#paymentsuccessful';
}

function redirectToMain() {
    window.location.href = 'home.html';
}

function redirectToHome() {
    window.location.href = 'home.html';
}

function redirectPayment()
{
    window.location.href = '#confirmpayment';
}
