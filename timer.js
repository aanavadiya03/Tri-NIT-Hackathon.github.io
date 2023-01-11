(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let RegistrationEndDate = new Date("January 27, 2022 23:59:59");

  const countDown = new Date(RegistrationEndDate).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      if (distance < 0) {
        document.getElementById("headline").innerText =
          "Registrations Opening Soon!";
        // document.getElementById("register").innerText = "Go to dashboard";
        document.getElementById("countdown").style.display = "none";
        if (document.getElementById("content"))
          document.getElementById("content").style.display = "block";

        clearInterval(x);
      }

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));
    }, 0);
})();
