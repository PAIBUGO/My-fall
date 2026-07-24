<script>
    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicButton");

    let isPlaying = false;

    musicButton.addEventListener("click", () => {
        if (isPlaying) {
            music.pause();
            musicButton.innerHTML = "🎵 Música";
            musicButton.classList.remove("playing");
        } else {
            music.play();
            musicButton.innerHTML = "🔊 Música";
            musicButton.classList.add("playing");
        }

        isPlaying = !isPlaying;
    });
</script>
