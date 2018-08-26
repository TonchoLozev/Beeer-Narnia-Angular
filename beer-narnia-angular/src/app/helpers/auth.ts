export const authHelper = (() => {
  const kinveyBaseUrl = 'https://baas.kinvey.com/';
  const kinveyAppKey = 'kid_rkgjslEzX';
  const kinveyAppSecret = 'ae7dc67d497d4f54920b95612cd676fc';

  function makeAuth(type) {
    return type === 'basic'
      ? 'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
      : 'Kinvey ' + sessionStorage.getItem('authtoken');
  }

  function isAuth() {
    return sessionStorage.getItem('roleId') !== null;
  }

  function saveSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authtoken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);
    let email = userInfo.email;
    sessionStorage.setItem('email', email);
  }

  function isAdmin() {
    return sessionStorage.getItem('roleId') === '40e731c1-824f-485b-8d98-ffb30d85b6a9';
  }

  return {
    saveSession,
    isAuth,
    makeAuth,
    isAdmin
  };
})();
