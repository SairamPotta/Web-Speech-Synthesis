// intializing speech synthesis
const synthesis = window.speechSynthesis;


//Dom Data
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rateSpeech');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitchSpeech');
const pitchValue = document.querySelector('#pitch-value');
const listenVoice = document.querySelector('#listen-voice');


// init voice array
let voices = [];

const getVoice = () => {
    voices = synthesis.getVoices();
    console.log(voices);
    voices.forEach(voice => {
        //create option element
        const option = document.createElement('option');

        //fill option with voice and lang
        option.textContent = `${voice.name} (${voice.lang})`;

        //set attributes
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);

        //append to DOM
        voiceSelect.appendChild(option);
    });
}

getVoice();
if (synthesis.onvoiceschanged !== undefined) {
    synthesis.onvoiceschanged = getVoice;
}

// Speak
const speak = () => {
    // check if speaking
    if (synthesis.speaking) {
        console.error('Already Speaking....');
        return;
    }

    if (textInput.value !== '') {
        // Get speak text
        const speakText = new SpeechSynthesisUtterance(textInput.value);

        // Speak end
        speakText.onend = (e) => {
            console.log('Done Speaking...');
        }

        // Speak error
        speakText.error = (e) => {
            console.error('Something went wrong');
        }

        // Selected Voice
        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

        // Loop through voices
        voices.forEach(voice => {
            if (voice.name === selectedVoice) {
                speakText.voice = voice;
            }
        });

        // Set pitch and rate
        speakText.rate = rate.value;
        speakText.pitch = pitch.value;

        // Speak
        synthesis.speak(speakText);
    }
};

// Event Listeners

// Text form submit
listenVoice.addEventListener('click', (e) => {
    e.preventDefault();
    speak();
    textInput.blur();
});

// Rate value change
rate.addEventListener('change', (e) => {
    rateValue.textContent = rate.value;
});

// Pitch value change
pitch.addEventListener('change', (e) => {
    pitchValue.textContent = pitch.value;
});

// Voice select change
voiceSelect.addEventListener('change', e => speak());

// Voice Recognition into text area

const noBrowser = document.querySelector('#not-support');
const browser = document.querySelector('#support');
const storeSpeakData = document.querySelector('#voice-text-input');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const started = document.querySelector('#started');
const running = document.querySelector('#running');
const stopped = document.querySelector('#ended');

try {
    var speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new webkitSpeechRecognition();
} catch (e) {
    console.error(e);
    noBrowser.style.display = 'block';
    browser.style.display = 'none';
}

start.addEventListener('click', (e) => {
    // alert('start service');
    started.style.display = 'block';
    stopped.style.display = 'none';
    start.setAttribute('disabled','disabled');
    stop.removeAttribute('disabled');
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onresult = (e) => {
        const current = event.resultIndex;
        storeSpeakData.value += e.results[current][0].transcript;
    };
    
});

stop.addEventListener('click', (e) => {
    start.removeAttribute('disabled');
    stop.setAttribute('disabled','disabled');
    recognition.stop();
    started.style.display = 'none';
    stopped.style.display = 'block';
    setTimeout(() => {
        stopped.style.display = 'none';        
    }, 6000);
});


