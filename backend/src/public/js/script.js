function toggleMenu() {
    var menu = document.querySelector(".menu");
    menu.classList.toggle("open");
  }

  function toggleDescriptionProduct() {
    var descriptionP = document.getElementById("descriptionP");
    if (descriptionP.style.display === "none") {
        descriptionP.style.display = "block";
    } else{
        descriptionP.style.display = "none";
    }
  }