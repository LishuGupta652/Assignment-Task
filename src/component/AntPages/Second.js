import React, { useEffect } from "react";
import * as yup from "yup";

// Ant Design components
import { Layout, Input } from "antd";
import { useGlobalSetState, useGlobalState } from "../../context/globalContext";
import { AudioMutedOutlined } from "@ant-design/icons/lib/icons";
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
    handleListen();
  }, [isListening]);

  const handleListen = () => {
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
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const handleSaveNote = () => {
    if (note !== null) {
      setData({ ...data, audio: note });
    }
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

        <button onClick={() => setNote("")}>clear</button>
      </div>
      <div className="note">{note}</div>
    </Layout>
  );
};

export default Second;
