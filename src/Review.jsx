/* eslint-disable react/prop-types */
import {
  Button,
  Card,
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
      <Card
        sx={{
          padding: 4,
          borderRadius: 2,
          boxShadow: 4,
          maxWidth: 300,
          margin: "0 auto",
          mt: 10,
        }}
      >
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
      </Card>
    </Container>
  );
}
