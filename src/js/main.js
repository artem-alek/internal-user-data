import $ from 'jquery';
import { randomUser } from './apicalls';

randomUser(getData);

function getData (data) {
  var dataObj = data.results;
  console.log(dataObj);
  getInfo(dataObj);

}

function userTemplate (user) {

  return `
    <div class="user-box">
      <div class="user-img"><img class="img-box" src="${user.userImage}"/></div>
      <h2 class="user-name"><span>${user.userName}</span></h2>
      <p class="user-email">${user.userEmail}</p>
      <p class="user-address">${user.userAddress}</p>
      <p class="user-number">${user.userPhone}</p>
      <p class="user-cell">${user.userCell}</p>
    </div>
  `
}


function getInfo (dataInfo) {
  var info
  for (var i=0; i < dataInfo.length; i++) {
    info = dataInfo[i];
    var user = {};
    user.userImage = getImage(info.picture);
    user.userEmail = info.email;
    user.userPhone = info.phone;
    user.userName = getName(info.name);
    user.userAddress = getAddress(info.location);
    user.userCell = info.cell;
    $('.random-people').append(userTemplate(user));
  }
}

function getName (name) {
  return `${name.first} ${name.last}`;
}

function getAddress (address) {
  return `
    ${address.street} <br>
    ${address.city}, ${address.state} ${address.postcode}
    `
}

function getImage (image) {
  return `${image.large}`
}
