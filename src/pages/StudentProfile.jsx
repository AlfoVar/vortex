import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';

const StudentProfile = () => {
  const [name, setName] = useState('Juan Pérez');
  const [email, setEmail] = useState('juan.perez@example.com');
  const [bio, setBio] = useState('Estudiante de ingeniería con interés en IA.');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const handleSaveChanges = () => {
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      setOpen(true);
    } else {
      console.log('Nombre:', name);
      console.log('Correo electrónico:', email);
      console.log('Biografía:', bio);
      console.log('Contraseña:', password);
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <main className="p-6" style={{ maxWidth: '600px', width: '100%' }}>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Perfil del Estudiante</h2>
          <div className="bg-white shadow-md rounded p-4">
            <form>
              <TextField
                label="Nombre Completo"
                type="text"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
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
                label="Biografía"
                type="text"
                fullWidth
                margin="normal"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                multiline
                rows={4}
                variant="outlined"
              />
              <TextField
                label="Nueva Contraseña"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
              />
              <TextField
                label="Confirmar Contraseña"
                type="password"
                fullWidth
                margin="normal"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                variant="outlined"
              />
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
            </form>
          </div>
        </section>

        {/* Resto del contenido */}
      </main>

      {/* Mensaje de error */}
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default StudentProfile;