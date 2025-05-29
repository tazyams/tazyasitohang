setTimeout(function () {
    document.getElementById("welcomePopup").style.display = "none";
  }, 3000);

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

function updateCountdown() {
    let eventDate = new Date("April 20, 2025 10:00:00").getTime();
    let now = new Date().getTime();
    let timeLeft = eventDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Acara Sedang Berlangsung!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

let events = [
    { name: "Pameran Buku Nasional", date: "2025-04-20", location: "Jakarta Convention Center" },
    { name: "Festival Literasi", date: "2025-05-15", location: "Perpustakaan Nasional" },
    { name: "Bursa Buku Murah", date: "2025-03-10", location: "Mall Kota Medan" } // Event yang sudah berlalu
];

function formatDate(dateStr) {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString("id-ID", options);
}

function loadEvents() {
    let upcomingList = document.getElementById("upcomingEvents");
    let pastList = document.getElementById("pastEvents");
    upcomingList.innerHTML = "";
    pastList.innerHTML = "";

    let today = new Date();

    events.forEach(event => {
        let eventDate = new Date(event.date);
        let row = `<tr><td>${event.name}</td><td>${formatDate(event.date)}</td><td>${event.location}</td></tr>`;

        if (eventDate >= today) {
            upcomingList.innerHTML += row;
        } else {
            pastList.innerHTML += row;
        }
    });
}

loadEvents();

function registerEvent() {
    let name = document.getElementById("name").value;
    if (name.trim() !== "") {
        document.getElementById("confirmation").innerHTML = `Terima kasih, ${name}! Anda telah terdaftar.`;
    } else {
        document.getElementById("confirmation").innerHTML = "Mohon isi nama Anda.";
    }
}

function toggleDropdown(event) {
    event.preventDefault(); // Hindari link langsung redirect
    const dropdown = event.target.closest('.dropdown');
    dropdown.classList.toggle('open');
  }

  // Opsional: Tutup dropdown saat klik di luar
  window.addEventListener('click', function(e) {
    document.querySelectorAll('.dropdown').forEach(function(drop) {
      if (!drop.contains(e.target)) {
        drop.classList.remove('open');
      }
    });
  });
