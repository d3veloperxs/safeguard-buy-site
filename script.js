const API = "https://JOUW-RENDER-URL";

async function buy() {
  const res = await fetch(API + "/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  });

  const data = await res.json();
  document.getElementById("result").innerText =
    "Your license key: " + data.key;
}
