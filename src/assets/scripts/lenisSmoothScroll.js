import "@styles/lenis.css";

import Lenis from "lenis";

// Script to handle Lenis library settings for smooth scrolling
// https://github.com/darkroomengineering/lenis
const lenis = new Lenis({
    autoRaf: true,
    // Pastikan Anda memanggil RAF (Request Animation Frame) agar Lenis terus berjalan
    // (Walaupun autoRaf: true, beberapa browser memerlukan ini)
});

// Fungsi untuk animasi frame
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Mencegah perilaku default HTML (lompatan instan)
        e.preventDefault(); 
        
        // Mengambil ID target (misalnya '#pricing')
        const targetId = this.getAttribute('href'); 

        // Menggunakan Lenis untuk melakukan smooth scroll ke target ID
        if (lenis) {
            lenis.scrollTo(targetId, {
                // Opsi tambahan Lenis:
                duration: 1.5, // Durasi scroll (bisa disesuaikan)
                offset: -60 // Tambahkan ini jika navbar Anda fixed dan setinggi 60px
            });
        }
    });
});