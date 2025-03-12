document.addEventListener("DOMContentLoaded", function () {
    alert("Selamat datang di Perpustakaan Digital Saya!");
});

function ubahTeks() {
    let pesan = document.getElementById("pesan");
    pesan.innerHTML = "Teks telah berubah!";
    pesan.style.color = "blue";
    pesan.style.transition = "color 0.5s ease-in-out";
}

function tambahKomentar() {
    let inputKomentar = document.getElementById("inputKomentar").value;
    let daftarKomentar = document.getElementById("daftarKomentar");

    if (inputKomentar.trim() !== "") {
        let komentarBaru = document.createElement("li");
        komentarBaru.textContent = inputKomentar;
        komentarBaru.classList.add("fade-in"); // Animasi masuk

        daftarKomentar.appendChild(komentarBaru);
        document.getElementById("inputKomentar").value = ""; // Reset input
    } else {
        alert("Silakan tulis komentar terlebih dahulu!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let tombol = document.getElementById("animasiBtn");
    tombol.addEventListener("mouseover", function () {
        tombol.style.transform = "scale(1.1)";
        tombol.style.transition = "transform 0.3s ease";
    });
    tombol.addEventListener("mouseout", function () {
        tombol.style.transform = "scale(1)";
    });
});
