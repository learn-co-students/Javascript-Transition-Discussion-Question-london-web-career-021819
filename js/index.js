// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

const saveInterval = document.getElementById( 'interval' )

document.getElementById('save_lincoln').addEventListener("click", () => {
  saveLincoln(parseInt(saveInterval.value))
})

const zombieFace = document.getElementById('foreground')

function saveLincoln(interval) {
  if (isNaN(interval)) {
    interval = 100
  }
  var op = 1;
  var timer = setInterval(function() {
    if (op <= 0.01) {
      clearInterval(timer);
      zombieFace.style.display = 'none';
    }
    zombieFace.style.opacity = op;
    op -= 0.01;
  }, (interval / 100));
}
