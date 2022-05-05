document.addEventListener("DOMContentLoaded", () => {
  let date = new Date("December 31 2022 00:00:00");
  function counts() {
    let now = new Date();
    gap = date - now;
    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;
    if (gap < 0) {
      document.querySelector("#group").innerText = "Time is over";
    }
    document.querySelector("#d").innerText = days;
    document.querySelector("#h").innerText = hours;
    document.querySelector("#m").innerText = minutes;
    document.querySelector("#s").innerText = seconds;
  }
  counts();
  setInterval(counts, 1000);

  document.querySelector("#subscribe").addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        document.querySelector("#popup").style.display = "flex";
        document.querySelector("#email").value = "";
      });
  });

  document.querySelector("#close-popup").addEventListener("click", (e) => {
    document.querySelector("#popup").style.display = "none";
  });
  document.querySelector("#butn-popup").addEventListener("click", (e) => {
    document.querySelector("#popup").style.display = "none";
  });
});
