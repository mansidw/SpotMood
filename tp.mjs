// var SpotifyWebApi = require("spotify-web-api-js");
// var spotifyApi = new SpotifyWebApi();
// spotifyApi.setAccessToken(
//   "BQBQB55j71lnoRq7T0zqbBdcEiVN47PQyNqtw_msIvLEe2IiNKTY6rk6fesWcHYbYFExZryXP-kKGTrSCazSvD-_DgX1AS5rjgiY8toqUUDA3sIKpRAbH6GAbm9pNVmXH8NAivRokREdJmG5pBX69qZrIqXU7ulQjGlz5JOyZRJ_a9_jI_HzxwvSjqDypkmP49g9xNCHf1sUa003qWHrobuZMaeUML__0bNDvA"
// );
// // spotifyApi.setPromiseImplementation();
// spotifyApi.getMe(function (data) {
//   console.log('Search by "Love"', data);
// });

// {
//     "access_token": "BQBQB55j71lnoRq7T0zqbBdcEiVN47PQyNqtw_msIvLEe2IiNKTY6rk6fesWcHYbYFExZryXP-kKGTrSCazSvD-_DgX1AS5rjgiY8toqUUDA3sIKpRAbH6GAbm9pNVmXH8NAivRokREdJmG5pBX69qZrIqXU7ulQjGlz5JOyZRJ_a9_jI_HzxwvSjqDypkmP49g9xNCHf1sUa003qWHrobuZMaeUML__0bNDvA",
//     "token_type": "Bearer",
//     "expires_in": 3600,
//     "refresh_token": "AQDObKZQgpoB9frli07l4qU68go_8T3wdHui7K0LuAiZzPCfFn7ATATCPh94F48KsHFXEaz-sxKVCf0Tfm9h4kk5tKhdbPjnTJfmRXdF8SBNEvY-8dXP2ctNxQqBGGjfDi0",
//     "scope": "playlist-modify-public"
// }

// curl -H "Authorization: Basic b7e53ca3a4d44fd199e939100eda1144" -d grant_type=authorization_code -d code=AQBKueeayH29AIASIksaOqZ1_pWDnIzrO1lUCdy6KMyGvzMV3nf2MmiZ6QyqSWtkAS8Fw6b1sZL4Tpo2V-oRkJr_m1csS4AwDZu5WYRij_0OWJWDnaBI9sEfcwlz8_rBEs7y2wdYACNMFNEH8IHG_2IRe7JaafygxYKLbz0_TD5ClTtQK5iYmJb9anSHHODstnM -d redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F https://accounts.spotify.com/api/token

// Take care
// wait until all the tabs have loaded

import { searchMusics } from "node-youtube-music";
// const { searchMusics } = require("node-youtube-music");

async function getMusic() {
  const musics = await searchMusics("Never gonna give you up");
  console.log(musics);
}

getMusic();
