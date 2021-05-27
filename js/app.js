function showGallery(id) {
  let gallery = document.getElementById(id);
  gallery.style.display = 'flex';
}
function galleryTabs() {
  window.addEventListener("load", function () {
      var dogTabLinks = document.querySelectorAll(".dog-tab-link");
      function tabsControl(domEvent) {
          for (var i = 0; i < dogTabLinks.length; i++) {
            dogTabLinks[i].classList.remove("active-link");
          }
          domEvent.currentTarget.classList.add("active-link"), domEvent.preventDefault();
          var dogTabs = document.querySelectorAll(".dog-tab");
          for (i = 0; i < dogTabs.length; i++) {
            dogTabs[i].classList.remove("active-tab");
          }
          var anchorAttr = domEvent.target.getAttribute("href");
          document.querySelector(anchorAttr).classList.add("active-tab");
      }
      for (i = 0; i < dogTabLinks.length; i++) {
        dogTabLinks[i].addEventListener("click", tabsControl);
      }
  });
}
galleryTabs();
