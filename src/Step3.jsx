/* eslint-disable react/prop-types */
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Step3({ message, setMessage }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Stepper activeStep={2}>
        {["Name", "Rating", "Message", "Review"].map((label) => (
          <Step key={label}>
            <StepLabel
              sx={{
                "& .MuiStepLabel-labelContainer": {
                  display: { xs: "none", sm: "block" },
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Your Feedback</Typography>
        <TextField
          multiline
          rows={4}
          fullWidth
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Box sx={{ mt: 2 }}>
          <Button onClick={() => navigate("/step/2")} sx={{ mr: 2 }}>
            Back
          </Button>
          <Button onClick={() => navigate("/review")} variant="contained">
            Next
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
