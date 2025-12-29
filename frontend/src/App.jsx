import { Container, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";
import Microphone from "./components/Microphone";

function App() {
  return (
    <Container maxWidth="md" style={{ marginTop: "40px" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Typography variant="h4" gutterBottom>
          🎓 Smart Campus Security Agent
        </Typography>

        <Card style={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="h6">
            🎤 Live Voice Monitoring
          </Typography>
          <Typography color="text.secondary">
            Click start and report a campus incident
          </Typography>
        </Card>
      </motion.div>
    </Container>
  );
}

export default App;
