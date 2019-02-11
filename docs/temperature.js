document.querySelector('#temperature-form').addEventListener('submit', function(e){

  document.querySelector('#results').style.display = 'none';


  document.querySelector('#loading').style.display = 'block';

  setTimeout(convertTemperature, 2000);

  e.preventDefault();
});


function convertTemperature() {
  const temperatureCelsiusInput = document.querySelector('#celsius');
  const temperatureFahrenheitOutput = document.querySelector('#fahrenheit');

  const temperatureCelsius = parseFloat(temperatureCelsiusInput.value);
  const fahrenheit = (temperatureCelsius*9/5) + 32;

  if(isFinite(temperatureCelsius)) {
    temperatureFahrenheitOutput.value = fahrenheit.toFixed(0);

    document.querySelector('#results').style.display = 'block';


   document.querySelector('#loading').style.display = 'none';
  } else {

    document.querySelector('#results').style.display = 'none';

    document.querySelector('#loading').style.display = 'none';

    showError('Please add a valid number');

  }

}

function showError(error) {
  const createAlert = document.createElement('div');
  createAlert.className = 'alert alert-danger';
  
  const card = document.querySelector('.card-body');
  const heading = document.querySelector('.card-title');

  const textError = document.createTextNode(error);
  createAlert.appendChild(textError);

  card.insertBefore(createAlert, heading);

  setTimeout(clearAlert, 2000);

}

function clearAlert() {
  document.querySelector('.alert').remove();
}