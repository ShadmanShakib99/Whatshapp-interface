// DOM উপাদানগুলি নির্বাচন
const chatInput = document.querySelector('.chat-input');
const sendButton = document.querySelector('.send-button');
const messagesContainer = document.querySelector('.messages');

            // বার্তা পাওয়ার ফাংশন
function receiveMessage(text) {
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', 'received'); // 'received' ক্লাস যোগ করুন
    newMessage.innerHTML = `<p>${text}</p><span class="message-time">${new Date().toLocaleTimeString()}</span>`; // বার্তা এবং সময় যোগ করুন
    
    // বার্তা কনটেইনারে যোগ করুন
    messagesContainer.appendChild(newMessage);
    
    // স্ক্রোল নিচে নিয়ে যান
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

        // উদাহরণস্বরূপ, কিছু সময় পর একটি বার্তা পাওয়া যাবে
setTimeout(() => {
    receiveMessage('Ahssalamu alaikum! How are you?');
}, 3000); // 3 সেকেন্ড পর বার্তা আসবে

            // বার্তা পাঠানোর ফাংশন
sendButton.addEventListener('click', () => {
    const messageText = chatInput.value; // ইনপুট থেকে বার্তা নিন
    if (messageText.trim() !== '') { // বার্তা খালি না হলে
        // নতুন বার্তা তৈরি করুন
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent'); // 'sent' ক্লাস যোগ করুন
        newMessage.innerHTML = `<p>${messageText}</p><span class="message-time">${new Date().toLocaleTimeString()}</span>`; // বার্তা এবং সময় যোগ করুন
        
        // বার্তা কনটেইনারে যোগ করুন
        messagesContainer.appendChild(newMessage);
        
        // ইনপুট ক্লিয়ার করুন
        chatInput.value = '';
        
    }
});

// কীবোর্ড ইনপুটের জন্য ইভেন্ট লিসেনার
chatInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') { // যদি Enter চাপা হয়
        sendButton.click(); // বার্তা পাঠানোর বাটন ক্লিক করুন
    }
});

