import React, { useEffect, useState } from "react";
import ChatSidebar from "../components/ChatSidebar";
import microphone from "../assets/microphone.png";
import documentPic from "../assets/document.png";
import send from "../assets/send.png";
import { useNavigate } from "react-router";
import axios from "axios";
// import Dictaphone from '../components/Dictaphone'
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const Chats = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [change, setChange] = useState(false);
  const [fileName, setFileName] = useState("No selected File");

  const commands = [
    {
      command: "reset",
      callback: () => resetTranscript(),
    },
    {
      command: "shut up",
      callback: () => setMessage("I wasn't talking."),
    },
    {
      command: "Hello",
      callback: () => setMessage("Hi there!"),
    },
  ];
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (finalTranscript !== "") {
      console.log("Got final result:", finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log(
      "Your browser does not support speech recognition software! Try Chrome desktop, maybe?"
    );
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-GB",
    });
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
  };
  const handleChatSubmit = (e) => {
    e.preventDefault();
    console.log("sdasd");
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    // setImage(URL.createObjectURL(event.target.files[0]))
  };
  console.log("File aayi :", file);

  // const handleUpload = async (e) => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     // formData.append("file", videoFile);
  //     try {
  //       const response = await axios.post("", formData);
  //       let data = await response.data;
  //       console.log('DATA AAYA RE',data);
  //       // setApiData(data)
  //     } catch (error) {
  //       console.error(error);
  //     }
  // };
  return (
    <>
      <div className="flex bg-[#d5d8da]">
        <div className=" border-gray-300 max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
          <ChatSidebar />
        </div>
        <div className="flex flex-col justify-between items-center text-[#252525]  h-screen  border  w-full">
          <div className="h-full border w-full">
            <span>listening: {listening ? "on" : "off"}</span>
            <div>
              <button type="button" onClick={resetTranscript}>
                Reset
              </button>
              <button type="button" onClick={listenContinuously}>
                Listen
              </button>
              <button type="button" onClick={SpeechRecognition.stopListening}>
                Stop
              </button>
            </div>

            <div>{message}</div>
            <div>
              <span>{transcript}</span>
            </div>
          </div>
          <div className="flex h-[70px] border_top w-full">
            <div className="flex w-full">
              <div className="flex items-center my-auto w-10 h-10 ml-2 justify-center border-gray-300 bg-[#3FCA5D] hover:bg-[#3FCA5D]/70 rounded-full">
                <img
                  src={microphone}
                  onClick={listenContinuously}
                  alt=""
                  className="w-7 h-7 object-contain"
                />
              </div>

              {/* <h1 className='font_paragraph_regular relative z-10'>Upload your files here.</h1> */}
              <div
                className="flex items-center my-auto w-10 h-10 ml-2 justify-center hover:bg-[#cecbcb] rounded-full"
                onClick={() => document.querySelector(".input-field").click()}
              >
                <form action="">
                  <img
                    src={documentPic}
                    alt=""
                    className="w-7 h-7 object-contain"
                  />
                  <input
                    type="file"
                    name="file"
                    className="input-field"
                    hidden
                    onChange={handleFileChange}
                  ></input>
                </form>
              </div>
            </div>
            <div className="flex items-center my-auto w-10 h-10 ml-2 justify-center hover:bg-[#cecbcb] rounded-full">
              <form action="">
                <img
                  src={send}
                  alt=""
                  className="w-7 h-7 object-contain"
                  onClick={handleChatSubmit}
                />
                {/* <input type='file' name='file' className='input-field' hidden 
                      onChange={handleChatSubmit} /> */}
              </form>
            </div>
          </div>
          {/* <h1 className='mb-20 font-bold'>Chat Messager</h1> */}
        </div>
      </div>
    </>
  );
};

export default Chats;
