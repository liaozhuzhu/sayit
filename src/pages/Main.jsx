import {useEffect, useState, useRef} from 'react'
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Configuration, OpenAIApi } from "openai";


function Main({userText}) {

    const [sayItResponse, setSayItResponse] = useState("");
    const dataFetchedRef = useRef(false);
    const apiKey = "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";

    // write a function that asks a question to the openai api using createCompletion when the component first renders  

    const askQuestion = async (question) => {
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
        if (response.status === 200) {
            let responseText = response.data.choices[0].text;
            setSayItResponse(responseText);
        } else {
            let responseText = "Sorry, something went wrong. Please try again later.";
            setSayItResponse(responseText);
        }
    }

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        askQuestion(userText);
    }, [userText])


    return (
        <div id="main">
            <div id="chat-container"></div>
            <div className="chat-box" id="user-chat-box">
                <div className="profile-icon"><FontAwesomeIcon icon={faUser} /></div>
                <div className="prompt">{userText}</div>
            </div>
            <div className="chat-box" id="user-chat-box">
                <div className="profile-icon">
                    <img src="assets/sayit.png" id="sayit-icon"/>
                </div>
                <div className="prompt" id="sayit-response">{sayItResponse}</div>
            </div>
        </div>
    )
}

export default Main