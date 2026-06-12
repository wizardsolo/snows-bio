document.addEventListener("DOMContentLoaded", () => {
  function updateClock() {
    const ids = ["time", "date", "tz", "offset", "h", "m", "s"];

    const missing = ids.filter(id => !document.getElementById(id));

    if (missing.length > 0) {
      console.log("Missing elements:", missing);
      return;
    }

    const timeEl = document.getElementById("time");
    const dateEl = document.getElementById("date");
    const tzEl = document.getElementById("tz");
    const offsetEl = document.getElementById("offset");

    const now = new Date();

    const toronto = new Date(
      now.toLocaleString("en-US", { timeZone: "America/Toronto" })
    );

    timeEl.textContent = toronto.toTimeString().split(" ")[0];
    dateEl.textContent = toronto.toDateString();
    tzEl.textContent = "America/Toronto";

    const local = new Date();
    const diff = Math.round((local - now) / 3600000);
    offsetEl.textContent = `Your time: ${diff >= 0 ? "+" : ""}${diff}h`;

    const sec = toronto.getSeconds();
    const min = toronto.getMinutes();
    const hr = toronto.getHours();

    const s = document.getElementById("s");
    const m = document.getElementById("m");
    const h = document.getElementById("h");

    if (s) s.style.transform = `translate(-50%, -100%) rotate(${sec * 6}deg)`;
    if (m) m.style.transform = `translate(-50%, -100%) rotate(${min * 6}deg)`;
    if (h) h.style.transform = `translate(-50%, -100%) rotate(${hr * 30}deg)`;
  }

  updateClock();
  setInterval(updateClock, 1000);
});
