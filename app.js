document.getElementById('generate-btn').addEventListener('click', function () {
  var letter1 = String(Math.floor(Math.random() * 10));
  var letter2 = String(Math.floor(Math.random() * 10));
  var letter3 = String(Math.floor(Math.random() * 10));
  var letter4 = String(Math.floor(Math.random() * 10));
  document.getElementById('generate-field').value = letter1 + letter2 + letter3 + letter4;
  document.getElementById('trail').style.display = 'block';
  document.getElementById('trail').innerHTML = `<span id="trail-left">3</span> try left`;
})
var calcBtn = document.getElementsByClassName('button');
for (const btn of calcBtn) {
  btn.addEventListener('click', function (e) {
    document.getElementById('confirm-field').value += e.target.innerText;
    if (e.target.innerText == 'C') {
      document.getElementById('confirm-field').value = '';
    }
    if (e.target.innerText == '<') {
      var confirm = document.getElementById('confirm-field');
      var d = confirm.value.substring(0, confirm.value.length - 2);
      document.getElementById('confirm-field').value = d;
    }
  })
}
document.getElementById('submit-btn').addEventListener('click', function () {
  if (document.getElementById('generate-field').value == document.getElementById('confirm-field').value) {
    if (document.getElementById('confirm-field').value.length == 0) {
      document.getElementById('trail').innerText = 'please! generate pin first.... ';
    } else {
      document.getElementById('right').style.display = 'block';
      document.getElementById('wrong').style.display = 'none';
    }
  } else {
    document.getElementById('wrong').style.display = 'block';
    document.getElementById('right').style.display = 'none';
    document.getElementById('trail-left').innerText = Number(document.getElementById('trail-left').innerText) - 1;
    if (Number(document.getElementById('trail-left').innerText) < 1) {
      document.getElementById('trail').innerText = 'generate pin again.... ';
    }
  }
})