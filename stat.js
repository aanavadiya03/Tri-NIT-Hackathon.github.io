function isInFrame(id) {
  let statDiv = document.getElementById(id);
  console.log("Animation running for element", id);
  const statDivBounds = statDiv.getBoundingClientRect();
  let isInFrame =
    statDivBounds.top >= 50 &&
    statDivBounds.left >= 0 &&
    statDivBounds.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    statDivBounds.right <=
      (window.innerWidth || document.documentElement.clientWidth);
  if (isInFrame) return true;
  return false;
}

function loadStatAnimation(num, id) {
  var percentEl = document.getElementById(id);
  console.log(document);
  var max = num;
  percentEl.innerHTML = 0;
  (function animloop() {
    if (percentEl.innerHTML >= max) {
      percentEl.innerHTML = max + "+";
      return;
    } //Stop recursive when max reach
    window.requestAnimationFrame(animloop);
    percentEl.innerHTML =
      parseInt(percentEl.innerHTML) + Math.round(max * 0.02 + 1);
  })();
}

function runAnimation() {
  loadStatAnimation(2000, "stat-1");
  loadStatAnimation(200, "stat-2");
  loadStatAnimation(10, "stat-3");
  loadStatAnimation(100000, "stat-4");
}

let animationDone = false;

window.addEventListener("scroll", function (e) {
  if (isInFrame("stat-1")) {
    // console.log("inframe");
    if (document.getElementById("stat-1").innerHTML === "0") runAnimation();
  } else {
    // console.log("not in frame");
    // reset the counters
    for (let i = 1; i <= 4; i++) {
      document.getElementById(`stat-${i}`).innerHTML = 0;
    }
  }
});
