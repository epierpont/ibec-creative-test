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

  // Change dot opacity with random value.
  function changeDotOpacity(dotNum) {
    let randomNum = Math.floor(Math.random() * 5);
    let opacValue = "0." + randomNum;
    document.querySelector(dotNum).style.opacity = opacValue;
  }

  // Randomly choose a dot to target.
  function dotInterval() {
    const dotsArray = [
      ".dot-one",
      ".dot-two",
      ".dot-three",
      ".dot-four",
      ".dot-five",
    ];
    let randomDot = Math.floor(Math.random() * dotsArray.length);
    changeDotOpacity(dotsArray[randomDot]);
    setTimeout(dotInterval, 1000);
  }

  dotInterval();
});
