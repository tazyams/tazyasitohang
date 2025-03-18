document.addEventListener("DOMContentLoaded", function () {
    alert("Selamat datang di Perpustakaan Digital Saya!");
});

function ubahTeks() {
    let pesan = document.getElementById("pesan");
    pesan.innerHTML = "Teks telah berubah!";
    pesan.style.color = "blue";
    pesan.style.transition = "color 0.5s ease-in-out";
}

function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function explore() {
    closePopup();
}

window.onload = showPopup;

const searchInput = document.querySelector('input[type="text"]');
const bukuElements = document.querySelectorAll('.buku');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  bukuElements.forEach(buku => {
    const title = buku.querySelector('h3').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      buku.style.display = '';
    } else {
      buku.style.display = 'none';
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
    tampilkanKomentar();
});

function tambahKomentar() {
    let inputKomentar = document.getElementById("inputKomentar").value.trim();
    if (inputKomentar === "") {
        alert("Silakan tulis komentar terlebih dahulu!");
        return;
    }

    let komentarBaru = { id: Date.now(), text: inputKomentar };
    let komentarList = JSON.parse(localStorage.getItem("komentarList")) || [];
    komentarList.push(komentarBaru);
    localStorage.setItem("komentarList", JSON.stringify(komentarList));

    renderKomentar(komentarBaru);
    document.getElementById("inputKomentar").value = ""; 
}

function tampilkanKomentar() {
    let komentarList = JSON.parse(localStorage.getItem("komentarList")) || [];
    komentarList.forEach(renderKomentar);
}

function renderKomentar(komentar) {
    let daftarKomentar = document.getElementById("daftarKomentar");
    let komentarItem = document.createElement("li");
    komentarItem.classList.add("fade-in");
    komentarItem.setAttribute("data-id", komentar.id);

    let teksKomentar = document.createElement("span");
    teksKomentar.textContent = komentar.text;

    let tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";
    tombolHapus.classList.add("hapus-btn");
    tombolHapus.onclick = function () {
        hapusKomentar(komentar.id, komentarItem);
    };

    komentarItem.appendChild(teksKomentar);
    komentarItem.appendChild(tombolHapus);
    daftarKomentar.appendChild(komentarItem);
}

function hapusKomentar(id, element) {
    let komentarList = JSON.parse(localStorage.getItem("komentarList")) || [];
    let komentarBaru = komentarList.filter((komentar) => komentar.id !== id);
    localStorage.setItem("komentarList", JSON.stringify(komentarBaru));

    element.classList.add("fade-out");
    setTimeout(() => {
        element.remove();
    }, 500);
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
