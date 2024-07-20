// src/components/ExpertProfile.js
import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';

const ExpertProfile = () => {
  const [name, setName] = useState('Dr. Laura Martínez');
  const [email, setEmail] = useState('laura.martinez@example.com');
  const [bio, setBio] = useState('Experta en IA y Machine Learning.');
  const [experience, setExperience] = useState('10 años en investigación y publicación.');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const handleSaveChanges = () => {
    // Aquí puedes agregar la lógica para actualizar la información del perfil
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
    console.log('Biografía:', bio);
    console.log('Experiencia:', experience);
    // Limpia el estado de los comentarios si es necesario
  };

  const handleAddComment = () => {
    if (comment.trim() === '') {
      setError('El comentario no puede estar vacío.');
      setOpen(true);
    } else {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <main className="p-6" style={{ maxWidth: '600px', width: '100%' }}>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Perfil del Experto</h2>
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
                label="Experiencia"
                type="text"
                fullWidth
                margin="normal"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                multiline
                rows={4}
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
                GUARDAR CAMBIOS
              </Button>
            </form>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Comentarios Hechos</h2>
          <div className="bg-white shadow-md rounded p-4 mb-4">
            <TextField
              label="Agregar un comentario"
              fullWidth
              multiline
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              variant="outlined"
              margin="normal"
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
                AGREGAR COMENTARIOS
              </Button>
          </div>

          <div className="bg-white shadow-md rounded p-4">
            <ul>
              {comments.map((c, index) => (
                <li key={index} className="mb-2 border-b border-gray-200 pb-2">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>
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

export default ExpertProfile;