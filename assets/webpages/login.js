console.log('login.js is executing...');
document.getElementById('iSubmit').onclick = validUser;

function validUser() {
  console.log('validUser is executing...');
  setErrorMessageToDiv('');
  setInfoMessageToDiv('連線中...');

  // check input is valid or not
  var username = document.getElementById('iUserName').value;
  var userpin = document.getElementById('iUserPIN').value;
  if(!CheckInputIsValid(username,userpin)){
    return;
  }

  // xhr
  var xhr = new XMLHttpRequest();
  var url = '/api/WebEmpAuth/AD_Login_Form'; //should be '/api/WebEmpAuth/AD_Login_Form' in PRODUCTION
  var params = 'UserName=' + username + '&UserPIN=' + userpin;
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && CheckHttpCodeIs200(xhr) && CheckValidationIsSuccessful(xhr)) {
      setToken(xhr.responseText);
      redirectToAngular();
    }
  }
  xhr.send(params);
}

function CheckInputIsValid(username, userpin){
  var usernameIsValid = !!(username.trim());
  var userpinIsValid = !!(userpin.trim());
  if(usernameIsValid && userpinIsValid){
    return true;
  }else{
    if(!userpinIsValid)
      setErrorMessageToDiv('請輸入使用者密碼');
    if(!usernameIsValid)
      setErrorMessageToDiv('請輸入使用者名稱');
    return false;
  }
}

function CheckHttpCodeIs200(xhr) {
  if (xhr.status != 200) {
    setErrorMessageToDiv('連線至API異常(http-code: ' + xhr.status + ')，按F12查看更多訊息。');
    return false;
  }
  return true;
}

function CheckValidationIsSuccessful(xhr) {
  var resultObj = JSON.parse(xhr.responseText);
  if (resultObj.result == false) {
    setErrorMessageToDiv(resultObj.message)
    return false;
  }
  return true;
}

function setErrorMessageToDiv(message){
  setInfoMessageToDiv('');
  document.getElementById("iErrorMessage").innerText = message;
}

function setInfoMessageToDiv(message){
  document.getElementById("iInfoMessage").innerText = message;
}

function setToken(responseText) {
  var response = JSON.parse(responseText);
  localStorage.setItem('jwt', response.token);
}

function redirectToAngular() {
  var url = window.location.href.replace('login.html', '');
  window.location = url;
}
