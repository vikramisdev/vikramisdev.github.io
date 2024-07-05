AOS.init({
  once: false,
  duration: 500,
  delay: 100
});

function openUrl(url) {
  window.open(url, target="_blank");
}

function openMail() {
  window.href = "mailto:vs423502@gmail.com";
  alert("clicked mail button");
}