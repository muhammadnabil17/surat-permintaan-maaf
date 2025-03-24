function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Ganti dengan username dan password yang kamu inginkan
    var correctUsername = "bubub dira";
    var correctPassword = "nabilanddira";

    if (username === correctUsername && password === correctPassword) {
        // Tampilkan surat setelah login berhasil
        document.getElementById('loginBox').style.display = 'none';
        document.getElementById('letterBox').style.display = 'block';
    } else {
        // Tampilkan pesan error jika login gagal
        document.getElementById('errorMessage').style.display = 'block';
    }
}
