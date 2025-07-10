/* eslint-disable react/prop-types */
import {
  Rating,
  Button,
  Container,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Step2({ rating, setRating }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Stepper activeStep={1}>
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
        <Typography variant="h5">Rate Us</Typography>
        <Rating
          value={rating}
          onChange={(e, newValue) => setRating(newValue)}
          sx={{ mt: 2 }}
          size="large"
        />
        <Box sx={{ mt: 2 }}>
          <Button onClick={() => navigate("/step/1")} sx={{ mr: 2 }}>
            Back
          </Button>
          <Button
            onClick={() => navigate("/step/3")}
            variant="contained"
            disabled={!rating}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
