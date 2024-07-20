// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { FaBars } from 'react-icons/fa'; // Importa el ícono de React Icons
import { styled } from '@mui/material/styles';

const pages = [
  { name: 'Login', path: '/login' },
  { name: 'Inicio', path: '/home' },
  { name: 'Pizarra', path: '/whiteboard' },
  { name: 'Perfil Estudiante', path: '/profile' },
  { name: 'Perfil Experto', path: '/expert-profile' },
];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#E0E0E0", // Cambia el color de fondo
  marginBottom: theme.spacing(4),
  color: "#424242"
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#424242",
  textDecoration: 'none',
  fontFamily: "Merriweather",
  fontSize: 20,
  margin: theme.spacing(1),
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <StyledAppBar position="static">
        <Container maxWidth="lg" style={{ padding: '0 24px', maxwidth: "79%"}}>
          <Toolbar style={{ justifyContent: 'space-between', padding: '0 24px' }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              MyApp
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'block', sm: 'none' }}}
            >
              <FaBars size={24} />
            </IconButton>
            <div sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {pages.map((page) => (
                <Button color="inherit" key={page.name}>
                  <StyledLink to={page.path}>
                    {page.name}
                  </StyledLink>
                </Button>
              ))}
            </div>
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
      >
        <List>
          {pages.map((page) => (
            <ListItem component={Link} to={page.path} key={page.name} onClick={handleDrawerToggle}>
              <ListItemText primary={page.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;