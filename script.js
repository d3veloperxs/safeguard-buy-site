const API = "https://safeguard-license-api-3.onrender.com";

async function buy() {
  const res = await fetch(API + "/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  });

  const data = await res.json();
  document.getElementById("result").innerText =
    "Your license key: " + data.key;
}
