document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-toggle");

    // Fungsi menghidupkan/mematikan musik
    musicBtn.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            music.volume = 0.4; // Atur volume 40% agar pas di telinga
            musicBtn.classList.add("playing");
        } else {
            music.pause();
            musicBtn.classList.remove("playing");
        }
    });

    // Otomatis putar musik saat user menyentuh layar pertama kali (syarat kebijakan browser HP)
    document.body.addEventListener("touchstart", function() {
        if (music.paused && !musicBtn.classList.contains("played-once")) {
            music.play();
            music.volume = 0.4;
            musicBtn.classList.add("playing");
            musicBtn.classList.add("played-once"); // Menghindari keputar ulang tidak sengaja
        }
    }, { once: true }); // Hanya berjalan sekali sentuh saja
});