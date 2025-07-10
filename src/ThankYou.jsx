import { Container, Typography, Box } from "@mui/material";

export default function ThankYou() {
  return (
    <Container>
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h4">Thank You 🎉</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Your feedback has been submitted successfully.
        </Typography>
      </Box>
    </Container>
  );
}
