const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

// Ketika hamburger menu diklik, toggle class 'slide' pada menu
menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

// Menambahkan event listener pada setiap item menu untuk menutup menu setelah dipilih
const menuItems = document.querySelectorAll('nav ul li a');
const menuList = document.querySelector('nav ul');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Menghapus class 'slide' agar menu tersembunyi
        menuList.classList.remove('slide');
        // Mengatur kembali checkbox agar tidak tercentang (hamburger kembali ke tiga garis)
        menuToggle.checked = false;
    });
});

  