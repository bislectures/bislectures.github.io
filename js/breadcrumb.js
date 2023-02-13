var path = window.location.pathname;
var breadcrumb = document.getElementById("breadcrumb");

var segments = path.split("/");
var breadcrumbHTML = "";

for (var i = 0; i < segments.length; i++) {
  var segment = segments[i];
  if (segment === "") {
    continue;
  }
  if (i === segments.length - 1) {
    breadcrumbHTML += "<span style='color: white; text-decoration: none'>" + segment + "</span>";
  } else {
    breadcrumbHTML += "<a href='" + "/".repeat(i) + segment + "/' style='color: white; text-decoration: underline'>" + segment + "</a>";
  }
  if (i !== segments.length - 1) {
    breadcrumbHTML += " / ";
  }
}

breadcrumb.innerHTML = "<div style='text-align: center'>" + breadcrumbHTML + "</div>";