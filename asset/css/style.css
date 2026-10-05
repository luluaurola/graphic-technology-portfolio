:root {
    --bg-color: #ffffff;
    --sidebar-bg: #c9ded9;
    --text-dark: #3c4b48;
    --text-light: #5d7570;
    --active-bg: #f5f1e7;
    --premium-bg: #f9d8c8;
    --btn-bg: #f29688;
    --card-bg: #e0ece9;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-color);
    display: flex;
    min-height: 100vh;
}

header {
    width: 260px;
    flex-shrink: 0;
    padding: 30px 20px;
    margin: 20px;
    background-color: var(--sidebar-bg);
    border-radius: 40px;
    box-shadow: 
        -8px -8px 20px rgba(255, 255, 255, 0.7),
        8px 8px 20px rgba(166, 192, 187, 0.6),
        inset 2px 2px 5px rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    top: 20px;
    height: calc(100vh - 40px);
    overflow-y: auto;
    transition: all 0.4s ease;
}

.profile {
    text-align: center;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.avatar {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #e0ece9;
    margin-bottom: 15px;
    box-shadow: 
        -5px -5px 10px rgba(255,255,255,0.6),
        5px 5px 10px rgba(166, 192, 187, 0.5),
        inset 2px 2px 5px rgba(255, 255, 255, 0.3);
    border: 4px solid #d4e5e1;
    object-fit: cover;
}

.profile h2 {
    color: var(--text-dark);
    font-size: 1.2rem;
    font-weight: 800;
}

nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex-grow: 1;
}

.nav-item {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border-radius: 20px;
    color: var(--text-light);
    text-decoration: none;
    font-weight: 700;
    transition: all 0.3s ease;
    white-space: nowrap;
    overflow: hidden;
}

.nav-item i {
    font-size: 1.2rem;
    width: 25px;
    margin-right: 15px;
    color: #4b6761;
    text-shadow: 
        1px 1px 2px rgba(255, 255, 255, 0.6),
        -1px -1px 2px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
}

.nav-item.active {
    background-color: var(--active-bg);
    color: var(--text-dark);
    box-shadow: 
        -5px -5px 12px rgba(255, 255, 255, 0.7),
        5px 5px 12px rgba(166, 192, 187, 0.5),
        inset 1px 1px 2px rgba(255, 255, 255, 0.8);
}

.nav-item:hover:not(.active) {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

.nav-item.active i {
    color: #38554f;
}

.premium-card {
    background-color: var(--premium-bg);
    padding: 25px 20px;
    border-radius: 30px;
    text-align: center;
    margin-top: 30px;
    box-shadow: 
        -6px -6px 15px rgba(255, 255, 255, 0.6),
        6px 6px 15px rgba(166, 192, 187, 0.6),
        inset 2px 2px 5px rgba(255, 255, 255, 0.4);
    width: 100%;
}

.crown-icon {
    font-size: 3rem;
    color: #f6a935;
    margin-bottom: 10px;
    filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.15)) drop-shadow(-2px -2px 4px rgba(255,255,255,0.6));
}

.premium-card h3 {
    color: var(--text-dark);
    font-size: 1.1rem;
    margin-bottom: 8px;
    font-weight: 800;
}

.premium-card p {
    color: var(--text-light);
    font-size: 0.8rem;
    margin-bottom: 20px;
    line-height: 1.4;
    font-weight: 600;
}

.btn-upgrade {
    background-color: var(--btn-bg);
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 18px;
    font-weight: 800;
    font-size: 0.9rem;
    cursor: pointer;
    box-shadow: 
        -4px -4px 10px rgba(255, 255, 255, 0.5),
        4px 4px 10px rgba(215, 120, 110, 0.4),
        inset 2px 2px 4px rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
}

.btn-upgrade:hover {
    transform: translateY(-2px);
    box-shadow: 
        -5px -5px 12px rgba(255, 255, 255, 0.6),
        5px 5px 12px rgba(215, 120, 110, 0.5);
}

.btn-upgrade:active {
    transform: translateY(1px);
    box-shadow: 
        inset 3px 3px 6px rgba(0, 0, 0, 0.1),
        inset -3px -3px 6px rgba(255, 255, 255, 0.4);
}

main {
    flex-grow: 1;
    padding: 40px;
}

/* Home Section Styles */
#home {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

#matrixCanvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0; /* Berada paling belakang */
    pointer-events: none; /* Agar tidak menghalangi interaksi mouse */
    opacity: 0.15; /* Agar tampilannya subtle/samar dan elegan */
}

.portfolio-hero {
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.portfolio-title.bubble-text {
    font-family: 'Montserrat', sans-serif;
    font-size: 5rem;
    font-weight: 900;
    color: var(--text-dark);
    background-color: var(--sidebar-bg);
    padding: 20px 80px;
    border-radius: 100px;
    position: absolute;
    bottom: 15%;
    left: 0;
    right: 0;
    margin: auto;
    width: fit-content;
    z-index: 3; /* Lebih tinggi dari z-index: 2 milik karakter */
    white-space: nowrap;
    box-shadow: 
        10px 10px 30px rgba(166, 192, 187, 0.4),
        -10px -10px 30px rgba(255, 255, 255, 0.8),
        inset 2px 2px 5px rgba(255, 255, 255, 0.5);
    animation: floatDynamic 8s ease-in-out infinite;
}

@keyframes floatDynamic {
    0% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(-30px, -15px) rotate(-2deg); }
    50% { transform: translate(20px, 20px) rotate(1deg); }
    75% { transform: translate(30px, -10px) rotate(2deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
}

.portfolio-title span {
    position: relative;
}

.year {
    font-size: 2.5rem;
    color: var(--text-light);
    margin-left: 10px;
}

.character-wrapper {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
    height: 100%; /* Full screen mengambil seluruh tinggi #home */
}

.character-img {
    height: 100%;
    width: auto;
    object-fit: contain;
    object-position: bottom;
    /* Menghilangkan background putih dari gambar asli */
    mix-blend-mode: multiply;
}


/* (Media queries moved to the bottom of the file) */

/* About Section Styles */
#about {
    width: 100%;
    min-height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    padding: 0;
}

.about-container {
    display: flex;
    max-width: 100%;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    position: relative;
}

.lanyard-container {
    width: 600px;
    position: absolute;
    left: -50px;
    top: 0;
    z-index: 999;
}

.lanyard-img {
    width: 100%;
    height: auto;
    cursor: grab;
    transform-origin: top center;
    mix-blend-mode: multiply;
}

.lanyard-img:active {
    cursor: grabbing;
}

.about-content {
    flex-grow: 1;
    padding-top: 30px;
    padding-right: 20px;
    padding-left: 100px;
}

.about-header {
    margin-bottom: 30px;
}

.about-header h2 {
    font-size: 3rem;
    color: var(--text-dark);
    margin-bottom: 10px;
    font-weight: 800;
}

.header-hr {
    border: none;
    border-top: 1.5px solid var(--text-dark);
    margin: 10px 0;
}

.header-hr-short {
    border: none;
    border-top: 1.5px solid var(--text-dark);
    margin: 10px 0;
    width: 60%;
}

.about-header p {
    color: var(--text-dark);
    margin: 20px 0;
    font-size: 1.2rem;
    line-height: 1.6;
    font-weight: 600;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 40px;
}

.grid-column {
    display: flex;
    flex-direction: column;
}

/* Removed right borders since it's 1 column now */

.grid-column h3 {
    font-size: 1.2rem;
    color: var(--text-dark);
    font-weight: 700;
    margin-bottom: 15px;
    text-transform: uppercase;
}

.col-hr {
    border: none;
    border-top: 1.5px solid var(--text-dark);
    margin: 5px 0;
}

.experience-list {
    list-style: none;
    padding: 0;
}

.experience-list li {
    padding: 15px 0;
    color: var(--text-dark);
    font-size: 1.1rem;
    font-weight: 600;
}

.contact-icons {
    display: grid;
    grid-template-columns: repeat(2, 45px);
    gap: 10px;
    margin: 10px 0 20px 0;
}

.icon-box, .tool-box {
    background-color: #8da49f;
    color: white;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    text-decoration: none;
    font-size: 1.5rem;
    transition: all 0.3s ease;
}

.icon-box i, .tool-box i {
    color: white;
}

.icon-box:hover, .tool-box:hover {
    transform: translateY(-2px);
    background-color: var(--text-dark);
}

.tools-icons {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

#project, #blog, #contact {
    min-height: 100vh;
}

.typing-cursor::after {
    content: '|';
    animation: blink 1s step-end infinite;
}

@keyframes blink {
    50% { opacity: 0; }
}

#project {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 40px;
    width: 100%;
}

.project-header {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 50px;
    justify-content: center;
}

.project-header h2 {
    font-size: 3rem;
    font-weight: 800;
    color: var(--text-dark);
    margin: 0 20px;
    letter-spacing: 2px;
}

.header-line {
    flex-grow: 1;
    height: 2px;
    background-color: var(--text-dark);
    border: none;
    max-width: 300px;
}

.slider-container {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
}

.slider-wrapper {
    display: flex;
    gap: 40px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    padding: 20px;
    width: 100%;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.slider-wrapper::-webkit-scrollbar {
    display: none;
}

.project-card {
    flex: 0 0 calc((100% - 80px) / 3); /* Menampilkan tepat 3 kartu */
    background: var(--card-bg);
    border-radius: 30px;
    box-shadow: 
        8px 8px 16px rgba(166, 192, 187, 0.6),
        -8px -8px 16px rgba(255, 255, 255, 0.7),
        inset 2px 2px 5px rgba(255, 255, 255, 0.4),
        inset -2px -2px 5px rgba(166, 192, 187, 0.2);
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-snap-align: center;
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-10px);
}

.card-number {
    font-size: 3rem;
    font-weight: 900;
    color: var(--text-dark);
    opacity: 0.3;
    align-self: flex-start;
    margin-bottom: 20px;
}

.project-card h3 {
    font-size: 1.8rem;
    color: var(--text-dark);
    font-weight: 800;
}

.slider-btn {
    background: var(--card-bg);
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: var(--text-dark);
    cursor: pointer;
    box-shadow: 
        5px 5px 10px rgba(166, 192, 187, 0.6),
        -5px -5px 10px rgba(255, 255, 255, 0.7);
    transition: all 0.2s ease;
    z-index: 10;
    flex-shrink: 0;
}

.slider-btn:hover {
    box-shadow: 
        inset 3px 3px 6px rgba(166, 192, 187, 0.6),
        inset -3px -3px 6px rgba(255, 255, 255, 0.7);
}

.prev-btn {
    margin-right: -20px;
}

.next-btn {
    margin-left: -20px;
}

.card-img-placeholder {
    width: 100%;
    height: 250px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-dark);
    box-shadow: inset 4px 4px 8px rgba(166, 192, 187, 0.5), inset -4px -4px 8px rgba(255, 255, 255, 0.8);
    cursor: pointer;
    transition: transform 0.2s ease;
}

.card-img-placeholder:hover {
    transform: scale(1.05);
}

.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    justify-content: center;
    align-items: center;
}

.modal.show {
    display: flex;
}

.modal-content {
    background: var(--card-bg);
    padding: 80px;
    border-radius: 30px;
    box-shadow: 
        10px 10px 30px rgba(0, 0, 0, 0.5),
        inset 2px 2px 5px rgba(255, 255, 255, 0.2);
    color: var(--text-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    max-height: 80%;
}

.modal-content i {
    font-size: 15rem !important;
}

.modal-content img {
    max-width: 100%;
    max-height: 70vh;
    border-radius: 20px;
}

.modal-close {
    position: absolute;
    top: 30px;
    right: 50px;
    color: white;
    font-size: 5rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    line-height: 1;
}

.modal-close:hover {
    color: #ddd;
    transform: scale(1.1);
}

/* Contact CTA Section */
#contact {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.cta-envelope-wrapper {
    position: relative;
    width: 700px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 50px 0;
    cursor: pointer;
    /* Claymorphism shadow applied to the compound shape using drop-shadow */
    filter: drop-shadow(15px 15px 20px rgba(166, 192, 187, 0.6)) drop-shadow(-10px -10px 20px rgba(255, 255, 255, 0.8));
}

.cta-envelope-back {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 350px;
    background: var(--sidebar-bg);
    border-radius: 30px;
    z-index: 0;
    /* This creates the open flap pointing up */
    clip-path: polygon(0 30%, 50% 0, 100% 30%, 100% 100%, 0 100%);
}

.cta-pocket {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 250px;
    background: var(--card-bg);
    border-radius: 0 0 30px 30px;
    z-index: 2;
    /* This creates the V-cut in the front of the envelope */
    clip-path: polygon(0 0, 50% 30%, 100% 0, 100% 100%, 0 100%);
}

.cta-letter {
    position: absolute;
    bottom: 20px;
    width: 85%;
    height: 360px;
    background: white;
    border-radius: 10px;
    padding: 40px 50px;
    text-align: center;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cta-envelope-wrapper:hover .cta-letter {
    transform: translateY(-90px);
}

.cta-letter h2 {
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--text-dark);
    margin-bottom: 20px;
}

.cta-letter p {
    font-size: 1.1rem;
    color: var(--text-dark);
    margin-bottom: 40px;
    opacity: 0.8;
}

.cta-btn {
    background: var(--card-bg);
    color: var(--text-dark);
    padding: 15px 40px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.2rem;
    box-shadow: 
        8px 8px 16px rgba(166, 192, 187, 0.6),
        -8px -8px 16px rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
}

.cta-btn:hover {
    box-shadow: 
        inset 5px 5px 10px rgba(166, 192, 187, 0.6),
        inset -5px -5px 10px rgba(255, 255, 255, 0.7);
}

/* Floating WhatsApp Button */
.floating-wa {
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 70px;
    height: 70px;
    background: var(--card-bg);
    color: #25D366;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5rem;
    box-shadow: 
        8px 8px 16px rgba(166, 192, 187, 0.6),
        -8px -8px 16px rgba(255, 255, 255, 0.7);
    z-index: 1000;
    transition: all 0.3s ease;
    text-decoration: none;
}

.floating-wa:hover {
    box-shadow: 
        inset 5px 5px 10px rgba(166, 192, 187, 0.6),
        inset -5px -5px 10px rgba(255, 255, 255, 0.7);
    color: #128C7E;
    transform: translateY(-5px);
}

/* ==========================================================================
   Responsive Media Queries
   ========================================================================== */

@media (max-width: 1024px) {
    .project-card {
        flex: 0 0 calc((100% - 40px) / 2);
    }
    .about-content {
        padding-left: 20px;
    }
    .lanyard-container {
        display: none;
    }
}

@media (max-width: 768px) {
    body {
        flex-direction: column;
    }
    
    header {
        position: fixed;
        bottom: 20px;
        top: auto;
        left: 0;
        width: calc(100% - 40px);
        height: 70px;
        margin: 0 20px;
        padding: 0 10px;
        border-radius: 35px;
        flex-direction: row;
        z-index: 1000;
        overflow: visible;
    }
    
    nav {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        gap: 0;
    }
    
    .nav-item {
        padding: 8px 15px;
        flex-direction: column;
        justify-content: center;
        font-size: 0.75rem;
        border-radius: 20px;
    }
    
    .nav-item i {
        margin-right: 0;
        margin-bottom: 4px;
        font-size: 1.2rem;
    }
    
    main {
        padding: 20px;
        margin-bottom: 110px; /* Space for the bottom nav */
    }
    
    .portfolio-title.bubble-text {
        font-size: 2.2rem;
        padding: 15px 25px;
        bottom: 25%;
    }
    
    .character-wrapper {
        height: 60%;
    }
    
    .about-header h2 {
        font-size: 2rem;
    }
    
    .slider-btn {
        display: flex;
        position: absolute;
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
        z-index: 20;
    }
    
    .prev-btn {
        left: 0px;
        margin-right: 0;
    }
    
    .next-btn {
        right: 0px;
        margin-left: 0;
    }
    
    .slider-wrapper {
        padding: 10px 20px;
        gap: 20px;
    }
    
    .project-card {
        flex: 0 0 85%;
        padding: 25px;
    }
    
    .card-img-placeholder {
        height: 180px;
        margin-bottom: 20px;
    }
    
    .card-number {
        font-size: 2rem;
        margin-bottom: 10px;
    }
    
    .project-card h3 {
        font-size: 1.4rem;
    }
    
    .cta-envelope-wrapper {
        width: 100%;
        max-width: 320px;
        height: 250px;
        margin: 30px auto;
    }
    
    .cta-envelope-back {
        height: 200px;
    }
    
    .cta-pocket {
        height: 140px;
    }
    
    .cta-letter {
        height: 210px;
        width: 85%;
        padding: 20px;
    }
    
    .cta-letter h2 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
    
    .cta-letter p {
        font-size: 0.8rem;
        margin-bottom: 15px;
    }
    
    .cta-btn {
        padding: 10px 20px;
        font-size: 0.9rem;
    }
    
    .cta-envelope-wrapper:hover .cta-letter {
        transform: translateY(-60px);
    }
    
    .floating-wa {
        bottom: 110px; /* Above bottom nav */
        right: 20px;
        width: 60px;
        height: 60px;
        font-size: 3rem;
    }
}
