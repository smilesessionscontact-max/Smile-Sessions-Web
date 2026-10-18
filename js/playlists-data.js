// ============================================================================
// Smile Sessions — Playlist References
//
// This is the ONLY file you need to edit to add, update, or remove a playlist
// from the Discography page. The page reads this list and builds the cards
// and mood filters automatically — no HTML editing required.
//
// TO ADD A PLAYLIST: copy one of the objects below, paste it into the array,
//   and fill in your own values.
// TO UPDATE A PLAYLIST: edit the fields on its object directly.
// TO REMOVE A PLAYLIST: delete its object from the array.
// TO ADD/REMOVE A LISTEN BUTTON: add or remove an entry from that playlist's
//   "links" array. Each playlist can have as many or as few as you want.
//
// Field guide:
//   title       — the playlist's name, shown as the card heading
//   moodKey     — a short internal id for the mood/category (no spaces).
//                 Reuse an existing moodKey to group playlists together,
//                 or invent a new one to create a brand-new filter automatically.
//   moodLabel   — the mood's display name, shown on the filter chip
//   moodEmoji   — a small emoji shown on the filter chip and the card
//   tagline     — a short line under the emoji, e.g. "For your main-character energy"
//   description — one or two sentences describing the playlist
//   links       — an array of listen buttons for this playlist, e.g.
//                 { platform: "Spotify", url: "https://open.spotify.com/..." }
//                 platform is shown as "Listen on {platform}" and also controls
//                 the icon. Recognized platforms: "Spotify", "SoundCloud",
//                 "YouTube", "Apple Music" — any other name still works, it
//                 just gets a generic music-note icon.
//                 Replace "#" placeholders with the real link once it's live.
// ============================================================================

const SMILE_SESSIONS_PLAYLISTS = [
  {
    title: "Daily Driver Vol.1",
    moodKey: "everyday",
    moodLabel: "Everyday Uplift",
    moodEmoji: "🌿",
    tagline: "For background listening",
    description: "Genre-spanning picks that make positivity the effortless default.",
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/playlist/7Mav3Mmol8PqALOzG0Qzg2?si=PYAgg_doQb-jzlrvCb2q5A" },
      { platform: "SoundCloud", url: "https://on.soundcloud.com/UGaRapJ09R1eaclKi4" },
      { platform: "YouTube", url: "https://youtu.be/sgJxHpd4250?si=uxdz2wFYsnTLNoyX" }
    ]
  },


  // {
  //   title: "Feel-Good Energy",
  //   moodKey: "feel-good",
  //   moodLabel: "Feel-Good Energy",
  //   moodEmoji: "⚡",
  //   tagline: "For your main-character energy",
  //   description: "Upbeat, modern, and made for your Stories — high energy with a good heart.",
  //   links: [
  //     { platform: "Spotify", url: "#" },
  //     { platform: "SoundCloud", url: "#" },
  //     { platform: "YouTube", url: "#" }
  //   ]
  // },
  // {
  //   title: "Everyday Uplift",
  //   moodKey: "everyday",
  //   moodLabel: "Everyday Uplift",
  //   moodEmoji: "🌤️",
  //   tagline: "For background listening",
  //   description: "Genre-spanning picks that make positivity the effortless default.",
  //   links: [
  //     { platform: "Spotify", url: "#" },
  //     { platform: "SoundCloud", url: "#" },
  //     { platform: "YouTube", url: "#" }
  //   ]
  // },
  // {
  //   title: "Motivation & Mindset",
  //   moodKey: "motivation",
  //   moodLabel: "Motivation & Mindset",
  //   moodEmoji: "🔥",
  //   tagline: "For getting your head right",
  //   description: "Empowerment anthems and grounded hip-hop/R&B for pushing forward.",
  //   links: [
  //     { platform: "Spotify", url: "#" },
  //     { platform: "SoundCloud", url: "#" },
  //     { platform: "YouTube", url: "#" }
  //   ]
  // },
  // {
  //   title: "Chill Positivity",
  //   moodKey: "chill",
  //   moodLabel: "Chill Positivity",
  //   moodEmoji: "🌿",
  //   tagline: "For slowing down",
  //   description: "Calm, grounding, acoustic-leaning tracks for when you need to exhale.",
  //   links: [
  //     { platform: "Spotify", url: "#" },
  //     { platform: "SoundCloud", url: "#" },
  //     { platform: "YouTube", url: "#" }
  //   ]
  // },
];
