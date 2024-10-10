document.getElementById('cal_btn').addEventListener('click', function(){
    var weight = document.getElementById('weight-input').value;
    var height_feet = document.getElementById('height-input').value;
    var height = height_feet * 0.3048;
    var bmi = (weight / (height * height)).toFixed(2)
    document.getElementById('result').textContent = bmi;
    var message = document.getElementById('message')

    switch(true){
        case bmi < 18.5:
            message.textContent = 'Underweight';
            break;

        case bmi >= 18.5 && bmi <= 24.9:
            message.textContent = 'Normail Weight';
            break;

        case bmi >= 25 && bmi <= 29.9:
            message.textContent = 'Overweight';
            break;

        case bmi => 30:
            message.textContent = 'Obesity';
            break;

        default:
            message.textContent = 'Your entered invalid value';
    }
})

document.getElementById('reset_btn').addEventListener('click', function(){
    var weight = document.getElementById('weight-input');
    var height = document.getElementById('height-input');
    height.value = ''
    weight.value = ''
})