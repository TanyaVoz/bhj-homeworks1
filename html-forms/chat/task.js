const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.querySelector('#chat-widget__input');
const chatWidgetMessages = document.querySelector('.chat-widget__messages');

const message = [
    'Кто тут?',
    'Где ваша совесть?',
    'Добрый день! До свидания!',
    'Мы ничего нe понимаем',
    'Не пишите нам больше',
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать',
    'Добрый день, мы ещё не проснулись. Позвоните через 10000 лет'
]

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

function time() {
    let now = new Date();
    let option = {
        hour: 'numeric',
        minute: 'numeric',
    }
    return now.toLocaleString("ru", option);
}

function robotAnswer() {
    return message[Math.floor(Math.random() * (message.length))];

}

window.addEventListener('keyup', (event) => {
    if (event.key == 'Enter' && chatWidgetInput.value.length > 0) {
        chatWidgetMessages.innerHTML += `<div class="message message_client">
        <div class="message__time">${time()}</div>
        <div class="message__text">${chatWidgetInput.value}!</div>
    </div>`
        setTimeout(() => {
            chatWidgetMessages.innerHTML += `<div class="message">
            <div class="message__time">${time()}</div>
            <div class="message__text">${robotAnswer()}!</div>
        </div>`
        }, 1000);
        chatWidgetInput.value = '';
    };
})

