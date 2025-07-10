/* eslint-disable react/prop-types */
import {
  Button,
  Container,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Review({ name, rating, message }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/thankyou");
  };

  return (
    <Container>
      <Stepper activeStep={3}>
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
        <Typography variant="h5">Review Your Feedback</Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>Name:</strong> {name}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <strong>Rating:</strong> {rating}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <strong>Message:</strong> {message}
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button onClick={() => navigate("/step/3")} sx={{ mr: 2 }}>
            Back
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
