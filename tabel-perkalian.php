<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Tabel Perkalian & Kalkulator</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet" />
  <style>
    body {
    font-family: Arial, sans-serif;
    min-height: 100vh;
    padding-bottom: 50px;
    text-align: center;
    background-color: #f5f8ff;
    }

    .container {
    margin-top: 60px;
    max-width: 960px;
    }

    .header {
    text-align: center;
    margin-bottom: 40px;
    }

    .table thead th,
    .table tbody th {
    background-color: #9ebaf3; 
    color: #000; 
    text-align: center;
    }

    .table-bordered td,
    .table-bordered th {
    text-align: center;
    vertical-align: middle;
    }

   .highlight-cell {
   background-color: #b2c4f5 !important;
   color: #fff;
   font-weight: bold;
   }

   .calculator {
   background-color: #ffffff;
   border-radius: 15px;
   padding: 30px;
   box-shadow: 0 0 15px rgba(34, 139, 34, 0.1);
   transition: 0.3s;
   }

   .calculator:hover {
   transform: scale(1.02);
   }

   .result {
   font-weight: bold;
   font-size: 1.4rem;
   margin-top: 20px;
   color: black;
   }

   .calculator h4 {
   color: #000;
   }

   .btn-success {
   background: #9ebaf3;
   border: none;
   color: #fff;
   }

   .btn-success:hover {
   background-color: #6d97eb;
   color: #fff;
   }
  </style>
</head>
<body>
  <div class="container">
      <h2>Tabel Perkalian 10x10</h2>

    <div class="table-responsive">
      <table class="table table-bordered shadow-sm">
        <thead>
          <tr id="headerRow"></tr>
        </thead>
        <tbody id="tableBody"></tbody>
      </table>
    </div>

    <hr class="my-5" />

    <div class="calculator">
      <h4 class="mb-4">
        <i class="bi bi-calculator me-2"></i>Kalkulator Perkalian
      </h4>
      <form id="kalkulatorForm">
        <div class="row g-3 align-items-center">
          <div class="col-md-5">
            <input type="number" class="form-control" id="angka1" placeholder="Angka pertama" required />
          </div>
          <div class="col-md-2 text-center fs-4 fw-bold">×</div>
          <div class="col-md-5">
            <input type="number" class="form-control" id="angka2" placeholder="Angka kedua" required />
          </div>
        </div>
        <div class="text-center mt-4">
          <button type="submit" class="btn btn-success px-4">
            <i class="bi bi-check-circle me-1"></i> Hitung
          </button>
        </div>
      </form>
      <div id="hasil" class="result text-center"></div>
    </div>

  </div>

  <script>
  const headerRow = document.getElementById("headerRow");
  headerRow.innerHTML =
    "<th>x</th>" +
    Array.from({ length: 10 }, (_, i) => `<th>${i + 1}</th>`).join("");

  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = Array.from({ length: 10 }, (_, i) => {
    return (
      `<tr><th>${i + 1}</th>` +
      Array.from({ length: 10 }, (_, j) =>
        `<td onclick="highlightCell(this)">${(i + 1) * (j + 1)}</td>`
      ).join("") +
      "</tr>"
    );
  }).join("");

  function highlightCell(cell) {
    document.querySelectorAll("td").forEach(td =>
      td.classList.remove("highlight-cell")
    );
    cell.classList.add("highlight-cell");
  }
  document.getElementById("kalkulatorForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const a = parseFloat(document.getElementById("angka1").value);
    const b = parseFloat(document.getElementById("angka2").value);
    const hasil = a * b;
    document.getElementById("hasil").textContent = `${a} × ${b} = ${hasil}`;
  });
</script>

</body>
</html>
