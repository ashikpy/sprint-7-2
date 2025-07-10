import { Container, Typography, Box } from "@mui/material";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function ThankYou() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Confetti width={dimensions.width} height={dimensions.height} />
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h4">Thank You 🎉</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Your feedback has been submitted successfully.
        </Typography>
      </Box>
    </Container>
  );
}
