function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-118584133-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-118584133-1');
</script>

var modal = document.getElementById('myModal');
var btn = document.getElementById('happy');
var span = document.getElementsByClassName('close')[0];
happy.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = 'none';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

var modal = document.getElementById('mModal');
var btn = document.getElementById('party');
var span = document.getElementsByClassName('close')[0];
party.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = 'none';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
