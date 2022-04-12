function ResponsiveNavbar() {
    var x = document.getElementById("nav_links");
    if (x.className === "navlinks") {
      x.className += " responsive";
    } else {
      x.className = "navlinks";
    }
  }