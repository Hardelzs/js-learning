document.getElementById("demo").innerHTML =
  "john".constructor +
  "<br>" +
  (3.14).constructor +
  "<br>" +
  false.constructor +
  "<br>" +
  1234n.constructor +
  "<br>" +
  {}.constructor +
  "<br>" +
  [].constructor +
  "<br>" +
  new Date().constructor +
  "<br>" +
  new Set().constructor +
  "<br>" +
  new Map().constructor +
  "<br>" +
  function () {}.constructor;
