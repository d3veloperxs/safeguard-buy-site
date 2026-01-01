const popup = document.getElementById("popup");
const buyBtn = document.getElementById("buyBtn");
const confirmBtn = document.getElementById("confirmBtn");
const result = document.getElementById("result");

buyBtn.onclick = () => {
    popup.classList.remove("hidden");
};

function closePopup() {
    popup.classList.add("hidden");
    result.innerText = "";
}

confirmBtn.onclick = async () => {
    const email = document.getElementById("email").value;
    if (!email) {
        result.innerText = "Please enter your email";
        return;
    }

    result.innerText = "Creating license...";

    try {
        const response = await fetch(
            "https://safeguard-license-api.onrender.com/buy",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            }
        );

        const data = await response.json();

        if (data.license) {
            result.innerText =
                "License created!\nCheck your email.\n\n" +
                "License: " + data.license;
        } else {
            result.innerText = "Error creating license";
        }
    } catch (err) {
        result.innerText = "Backend not available";
    }
};
