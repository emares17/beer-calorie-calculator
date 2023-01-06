document.querySelector('.btn').addEventListener('click', calorieCalculation);
document.querySelector('.reset').addEventListener('click', resetForm);

function calorieCalculation(e) {
    e.preventDefault();
    let abv = document.querySelector('.abv-input').value;
    let ounces = document.querySelector('.ounces-input').value;
    let sugar = document.querySelector('.sugar-input').value;
    let total = Math.floor(((abv / 100) * ounces * 166) + (sugar * ounces * 3.8));
    
    document.querySelector('.result').innerText += total;
};

function resetForm() {
    document.querySelector('.abv-input').textContent = ''
    document.querySelector('.ounces-input').textContent = ''
    document.querySelector('.sugar-input').textContent = ''
};