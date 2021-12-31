import React, { useEffect } from "react";
import * as yup from "yup";

// Ant Design components
import { Layout, Input } from "antd";
import { useGlobalSetState, useGlobalState } from "../../context/globalContext";
const { Header, Footer, Content } = Layout;

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continous = true;
mic.interimResults = true;
mic.lang = "en-US";

const Second = ({ error, setError }) => {
  const [showError, setShowEror] = React.useState(false);
  const data = useGlobalState();
  const setData = useGlobalSetState();

  const [isListening, setIsListening] = React.useState(false);
  const [note, setNote] = React.useState(null);

  useEffect(() => {
    setError("");
    if (data.audio === null) {
      setError("Please enter your note");
    }
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (data.audio === null) {
      setError("Please enter your note");
    }
    if (isListening) {
      mic.start();
      mic.onend = () => {
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {};
    }

    mic.onstart = () => {};
    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      setNote(transcript);
      setData({ ...data, audio: transcript });
      console.log(data);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const handleClear = () => {
    setNote("");
    setData({ ...data, audio: "" });
  };
  return (
    <Layout>
      {/* Audio */}
      {/* start Recording */}

      <div className="box-buttons">
        {!isListening ? <span>🎙</span> : <span>🔴</span>}
        <button onClick={() => setIsListening((prev) => !prev)}>
          {isListening ? "Stop" : "Start"}
        </button>

        <button onClick={() => handleClear()}>clear</button>
      </div>
      <div className="note">{note}</div>
    </Layout>
  );
};

export default Second;
