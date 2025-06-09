const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const durationText = document.getElementById("duration");

function toggleMusic() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶️";
  }
}

// Mostrar tempo total ao carregar
audio.onloadedmetadata = () => {
  const mins = Math.floor(audio.duration / 60);
  const secs = Math.floor(audio.duration % 60).toString().padStart(2, '0');
  durationText.textContent = `${mins}:${secs}`;
};