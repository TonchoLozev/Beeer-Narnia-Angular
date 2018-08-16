export const auth = (() => {

  function isAuth() {
    return sessionStorage.getItem('authtoken') !== null;
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

  return {
    saveSession,
    isAuth
  };
})();
