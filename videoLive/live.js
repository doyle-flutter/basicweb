if (navigator.mediaDevices === undefined) navigator.mediaDevices = {};
        if (navigator.mediaDevices.getUserMedia === undefined) {
            navigator.mediaDevices.getUserMedia = function(constraints) {
                var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
                if (!getUserMedia) return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                return new Promise(function(resolve, reject) {
                    getUserMedia.call(navigator, constraints, resolve, reject);
                });
            }
        }

        navigator.mediaDevices.getUserMedia({ audio: true, video: true })
            .then((stream) => {
                const video = document.querySelector('video');
                if ("srcObject" in video) video.srcObject = stream;
                else video.src = window.URL.createObjectURL(stream);
                video.onloadedmetadata = (e) => video.play();
                return video;
            })
            .then(video => {
                video.onplay = e => {
                    const chatSize =  video.clientHeight;
                    const chatListWrapper = document.getElementById('contentChat');
                    chatListWrapper.style.height = (chatSize)+'px';
                }
                return;
            })
        .catch((err) => console.log(err.name + ": " + err.message));

const chatListWrapper = document.getElementById('chatListWrapper');
const chatSendBtn = document.getElementById('chatSendBtn');
const chatSendInput = document.getElementById('chatSendInput');

const sendEventHandle = e => {
    if(chatSendInput.value === undefined || chatSendInput.value === '') return;
    const li = document.createElement("LI");
    li.innerText = chatSendInput.value;
    chatListWrapper.appendChild(li);
    chatSendInput.value = '';
    chatListWrapper.scrollBy({top:60, behavior:'smooth'});
    return;
}

chatSendBtn.addEventListener('click', sendEventHandle, true);
chatSendInput.onkeydown = (e) => {
    if(e.key === 'Enter'){
        setTimeout(sendEventHandle);
        return;
    };
};

