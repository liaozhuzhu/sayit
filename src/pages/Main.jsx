import {useEffect, useState} from 'react'
import { Configuration, OpenAIApi } from "openai";


function Main({userText}) {

    let apiKey = process.env.REACT_APP_OPENAI_API_KEY;

    let loadInterval;

    const loadResponse = (uniqueId) => {
        let response = document.getElementById(uniqueId);
        let dots = document.createElement("span");
        response.innerHTML = "";
        dots.id = "dots";
        dots.innerHTML = "...";
        response.appendChild(dots);
        loadInterval = setInterval(() => {
            if (dots.innerHTML.length === 3) {
                dots.innerHTML = "";
            } else {
                dots.innerHTML += ".";
            }
        }, 500);
    }

    const askQuestion = async (question) => {
        let chatContainer = document.getElementById("chat-container");
        const uniqueId = generateUniqueId();
        chatContainer.innerHTML += (createBox(false, "", uniqueId));
        loadResponse(uniqueId);
        console.log("Calling OpenAI API...");
        const config = new Configuration({
            apiKey: apiKey,
        });
        const openai = new OpenAIApi(config);
        const prompt = `Q: ${question}\nA: `;
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 1,
            max_tokens: 300,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        // check if response was successful
        let responseText;
        if (response.status === 200) {
            responseText = response.data.choices[0].text;
        } else {
            console.log("Error: " + response.status);
            responseText = "Sorry, something went wrong. Please try again later.";
        }
        clearInterval(loadInterval);
        document.getElementById(uniqueId).innerHTML = responseText;
        chatContainer.scrollTop = chatContainer.scrollHeight + 50;
    }

    const createBox = (isUser, message, uniqueId) => {
        if (isUser) {
            return (
                `
                <div class="chat-box">
                    <div class="chat">
                        <div class="profile-icon">
                            <img src="assets/user.png" id="user-icon"/>
                        </div>
                        <div class="prompt">${message}</div>
                    </div>
                </div>`
            )
        } else {
            return (
                `
                <div class="chat-box" id="sayit-box">
                    <div class="chat">
                        <div class="profile-icon">
                            <img src="assets/sayit.png" id="sayit-icon"/>
                        </div>
                        <div class="prompt" id=${uniqueId}>${message}</div>
                    </div>
                </div>`
            )
        }
    }

    function generateUniqueId() {
        const timestamp = Date.now();
        const randomNumber = Math.random();
        const hexadecimalString = randomNumber.toString(16);
    
        return `id-${timestamp}-${hexadecimalString}`;
    }

    // create a function that generates different greeting messages
    const generateGreeting = () => {
        let greetings = 
            [
                "Hello, I am SayIt! I am a chatbot that can answer your questions about the world around you. Ask me anything!",
                "Hi, my name is SayIt! How are you?", 
                "Hey, I'm SayIt! How can I help?", 
                "Hello, SayIt here 👋",
            ];
        let uniqueId = generateUniqueId();
        let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        let chatContainer = document.getElementById("chat-container");
        chatContainer.innerHTML += (createBox(false, randomGreeting, uniqueId));
    }

    // test function to avoid api calls
    const testQuestion = () => {
        let chatContainer = document.getElementById("chat-container");
        console.log("Fake calling OpenAI API...");
        // make a fake call to the api with a delay

        // move this line up, then do the loading thing and then get the response by its unique id and change the 
        // innerHTML to sayItResponse
        let testResponse = "Hello, I am SayIt! I am a chatbot that can answer your questions about the world around you. Ask me anything!";
        const uniqueId = generateUniqueId();
        chatContainer.innerHTML += (createBox(false, testResponse, uniqueId));
        chatContainer.scrollTop = chatContainer.scrollHeight + 50;
    }

    useEffect(() => {
        document.getElementById("chat-container").innerHTML += (createBox(true, userText, ""));
        if (userText.toLowerCase() === "hi" || userText.toLowerCase() === "hello" || userText.toLowerCase() === "hey" || userText.toLowerCase() === "hi!" || userText.toLowerCase() === "hello!" || userText.toLowerCase() === "hey!") {
            generateGreeting();
            return;
        }
        // testQuestion();
        // askQuestion(userText);
    }, [userText])


    return (
        <div id="main">
            <div id="chat-container"></div>
        </div>
    )
}

export default Main