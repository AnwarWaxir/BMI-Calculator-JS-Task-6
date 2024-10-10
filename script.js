document.getElementById('cal_btn').addEventListener('click', function(){
    var weight = document.getElementById('weight-input').value;
    var height = document.getElementById('height-input').value;
    var final_result = (weight / (height * height)).toFixed(2)
    document.getElementById('result').textContent = final_result;
})