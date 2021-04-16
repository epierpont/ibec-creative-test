document.addEventListener("DOMContentLoaded", function () {
  console.log(
    "iBec, I really appreciate the opportunity to participate in this test!"
  );

  // Toggle more content when arrow is clicked.
  const menuArrow = document.querySelector(".menu-arrow");
  const moreContent = document.querySelector(".more-content");

  menuArrow.addEventListener("click", () => {
    menuArrow.classList.toggle("clicked");
    moreContent.classList.toggle("d-none");
  });
});
