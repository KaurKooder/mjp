document.addEventListener('DOMContentLoaded', function () {
  fetch('partials/navbar.html')
    .then(function (res) { return res.text(); })
    .then(function (html) {
      document.getElementById('navbar-placeholder').outerHTML = html;
      M.Sidenav.init(document.querySelectorAll('.sidenav'));
    })
    .catch(function (err) {
      console.error('Navbari laadimine ebaõnnestus:', err);
    });
});
