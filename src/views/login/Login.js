import { useEffect } from "react";

const Login = (props) => {
  useEffect(() => {
    const params = new URLSearchParams(document.location.search.substring(1));
    const access_token = params.get("access_token");
    console.log({ access_token });
    // Example fetch of playlist data
    fetch("https://api.spotify.com/v1/users/catherinepedersen/playlists", {
      method: "get",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div class="container">
      <div id="login">
        <h1>This is an example of the Authorization Code flow</h1>
        <a href="http://localhost:8000/login" class="btn btn-primary">
          Log in with Spotify
        </a>
      </div>
      <div id="loggedin">
        <div id="user-profile"></div>
        <div id="oauth"></div>
        <button class="btn btn-default" id="obtain-new-token">
          Obtain new token using the refresh token
        </button>
      </div>
    </div>
  );
};

export default Login;
