const track = document.getElementById('galleryTrack');
let isDragging = false;
let startX = 0;
let currentRotation = 0;
let baseRotation = 0;
let autoSpinTimer = null;

function startAutoSpin() {
  autoSpinTimer = setInterval(() => {
    currentRotation -= 0.2;

    baseRotation = currentRotation;
    track.style.transform = `rotateY(${currentRotation}deg)`;
  }, 16);
}

function stopAutoSpin() {
  clearInterval(autoSpinTimer);
}


function startDrag(e) {
  isDragging = true;
  stopAutoSpin(); 
  startX = e.pageX || e.touches[0].pageX;
}

function moveDrag(e) {
  if (!isDragging) return;
  const x = e.pageX || e.touches[0].pageX;
  const deltaX = x - startX;
  
  currentRotation = baseRotation + (deltaX * 0.3); 
  track.style.transform = `rotateY(${currentRotation}deg)`;
}

function endDrag() {
  if (!isDragging) return;
  isDragging = false;
  baseRotation = currentRotation;
  startAutoSpin();
}

track.addEventListener('mousedown', startDrag);
window.addEventListener('mousemove', moveDrag);
window.addEventListener('mouseup', endDrag);

track.addEventListener('touchstart', startDrag);
window.addEventListener('touchmove', moveDrag);
window.addEventListener('touchend', endDrag);

startAutoSpin();