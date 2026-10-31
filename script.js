// ambil elemen dari html
const inputBerat = document.getElementById("berat");
const inputTinggi = document.getElementById("tinggi");
const pesanError = document.getElementById("error");
const kotakHasil = document.getElementById("hasil");
const teksKategori = document.getElementById("kategori");

function hitungBmi() {
  const berat = Number(inputBerat.value);
  const tinggiCm = Number(inputTinggi.value);

  // cek input dulu
  if (inputBerat.value === "" || inputTinggi.value === "") {
    pesanError.textContent = "Berat dan tinggi badan harus diisi ya.";
    kotakHasil.classList.add("sembunyi");
    return;
  }

  if (berat <= 0 || tinggiCm <= 0) {
    pesanError.textContent = "Angkanya harus lebih dari 0.";
    kotakHasil.classList.add("sembunyi");
    return;
  }

  pesanError.textContent = "";

  // rumus BMI = berat (kg) / tinggi (m) kuadrat
  const tinggiM = tinggiCm / 100;
  const bmi = berat / (tinggiM * tinggiM);

  // tentukan kategori (standar WHO)
  let kategori = "";
  let kelas = "";
  let saran = "";

  if (bmi < 18.5) {
    kategori = "Kurus";
    kelas = "kurus";
    saran = "Berat badanmu di bawah normal. Coba atur pola makan yang lebih bergizi.";
  } else if (bmi < 25) {
    kategori = "Normal";
    kelas = "normal";
    saran = "Mantap, berat badanmu ideal. Pertahankan pola hidup sehat ya.";
  } else if (bmi < 30) {
    kategori = "Berlebih";
    kelas = "lebih";
    saran = "Berat badanmu agak di atas normal. Olahraga rutin bisa membantu.";
  } else {
    kategori = "Obesitas";
    kelas = "obes";
    saran = "BMI-mu sudah cukup tinggi. Sebaiknya konsultasi ke dokter atau ahli gizi.";
  }

  // tampilkan hasil
  document.getElementById("angkaBmi").textContent = bmi.toFixed(1);
  teksKategori.textContent = kategori;
  teksKategori.className = "kategori " + kelas;
  document.getElementById("saran").textContent = saran;

  // geser penanda di bar (skala bar dari BMI 0 sampai 40)
  let posisi = (bmi / 40) * 100;
  if (posisi > 100) {
    posisi = 100;
  }
  document.getElementById("penanda").style.left = posisi + "%";

  kotakHasil.classList.remove("sembunyi");
}

function resetForm() {
  inputBerat.value = "";
  inputTinggi.value = "";
  pesanError.textContent = "";
  kotakHasil.classList.add("sembunyi");
}

// pasang ke tombol
document.getElementById("btnHitung").addEventListener("click", hitungBmi);
document.getElementById("btnReset").addEventListener("click", resetForm);