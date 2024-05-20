document.querySelectorAll(".galery img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".img-xxl").style.display = "block";
    document.querySelector(".img-xxl img").src = image.getAttribute("src");
  };
});

document.querySelector(".img-xxl span").onclick = () => {
  document.querySelector(".img-xxl").style.display = "none";
};
