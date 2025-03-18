document.addEventListener("DOMContentLoaded", function () {
    alert("Selamat datang di Perpustakaan Digital Saya!");
});

function ubahTeks() {
    let pesan = document.getElementById("pesan");
    pesan.innerHTML = "Teks telah berubah!";
    pesan.style.color = "blue";
    pesan.style.transition = "color 0.5s ease-in-out";
}

const searchInput = document.querySelector('input[type="text"]');
const bukuElements = document.querySelectorAll('.buku');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  bukuElements.forEach(buku => {
    const title = buku.querySelector('h2').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      buku.style.display = '';
    } else {
      buku.style.display = 'none';
    }
  });
});

const bookList = document.getElementById('bookList');

function addBook(title, author, description, imageUrl) {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'buku';
    
    bookDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${author}</p>
        <img src="${imageUrl}" alt="${title}" style="width:100px;height:auto;">
        <p>${description}</p>
        <button class="baca-sekarang">Baca Sekarang</button>
    `;

    bookList.appendChild(bookDiv);
}

addBook("Atomic Habits", "James Clear", "Buku ini mengupas cara-cara untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk melalui perubahan kecil yang konsisten. James Clear menjelaskan bahwa kebiasaan adalah fondasi dari perubahan yang signifikan dalam hidup. Melalui pendekatan yang berbasis pada ilmu psikologi dan neuroscience, Clear memperkenalkan The Four Laws of Behavior Change yang membantu pembaca membentuk pola hidup yang lebih produktif. Dengan memberikan contoh dari berbagai tokoh sukses, buku ini menjadi panduan praktis bagi siapa saja yang ingin meningkatkan kualitas hidup melalui kebiasaan yang positif.", "https://www.gramedia.com/blog/content/images/2021/07/1--2--1.jpg");
addBook("Filosofi Teras", "Henry Manampiring", "Dalam buku ini, Henry Manampiring membahas filosofi Stoisisme yang mengajarkan pentingnya fokus pada hal-hal yang dapat kita kendalikan. Dengan menyajikan prinsip-prinsip seperti pengendalian emosi dan penerimaan terhadap keadaan, pembaca diajak untuk lebih rasional dan tenang dalam menghadapi tantangan hidup. Ditulis dengan gaya ringkas dan disertai contoh kehidupan sehari-hari, "Filosofi Teras" cocok untuk siapa saja yang ingin menjalani hidup lebih damai, bebas dari kecemasan berlebihan, dan lebih fokus pada hal-hal yang benar-benar penting.", "https://s3-ap-southeast-1.amazonaws.com/ebook-previews/45496/168985/1.jpg");

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
