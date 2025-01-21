document.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    console.log(header)
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
});
