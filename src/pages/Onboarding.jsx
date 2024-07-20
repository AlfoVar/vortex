import React, { useState } from "react";
import { Button, Typography, Container, Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import "@fontsource/merriweather";

const steps = [
  {
    title: `Descubre como publicar tus investigaciones con confianza.`,
    description:
      "Explora, aprende y publica con la ayuda de expertos. ¡Comienza ahora!",
  }
];

const StepContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  textAlign: "left",
}));

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    window.location.href = "/login";
  };

  return (
    <Container>
      <StepContainer>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: 1330,
            width: 2000,
            marginTop: 30,
            paddingLeft: 12,
            backgroundColor: "#E0E0E0",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ marginTop: 60, fontFamily: "Merriweather" }}
            >
              {steps[currentStep].title}
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontFamily: "Merriweather", fontSize: 29 }}
            >
              {" "}
              {steps[currentStep].description}
            </Typography>
            <Box>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  marginRight: 2,
                  marginTop: 6.25,
                  backgroundColor: "#80CBC4",
                  borderColor: "#004D40",
                  color: "#000000",
                  "&:hover": {
                    backgroundColor: "#004D40",
                    color: "#FFFFFF",
                  },
                  border: "1px solid #004D40",
                  padding: "12px 24px",
                  fontSize: "1rem", 
                }}
                onClick={handleFinish}
              >
                Comenzar
              </Button>
            </Box>
          </Box>
          <Card sx={{ height: 1330, width: "50%", backgroundColor: "#004D40" }}>
            <image></image>
          </Card>
        </Card>
      </StepContainer>
    </Container>
  );
};

export default Onboarding;
