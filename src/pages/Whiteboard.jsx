// src/components/Whiteboard.js
import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';

const Whiteboard = () => {
  const [documentContent, setDocumentContent] = useState('Contenido del documento...');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

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
          <h2 className="text-2xl font-semibold mb-4">Documento</h2>
          <div className="bg-white shadow-md rounded p-4">
            <textarea
              value={documentContent}
              onChange={(e) => setDocumentContent(e.target.value)}
              rows="10"
              className="w-full border border-gray-300 p-2 rounded"
              readOnly
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Comentarios</h2>
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
                Agregar comentario
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

export default Whiteboard;