var names = {
  "lecture1": "Lecture One",
  "lecturetwo": "Lecture Two",
  "commerciallaw": "Commercial Law"
};

var path = window.location.pathname;
var breadcrumb = document.getElementById("breadcrumb");

var segments = path.split("/");
var breadcrumbHTML = "";

breadcrumbHTML += "<a href='https://bislectures.github.io/' style='color: white; text-decoration: underline'>Home</a> / ";

for (var i = 0; i < segments.length; i++) {
  var segment = segments[i];
  if (segment === "") {
    continue;
  }
  if (i === segments.length - 1) {
    if (names[segment]) {
      segment = names[segment];
    } else {
      segment = segment.charAt(0).toUpperCase() + segment.slice(1);
    }
    breadcrumbHTML += "<span style='color: white; text-decoration: none'>" + segment + "</span>";
  } else {
    if (names[segment]) {
      segment = names[segment];
    } else {
      segment = segment.charAt(0).toUpperCase() + segment.slice(1);
    }
    if (i === segments.length - 2) {
      breadcrumbHTML += "<a href='https://bislectures.github.io/" + segments.slice(1, i + 1).join("/").replace(/ /g, "%20") + "' style='color: white; text-decoration: underline'>" + segment + "</a>";
    } else {
      breadcrumbHTML += "<a href='https://bislectures.github.io/" + segments.slice(1, i + 1).join("/").replace(/ /g, "%20") + "/' style='color: white; text-decoration: underline'>" + segment + "</a>";
    }
  }
  if (i !== segments.length - 1) {
    breadcrumbHTML += " / ";
  }
}

breadcrumb.innerHTML = "<div style='text-align: center'>" + breadcrumbHTML + "</div>";