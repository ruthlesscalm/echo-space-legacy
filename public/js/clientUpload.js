import { uploadFiles } from "https://cdn.uploadthing.com/client";

console.log("clientUpload.js loaded");

const form = document.getElementById("uploadForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const artist = document.getElementById("artist").value;
  const genre = document.getElementById("genre").value;

  const song = document.getElementById("file").files[0];
  const thumbnail = document.getElementById("thumbnail").files[0];

  console.log("Form data:", { title, artist, genre });
  console.log("Files:", song, thumbnail);

  console.log("Starting upload...");

  const result = await uploadFiles({
    files: [song, thumbnail],
    endpoint: "songUploader",
  });

  console.log("UPLOAD RESULT:", result);
});
