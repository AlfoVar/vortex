import React, { useState } from "react";
import {
  TextField,
  Snackbar,
  Alert,
  Button,
  Container,
  Box,
  Card,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Todos los campos son obligatorios.");
      setOpen(true);
    } else {
      console.log("Correo electrónico:", email);
      console.log("Contraseña:", password);
      setEmail("");
      setPassword("");
    }
  };

  const StepContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    textAlign: "left",
  }));

  return (
    // <Container>
    <StepContainer>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 930,
          backgroundColor: "#004D40",
          padding: 4,
          width: 2000,
          marginLeft: 0,
          marginTop: "5%",
        }}
      >
        <Card
          sx={{
            backgroundColor: "#F5F5F5",
            padding: 3,
            borderRadius: 2,
            width: "90%",
            height: "460px", // Asegura que la card interna se ajuste al tamaño de su contenido
            maxWidth: 400, // Reduce la altura mínima para la card interna
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Iniciar Sesión
          </h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Correo Electrónico"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
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
              >
                Ingresar
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              ¿No tienes una cuenta?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Regístrate
              </Link>
            </p>
          </div>
        </Card>
      </Card>

      {/* Mensaje de error */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </StepContainer>
    // </Container>
  );
};

export default Login;
