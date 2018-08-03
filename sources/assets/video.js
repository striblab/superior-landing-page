<script>
$(document).ready(function() {
$("#heroVideo").get(0).play();
var player = jwplayer("articleVideo");
    $("button:first").click(function() {
      console.log("hit");
      $("#heroVideo").fadeToggle("slow", "linear");
      // player.play(true);


    });
    $("button:last").click(function() {
      $(".myWrapper").fadeToggle("fast", function() {

      });
    });

});
</script>
