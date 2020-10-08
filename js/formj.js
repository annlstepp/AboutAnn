// Try edit message

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  var text;
  if (x == "") {
    var p1 = "Name must be filled out."
    document.write(p1.fontcolor( "white" ));
    document.body.style.backgroundColor = "red";
    return false;
  }
  else
  var p2 = "your name has been submitted." 
  document.write((x + ", " + p2).fontcolor( "white"));
  document.body.style.backgroundColor = "green";
      return true;
}
