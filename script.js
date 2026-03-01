function openWindow(id) {
  document.getElementById(id).style.display = 'block'
}

function closeWindow(id) {
  document.getElementById(id).style.display = 'none'
}

// Ensure bio window is open on page load
window.addEventListener('load', function() {
  openWindow('bio-window');
});