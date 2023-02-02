import React, { useEffect } from 'react';

const GoogleAuth = () => {
  const handleCredentialResponse = (response) => {
    console.log('hekk');
    console.log(response);
  };

  useEffect(() => {
    /*global google*/
    const auth = google.accounts.id;
    console.log(auth);

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

    // Login Prompt and notify on success
    auth.prompt((notification) => {
      if (
        notification.isNotDisplayed() ||
        notification.isSkippedMoment()
      ) {
        console.log('Notification failed!!!');
      }
    });
  }, []);

  return (
    <div>
      <div id='google-login-div'></div>
    </div>
  );
};

export default GoogleAuth;
