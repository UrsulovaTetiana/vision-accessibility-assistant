import { useState } from "react";
import Header from "../components/Header";
import Status from "../components/Status";
import ActionButton from "../components/ActionButton";
import DescriptionBox from "../components/DescriptionBox";
import { analyzeCurrentPage, describeImages } from "../api/accessibilityApi";

export default function Popup() {
  const [status, setStatus] = useState("Ready");
  const [description, setDescription] = useState("");

  const handleAnalyzePage = async () => {
    setStatus("Analyzing page...");

    const result = await analyzeCurrentPage();

    setDescription(result.description);
    setStatus("Done");
  };

  const handleDescribeImages = async () => {
    setStatus("Describing images...");

    const result = await describeImages();

    setDescription(result.description);
    setStatus("Done");
  };

  const handleReadAloud = () => {
    if (!description) {
      setStatus("Nothing to read yet");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(description);
    utterance.lang = "en-US";

    window.speechSynthesis.speak(utterance);
    setStatus("Reading aloud...");
  };

  return (
    <main className="popup">
      <Header />

      <Status status={status} />

      <div className="actions">
        <ActionButton title="Analyze Page" onClick={handleAnalyzePage} />
        <ActionButton title="Describe Images" onClick={handleDescribeImages} />
        <ActionButton title="Read Aloud" onClick={handleReadAloud} />
      </div>

      <DescriptionBox text={description} />
    </main>
  );
}
