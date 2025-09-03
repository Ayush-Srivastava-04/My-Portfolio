const images = document.querySelectorAll(".click-img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");
const closeBtn = document.querySelector(".close");
images.forEach(img => {
  img.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlayImg.src = img.src;
  });
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link  => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            sections.forEach(section => section.classList.remove('active-section'));
            const targetId = link.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active-section');
        })
    });
const feedbackContainers = document.querySelectorAll(".feedback-container");

feedbackContainers.forEach(container => {
    const feedbackBtn = document.getElementById("feedbackbtn");
    const feedbackBox = document.getElementById("feedbackbox");
    feedbackBtn.addEventListener("click", () => {
    feedbackBox.value = "✅ Thank you for your feedback!";
    feedbackBox.readOnly = true;
    feedbackBtn.style.display = "none";
  });
});
    