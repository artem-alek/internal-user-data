import $ from 'jquery';

function randomUser (callback) {
  $.ajax({
    url: 'https://randomuser.me/api/?page=3&results=12&seed=abc',
    dataType: 'json',
    success: callback
  });
}

export { randomUser };
