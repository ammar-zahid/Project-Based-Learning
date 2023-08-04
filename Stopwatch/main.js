const stopwatch = document.getElementById("stopwatch");
let timerId;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function formatTime(milliseconds) {
  const pad = (num) => String(num).padStart(2, "0");
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  return `${pad(hours)}:${pad(minutes % 60)}:${pad(seconds % 60)}`;
}

function startStop() {
  if (isRunning) {
    clearInterval(timerId);
    isRunning = false;
  } else {
    startTime = Date.now() - elapsedTime;
    timerId = setInterval(updateStopwatch, 100);
    isRunning = true;
  }
}

function updateStopwatch() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  stopwatch.textContent = formatTime(elapsedTime);
}

function stop() {
  if (isRunning) {
    clearInterval(timerId);
    isRunning = false;
  }
}

function reset() {
  clearInterval(timerId);
  isRunning = false;
  elapsedTime = 0;
  stopwatch.textContent = "00:00:00";
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);
