(function() {

  var header = new Headroom(document.querySelector("header"), {
      tolerance: 5,
      offset : 0,
      classes: {
        initial: "headroom",
        pinned: "headroom--pinned",
        unpinned: "headroom--unpinned"
      }
  });

 header.init();
 //console.log(header.classes);
}());
