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

export default function Step1({ name, setName }) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (name.trim()) navigate("/step/2");
  };

  return (
    <Container>
      <Stepper activeStep={0}>
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
        <Typography variant="h5">Enter Your Name</Typography>
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Button
          onClick={handleNext}
          variant="contained"
          sx={{ mt: 2 }}
          disabled={!name.trim()}
        >
          Next
        </Button>
      </Box>
    </Container>
  );
}
