import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Microphone() {
  const [listening, setListening] = useState(false);

  const startListening = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setListening(true);
    } catch (err) {
      alert("Microphone access denied");
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color={listening ? "success" : "primary"}
        onClick={startListening}
        style={{ marginTop: "20px" }}
      >
        {listening ? "Listening..." : "Start Listening"}
      </Button>
      {listening && (
  <motion.div
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ repeat: Infinity, duration: 1 }}
    style={{
      width: 20,
      height: 20,
      backgroundColor: "red",
      borderRadius: "50%",
      marginTop: 15
    }}
  />
)}


      {listening && (
        <Typography color="green" style={{ marginTop: "10px" }}>
          🎙 Microphone active
        </Typography>
      )}
    </>
  );
}
