import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

const GoogleAuth = () => {
  const [user, setUser] = useState(null);
  console.log(user);

  const handleCredentialResponse = ({ clientId, credential }) => {
    if (!credential || !clientId) return;
    const { name, email } = jwtDecode(credential);
    setUser({ userId: clientId, name, email });
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
  //   console.log(google.accounts);

  return (
    <div>
      <div id='google-login-div'></div>
    </div>
  );
};

export default GoogleAuth;
