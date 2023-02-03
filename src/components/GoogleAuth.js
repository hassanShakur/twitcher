import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

const GoogleAuth = () => {
  const [user, setUser] = useState({});
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleCredentialResponse = ({ clientId, credential }) => {
    if (!credential || !clientId) return;
    const { name, email } = jwtDecode(credential);
    setUser({ userId: clientId, name, email });
    setIsSignedIn(true);
  };

  const handleLogoutClick = () => {
    setIsSignedIn(false);
    setUser({});
  };

  useEffect(() => {
    const auth = window.google?.accounts.id;
    if (!auth) return;

    // Initialization

    auth.initialize({
      client_id:
        '1037612301807-63cddpt1nfdu120uegj365fn5ekt8o53.apps.googleusercontent.com',
      callback: handleCredentialResponse,
    });

    // Render button
    const btnParent = document.getElementById('google-login-div');
    auth.renderButton(btnParent, {
      theme: 'filled-blue',
    });
  }, []);

  const renderButton = () => {
    return Object.keys(user).length > 0 ? (
      <div id='logout-div'>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    ) : (
      <div id='google-login-div'></div>
    );
    
  };
  //   console.log(google.accounts);

  return <div className='auth-div'>{renderButton()}</div>;
};

export default GoogleAuth;
