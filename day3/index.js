

function showResult() {
  var height = document.getElementById('height').value;
  var weight = document.getElementById('weight').value;

  var bmiValueIo = weight / (height/100 * height/100);
  var bmiValueCon = bmiValueIo.toFixed(2);

  document.getElementById('bmiValue').value = bmiValueCon;
};