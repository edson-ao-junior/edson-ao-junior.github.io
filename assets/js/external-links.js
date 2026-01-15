document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(
    '.author__urls a[href^="http"]'
  );

  links.forEach(link => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
});
