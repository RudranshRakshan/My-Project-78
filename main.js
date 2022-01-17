var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "mom.jfif", "dad.jfif", "brother.jfif", "me.jfif"];
var names = ["Fmaily Book", "Ranjana Kumari", "Ranjit Kumar", "Rohinish Rakshan", "Rudransh Rakshan"];
var i = 0;
function update() {
  i++;
  var numbers_of_family_member_in_array = images.length
  if (i == numbers_of_family_member_in_array) {
    i = 0;
  }
  var updatedImage = images[i];
  var updatedName = names[i];

  document.getElementById("family_member_image").src = updatedImage;
  document.getElementById("family_member_name").innerHTML = updatedName;
}
