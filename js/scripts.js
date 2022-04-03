var user = 'Mike';
var salvation = 'Hello, ';
var greeting = salvation + user + '! Here are the latest reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

var price = 20,
    StudentDiscount = .10,
    StudentPrice = price = (price * StudentDiscount),
    PriceEl = document.getElementById('price'),
    studentpriceEl = document.getElementById('student-price');

PriceEl.textContent = price.toFixed(2);
studentpriceEl.textContent = StudentPrice.toFixed(2);

    