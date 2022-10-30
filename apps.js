const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

function speak(sentence) {
  const text_speak = new SpeechSynthesisUtterance(sentence);

  text_speak.rate = 1;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  var day = new Date();
  var hr = day.getHours();

  if (hr >= 0 && hr < 12) {
    speak("Good Morning Boss");
  } else if (hr == 12) {
    speak("Good evening Boss");
  } else if (hr > 12 && hr <= 17) {
    speak("Good Afternoon Boss");
  } else {
    speak("Good Evening Boss");
  }
}

window.addEventListener("load", () => {
  speak("Activating Kekuda");
  speak("Going online");
  wishMe();
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  speakThis(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  recognition.start();
});

function speakThis(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "I did not understand what you said please try again";

  if (message.includes("hey") || message.includes("hello")) {
    const finalText = "Hello Boss";
    speech.text = finalText;
  } else if (message.includes("how are you")) {
    const finalText = "I am fine boss tell me how can i help you";
    speech.text = finalText;
  } else if (message.includes("name")) {
    const finalText = "My name is Kekuda";
    speech.text = finalText;
  } else if (message.includes("what are you")) {
    const finalText = "I am a Virtual Assistant how can I help you";
    speech.text = finalText;
  } else if (message.includes("what is your name")) {
    const finalText = "My name is Kekuda";
    speech.text = finalText;
  } else if (message.includes("what can you do")) {
    const finalText = "I can do whatever u want boss";
    speech.text = finalText;
  } else if (message.includes("why were you built")) {
    const finalText = "I was built to serve your needs boss ";
    speech.text = finalText;
  } else if (message.includes("open google")) {
    window.open("https://google.com", "_blank");
    const finalText = "Opening Google";
    speech.text = finalText;
  } else if (message.includes("open instagram")) {
    window.open("https://instagram.com", "_blank");
    const finalText = "Opening instagram";
    speech.text = finalText;
  } else if (message.includes("open facebook")) {
    window.open("https://facebook.com", "_blank");
    const finalText = "Opening facebook";
    speech.text = finalText;
  } else if (message.includes("open twitter")) {
    window.open("https://twitter.com", "_blank");
    const finalText = "Opening twitter";
    speech.text = finalText;
  } else if (message.includes("open orangesl")) {
    window.open("https://www.orange.sl", "_blank");
    const finalText = "Opening orangesl";
    speech.text = finalText; 
  } else if (
    message.includes("what is") ||
    message.includes("who is") ||
    message.includes("what are")
  ) {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "This is what i found on internet regarding " + message;
    speech.text = finalText;
  } else if (message.includes("wikipedia")) {
    window.open(
      `https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`,
      "_blank"
    );
    const finalText = "This is what i found on wikipedia regarding " + message;
    speech.text = finalText;
  } else if (message.includes("time")) {
    const time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    const finalText = time;
    speech.text = finalText;
  } else if (message.includes("date")) {
    const date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
    });
    const finalText = date;
    speech.text = finalText;
  } else if (message.includes("calculator")) {
    window.open("Calculator:///");
    const finalText = "Opening Calculator";
    speech.text = finalText;
  } else {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "I found some information for " + message + " on google";
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.pitch = 1;
  speech.rate = 1;

  window.speechSynthesis.speak(speech);
}

import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090'); 