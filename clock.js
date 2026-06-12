function updateClock() {
  const now = new Date();

  // Toronto time
  const toronto = new Date(
    now.toLocaleString("en-US", { timeZone: "America/Toronto" })
  );

  const time = toronto.toTimeString().split(" ")[0];
  const date = toronto.toDateString();

  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = date;
  document.getElementById("tz").textContent = "America/Toronto";

  // visitor offset
  const local = new Date();
  const diff = Math.round((local - now) / 3600000);
  document.getElementById("offset").textContent =
    `Your time: ${diff >= 0 ? "+" : ""}${diff}h`;

  // analog clock
  const sec = toronto.getSeconds();
  const min = toronto.getMinutes();
  const hr = toronto.getHours();

  document.getElementById("s").style.transform =
    `translate(-50%, -100%) rotate(${sec * 6}deg)`;

  document.getElementById("m").style.transform =
    `translate(-50%, -100%) rotate(${min * 6}deg)`;

  document.getElementById("h").style.transform =
    `translate(-50%, -100%) rotate(${hr * 30}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
