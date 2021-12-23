const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        apiKey: "AIzaSyDAPOwRwFSYyfnNZllZtvlEem8lcc3GYcQ",
        authDomain: "contentwars-e965a.firebaseapp.com",
        projectId: "contentwars-e965a",
        storageBucket: "contentwars-e965a.appspot.com",
        messagingSenderId: "463214878662",
        appId: "1:463214878662:web:f49a9e42caee9a1a7edcc7",
        measurementId: "G-G95GD0CD5B",
      },
    };
  }
  return {
    reactStrictMode: true,
  };
};
