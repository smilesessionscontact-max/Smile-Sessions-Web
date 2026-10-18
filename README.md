# Smile Sessions

A music discovery site promoting uplifting, positive-message music. Static HTML, CSS and vanilla JavaScript, with no framework or build step.

## Pages

- `index.html` is the landing page.
- `discography.html` lists the playlists curated by Smile Sessions, with mood filters.
- `social.html` links to the Smile Sessions Instagram, Spotify, SoundCloud and YouTube pages.

## Adding or updating a playlist

Edit `js/playlists-data.js` only. Each playlist is one object in the `SMILE_SESSIONS_PLAYLISTS` list, and the Discography page builds its cards and filter chips from it. Each playlist has a `links` list, so you can add or remove Spotify, SoundCloud, YouTube or Apple Music buttons per playlist. Instructions are at the top of that file.

## Project structure

```
index.html
discography.html
social.html
css/style.css
js/main.js              shared nav and playlist rendering
js/playlists-data.js    playlist content (the file you edit)
smile-sessions-logo.png
```

## Running locally

Open `index.html` in a browser, or serve the folder with any static server, for example `python3 -m http.server`.

## Deploying

The site is hosted on Netlify. Drag the project folder (without `.git`) into Netlify Drop, or connect this repository to Netlify for automatic deploys on every push. No build command is needed, and the publish directory is the repository root.
