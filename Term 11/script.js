// Simple Course Management System
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // Add simple hover effects and basic functionality
    addHoverEffects();
    
    // Add keyboard navigation
    addKeyboardNavigation();
    
    console.log('✅ سیستم مدیریت دروس با موفقیت بارگذاری شد');
}

function addHoverEffects() {
    const cards = document.querySelectorAll('.course-card, .stat-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function addKeyboardNavigation() {
    const cards = document.querySelectorAll('.course-card');
    let currentIndex = 0;
    
    // Make cards focusable
    cards.forEach((card, index) => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `درس ${index + 1}`);
    });
    
    // Add keyboard event listener
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            currentIndex = (currentIndex + 1) % cards.length;
            cards[currentIndex].focus();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            cards[currentIndex].focus();
        }
    });
}

// Simple notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#333'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        font-family: 'Vazirmatn', 'Vazir', sans-serif;
        direction: rtl;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Course data for reference
const courseData = {
    totalUnits: 23,
    totalCourses: 9,
    courses: [
        {
            title: 'مهندسی نرم‌افزار ۱',
            code: '۲۰۴۱۱۲۲',
            units: 3,
            group: 442,
            schedule: 'چهارشنبه: ۱۶:۰۰-۱۸:۰۰',
            classroom: '۱۰۱',
            instructor: 'لیلا شریفی',
            status: 'تایید شده'
        },
        {
            title: 'طراحی الگوریتم‌ها',
            code: '۱۱۳۲۱',
            units: 3,
            group: 1,
            schedule: 'شنبه: ۱۶:۰۰-۱۷:۳۰، چهارشنبه: ۱۱:۰۰-۱۳:۰۰',
            status: 'تایید شده'
        },
        {
            title: 'آزمایشگاه سیستم‌های عامل',
            code: '۱۱۳۲۸',
            units: 1,
            group: 1,
            schedule: 'یکشنبه: ۱۳:۰۰-۱۴:۰۰',
            status: 'تایید شده'
        },
        {
            title: 'بازیابی اطلاعات',
            code: '۱۱۲۱۰۸',
            units: 3,
            group: 1,
            schedule: 'یکشنبه: ۱۴:۰۰-۱۶:۰۰، سه‌شنبه: ۱۴:۰۰-۱۶:۰۰',
            status: 'تایید شده'
        },
        {
            title: 'مبانی رایانش ابری',
            code: '۱۱۳۶۸',
            units: 3,
            group: 1,
            schedule: 'یکشنبه: ۱۶:۰۰-۱۷:۳۰، سه‌شنبه: ۱۶:۰۰-۱۷:۳۰',
            status: 'تایید شده'
        },
        {
            title: 'اندیشه اسلامی ۲',
            code: '۴۴۰۲',
            units: 2,
            group: 2,
            schedule: 'دوشنبه: ۸:۰۰-۹:۳۰',
            status: 'تایید شده'
        },
        {
            title: 'دانش خانواده',
            code: '۴۴۱۳',
            units: 2,
            group: 3,
            schedule: 'سه‌شنبه: ۹:۳۰-۱۱:۰۰',
            status: 'تایید شده'
        },
        {
            title: 'مهندسی نرم‌افزار ۱',
            code: '۱۱۶۱',
            units: 3,
            group: 1,
            schedule: 'شنبه: ۹:۳۰-۱۱:۰۰، چهارشنبه: ۹:۳۰-۱۱:۰۰',
            status: 'تایید شده'
        },
        {
            title: 'مهندسی نرم‌افزار ۲',
            code: 'GUEST001',
            units: 3,
            group: 'مهمان',
            schedule: 'تعیین نشده',
            university: 'دانشگاه نازلو',
            status: 'تایید شده',
            isGuest: true
        }
    ]
};

// Show welcome message
setTimeout(() => {
    showNotification('سیستم مدیریت دروس ترم ۱۴۰۱ آماده است', 'success');
}, 1000);