// Til o'zgartirish funksiyasini kengaytirish
function changeLanguage(lang) {
    // Kontentlarni boshqarish
    const contentUz = document.getElementById('content-uz');
    const contentRu = document.getElementById('content-ru');
    
    contentUz.classList.toggle('hidden', lang !== 'uz');
    contentRu.classList.toggle('hidden', lang !== 'ru');
    
    // Tugmalarni yangilash
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes(lang === 'uz' ? 'O\'zbekcha' : 'Русский')) {
            btn.classList.add('active');
        }
    });
    
    // Sarlavhalarni o'zgartirish
    const nameElement = document.getElementById('name');
    const titleElement = document.getElementById('title');
    
    if (lang === 'uz') {
        nameElement.textContent = 'Oltiboyev Ogabek';
        titleElement.textContent = 'Matematika va Informatika Talabasi';
        document.documentElement.lang = 'uz';
    } else {
        nameElement.textContent = 'Олтибоев Огабек';
        titleElement.textContent = 'Студент Математики и Информатики';
        document.documentElement.lang = 'ru';
    }
    
    // LocalStorage ga saqlash
    localStorage.setItem('preferredLanguage', lang);
}

// Sayt yuklanganda tilni restore qilish
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'uz';
    changeLanguage(savedLang);
    
    // Dinamik yoshni hisoblash
    const birthDate = new Date(2005, 7, 12); // Avgust 12, 2005
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    // Yoshni yangilash
    document.querySelectorAll('[data-age]').forEach(element => {
        element.textContent = `${age} ${document.documentElement.lang === 'uz' ? 'yosh' : 'лет'}`;
    });
});