// Показать/скрыть новости
document.querySelectorAll('.news-container article').forEach((article, index) => {
    article.addEventListener('click', () => {
        alert("Вы выбрали новость ${index + 1}");
    });
});

// Смена темы
const toggleThemeBtn = document.createElement('button');
toggleThemeBtn.innerText = 'Сменить тему';
toggleThemeBtn.style.position = 'fixed';
toggleThemeBtn.style.bottom = '20px';
toggleThemeBtn.style.right = '20px';
toggleThemeBtn.style.padding = '10px';
toggleThemeBtn.style.backgroundColor = '#ff4500';
toggleThemeBtn.style.color = '#fff';
toggleThemeBtn.style.border = 'none';
toggleThemeBtn.style.borderRadius = '5px';
toggleThemeBtn.style.cursor = 'pointer';
document.body.appendChild(toggleThemeBtn);

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    alert('Тема изменена!');
});

// Анимация плавающих шаров
const createFloatingBalls = () => {
    for (let i = 0; i < 20; i++) {
        const ball = document.createElement('div');
        ball.className = 'floating-ball';
        ball.style.top = ${Math.random() * 100}vh";
        ball.style.left = ${Math.random() * 100}vw;
        ball.style.backgroundColor = rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8);
        ball.style.animationDuration = ${Math.random() * 5 + 5}s;
        document.body.appendChild(ball);
    }
};

createFloatingBalls();

// Форма регистрации
document.getElementById('registration-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    alert("Добро пожаловать, ${username}! Ваш email: ${email}");
});

// Форма обратной связи
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо за ваше сообщение!');
});

// Анимация для популярного списка игр
document.querySelectorAll('.game').forEach((game) => {
    game.addEventListener('mouseover', () => {
        game.style.transform = 'scale(1.1)';
        game.style.transition = 'transform 0.3s';
    });
    game.addEventListener('mouseout', () => {
        game.style.transform = 'scale(1)';
    });
});

// Таймер для обратного отсчета
const countdown = document.createElement('div');
countdown.className = 'countdown';
countdown.style.position = 'fixed';
countdown.style.bottom = '50px';
countdown.style.right = '20px';
countdown.style.color = '#fff';
count
// Покупка аккаунта
function buyAccount(accountName) {
    const email = prompt("Введите ваш email для получения информации о покупке:");
    if (email) {
        alert("Заявка на покупку ${accountName} отправлена. Проверьте вашу почту (${email}).");
    } else {
        alert("Покупка отменена.");
    }
}

// Регистрация
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const nickname = document.getElementById('nickname').value;
    const password = document.getElementById('password').value;

    if (email && nickname && password) {
        alert("Регистрация успешна! Добро пожаловать, ${nickname}.");
        document.getElementById('register-section').style.display = 'none';
        document.getElementById('account-settings').style.display = 'block';
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});

// Смена аккаунта
function changeAccount() {
    document.getElementById('register-section').style.display = 'block';
    document.getElementById('account-settings').style.display = 'none';
}
// Регистрация
document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const nickname = document.getElementById("nickname").value;
    const password = document.getElementById("password").value;

    if (email && nickname && password) {
        alert("Регистрация успешна! Добро пожаловать, ${nickname}."); 
        // Скрыть секцию регистрации
        document.getElementById("register-section").style.display = "none";
        // Показать секцию смены аккаунта
        document
        setTimeout(() => {
            const infoMessage = document.getElementById('info-message');
            if (infoMessage) {
                infoMessage.style.transition = 'opacity 1s ease-out';
                infoMessage.style.opacity = '0';
                setTimeout(() => infoMessage.remove(), 1000);
            }
        }, 10000); // Исчезнет через 10 секунд