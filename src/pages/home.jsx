import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  List,
  Card,
  CardContent,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const DocumentItem = ({ title, date }) => (
  <Grid item>
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography color="text.secondary">{date}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

const NotificationItem = ({ message, date, expertName, documentName }) => (
  <Grid item>
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="body1">{message}</Typography>
        <Typography color="text.secondary">{date}</Typography>
        <Typography color="text.secondary">{`Experto: ${expertName}`}</Typography>
        <Typography color="text.secondary">{`Documento: ${documentName}`}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

const Home = () => {
  const recentDocuments = [
    { title: "Documento de Investigación 1", date: "2024-07-20" },
    { title: "Documento de Investigación 2", date: "2024-07-19" },
    { title: "Documento de Investigación 3", date: "2024-07-18" },
  ];

  const recentNotifications = [
    {
      message: "Nueva revisión disponible para Documento de Investigación 1",
      date: "2024-07-20",
    },
    {
      message: "Comentario en tu Documento de Investigación 2",
      date: "2024-07-19",
    },
    {
      message: "Documento de Investigación 3 ha sido aprobado",
      date: "2024-07-18",
    },
  ];

  return (
    <StyledContainer>
      <SectionTitle variant="h4">Documentos Recientes</SectionTitle>
      <Grid container spacing={2} direction="row">
        {recentDocuments.map((doc, index) => (
          <DocumentItem key={index} title={doc.title} date={doc.date} />
        ))}
      </Grid>
      <SectionTitle variant="h4">Notificaciones</SectionTitle>
      <Grid container spacing={2} direction="row">
        {recentDocuments.map((notification, index) => (
          <NotificationItem key={index} {...notification} />
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default Home;
