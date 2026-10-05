const characterImg = document.getElementById('characterImg');
        
// Simpan referensi ke folder aset Anda
const imagePaths = {
    'center': 'asset/image/char-center.png',
    'up-left': 'asset/image/char-up-left.png',
    'up': 'asset/image/char-up.png',
    'up-right': 'asset/image/char-up-right.png',
    'left': 'asset/image/char-left.png',
    'right': 'asset/image/char-right.png',
    'down-left': 'asset/image/char-down-left.png',
    'down': 'asset/image/char-down.png',
    'down-right': 'asset/image/char-down-right.png'
};

// Preload gambar agar tidak berkedip saat transisi pertama kali
Object.values(imagePaths).forEach(src => {
    const img = new Image();
    img.src = src;
});

document.addEventListener("mousemove", (e) => {
    const rect = characterImg.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    // Area "tengah" sebelum gambar berubah
    const thresholdX = 150; 
    const thresholdY = 150;

    let dirX = 'center';
    if (deltaX > thresholdX) dirX = 'right';
    else if (deltaX < -thresholdX) dirX = 'left';

    let dirY = 'center';
    if (deltaY > thresholdY) dirY = 'down';
    else if (deltaY < -thresholdY) dirY = 'up';

    let state;
    if (dirX === 'center' && dirY === 'center') {
        state = 'center';
    } else if (dirX === 'center') {
        state = dirY;
    } else if (dirY === 'center') {
        state = dirX;
    } else {
        state = `${dirY}-${dirX}`;
    }

    // Fallback: Jika Anda hanya memiliki 4 gambar (Atas, Bawah, Kiri, Kanan),
    // Anda bisa menyesuaikan kondisi ini. Untuk sekarang, ini mengambil gambar sesuai arah.
    if (imagePaths[state]) {
        // Hanya update jika sourcenya berbeda untuk menghindari re-render yang tidak perlu
        if (!characterImg.src.includes(imagePaths[state])) {
            characterImg.src = imagePaths[state];
        }
    }
});

// Ornamen Matrix Angka
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const nums = '0123456789';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    // Latar semi transparan putih untuk membuat efek trail/ekor yang menghilang
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Warna font matrix menggunakan warna hijau tosca khas tema website
    ctx.fillStyle = '#a6c0bb';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const text = nums.charAt(Math.floor(Math.random() * nums.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
// Logika Lanyard Drag (Mouse & Touch - 4 Arah & Smooth)
const lanyard = document.getElementById('draggableLanyard');

if (lanyard) {
    let isDragging = false;
    let startX = 0, startY = 0;
    let currentX = 0, currentY = 0;
    let previousX = 0;
    
    function startDrag(clientX, clientY) {
        isDragging = true;
        // Hitung offset titik klik agar gambar tidak loncat
        startX = clientX - currentX;
        startY = clientY - currentY;
        previousX = clientX;
        
        // Transisi pendek agar tidak kaku tapi tidak terlalu lambat saat mengikuti kursor
        lanyard.style.transition = 'transform 0.1s ease-out'; 
    }

    function onDrag(clientX, clientY) {
        if (!isDragging) return;
        
        currentX = clientX - startX;
        currentY = clientY - startY;
        
        // Rotasi berdasarkan kecepatan gesekan mouse (seberapa jauh kursor berpindah)
        const velocityX = clientX - previousX;
        previousX = clientX;
        
        let rotation = velocityX * 0.8; 
        if (rotation > 45) rotation = 45;
        if (rotation < -45) rotation = -45;

        // Terapkan translasi X, Y, dan rotasi
        lanyard.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rotation}deg)`;
    }

    function endDrag() {
        if (isDragging) {
            isDragging = false;
            // Efek ayun pendulum elastis saat dilepas
            lanyard.style.transition = 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
            // Kembalikan rotasi ke 0 (lurus), tapi biarkan posisinya tetap di tempat terakhir
            lanyard.style.transform = `translate(${currentX}px, ${currentY}px) rotate(0deg)`;
        }
    }

    // --- Mouse Events ---
    lanyard.addEventListener('mousedown', (e) => {
        e.preventDefault(); // Sangat penting: mencegah browser melakukan 'ghost drag' pada gambar
        startDrag(e.clientX, e.clientY);
    });
    document.addEventListener('mousemove', (e) => onDrag(e.clientX, e.clientY));
    document.addEventListener('mouseup', endDrag);
    
    // --- Touch Events (HP) ---
    lanyard.addEventListener('touchstart', (e) => {
        // e.preventDefault(); // Hindari preventDefault di sini agar layar tetap bisa di-scroll jika diperlukan
        startDrag(e.touches[0].clientX, e.touches[0].clientY);
    });
    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            onDrag(e.touches[0].clientX, e.touches[0].clientY);
        }
    });
    document.addEventListener('touchend', endDrag);
}
// Logika untuk Update Active Navigation Menu saat Scroll dan Typing Animation
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

const typingText = document.getElementById('typing-text');
const textToType = "Hi, I'm Calandra Alencia Haryani";
let hasTyped = false;

function typeWriter() {
    if (hasTyped || !typingText) return;
    hasTyped = true; // Hanya dijalankan sekali
    typingText.innerHTML = '';
    let i = 0;
    typingText.classList.add('typing-cursor');
    
    function type() {
        if (i < textToType.length) {
            typingText.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(type, 80);
        }
        // Cursor will keep blinking indefinitely since we no longer remove 'typing-cursor'
    }
    type();
}

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navItems.forEach(item => item.classList.remove('active'));
            const activeId = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`.nav-item[href="#${activeId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            // Trigger animasi ketik saat section about terlihat
            if (activeId === 'about') {
                typeWriter();
            }
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Logika Popup Modal untuk Gambar Project
const modal = document.getElementById('imageModal');
const modalContent = document.getElementById('modalImageContainer');
const closeModal = document.querySelector('.modal-close');

document.querySelectorAll('.card-img-placeholder').forEach(placeholder => {
    placeholder.addEventListener('click', () => {
        modalContent.innerHTML = placeholder.innerHTML; 
        modal.classList.add('show');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});
