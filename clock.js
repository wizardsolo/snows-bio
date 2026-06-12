function updateClock() {
  const now = new Date();

  const t = getTimeParts("America/Toronto");

  const timeStr = `${String(t.hour).padStart(2,"0")}:${String(t.minute).padStart(2,"0")}:${String(t.second).padStart(2,"0")}`;
  const dateStr = now.toDateString();

  document.getElementById("time").textContent = timeStr;
  document.getElementById("date").textContent = dateStr;
  document.getElementById("tz").textContent = "America/Toronto";

  const localOffset = -now.getTimezoneOffset() / 60;
  document.getElementById("offset").textContent =
    `Your time: ${localOffset >= 0 ? "+" : ""}${localOffset}h`;

  // analog clock
  const sec = t.second;
  const min = t.minute;
  const hr = t.hour % 12;

  document.getElementById("s").style.transform =
    `translate(-50%, -100%) rotate(${sec * 6}deg)`;

  document.getElementById("m").style.transform =
    `translate(-50%, -100%) rotate(${min * 6 + sec * 0.1}deg)`;

  document.getElementById("h").style.transform =
    `translate(-50%, -100%) rotate(${hr * 30 + min * 0.5}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
