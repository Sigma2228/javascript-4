document.getElementById('checkButton').addEventListener('click', function(){
    const firstInput = document.getElementById('firstInput').value
    const secondInput = document.getElementById('secondInput').value
    const message = document.getElementById('message')
    
    if(firstInput && secondInput) {
        message.textContent = 'Обидва поля заповнені'
    }
    else { 
        message.textContent = 'Не всі поля заповнені'
    }
    })
    document.getElementById('Check').addEventListener('click', function(){
        const numberInput1 = Number.parseInt(document.getElementById('numberInput1').value)
        const numberInput2 = Number.parseInt(document.getElementById('numberInput2').value)
        const mesage = document.getElementById('mesage')
        const suma = numberInput1 + numberInput2
        if(suma > 10 ) {
            mesage.textContent = 'Сума більша за 10'
        }
        else {
            mesage.textContent = 'Сума менша або дорівнює 10'
        }
    })
    document.getElementById('Checkbutton').addEventListener('click', function(){
        const javascriptInput = document.getElementById('javascriptInput').value
        const messsage = document.getElementById('messsage')
        if(javascriptInput.includes('Javascript')) {
        messsage.textContent = 'Текст містить слово JavaScript'
        }
        else {
            messsage.textContent = 'Текст не містить слово JavaScript'
        }
    })
    document.getElementById('CheckButton').addEventListener('click', function(){
        const rangeInput = Number.parseInt(document.getElementById('rangeInput').value)
        const notification = document.getElementById('notification')
    
        if (rangeInput >= 10 && rangeInput <= 20) {
            notification.textContent = 'Число входить в діапазон від 10 до 20'
        }
        else {
            notification.textContent = 'Число не входить в діапазон від 10 до 20'
        }
    })
    
    document.getElementById('submitButton').addEventListener('click', function() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const notice = document.getElementById('notice');
    
        if (name.length < 3) {
            notice.textContent = "Ім'я повинно містити не менше 3 символів.";
            notice.style.color = 'red';
            return;
        }
    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            notice.textContent = "Введіть правильний email.";
            notice.style.color = 'red';
            return;
        }
    
        if (password.length < 6) {
            notice.textContent = "Пароль повинен містити не менше 6 символів.";
            notice.style.color = 'red';
            return;
        }
    
        // Якщо всі перевірки пройдено успішно
        notice.textContent = "";
        window.location.href = 'https://www.example.com';
    });
    // я не поняв як робити останнє завдання тому це зробив чат гпт
    