const form = document.getElementById("uploadForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const genre = document.getElementById("genre").value;
    const song = document.getElementById("file").files[0];
    const thumbnail = document.getElementById("thumbnail").files[0];

    console.log(title, artist, genre);

    console.log(song, thumbnail);
})