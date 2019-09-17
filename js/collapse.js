var coll = document.getElementsByClassName("navdrawer-collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].onclick = function() {
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  };
}