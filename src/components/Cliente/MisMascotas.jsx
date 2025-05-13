import { Box, Grid, Typography, Button, Avatar } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import PetsIcon from '@mui/icons-material/Pets';
import React from "react";

const mascotas = [
  {
    nombre: "Mantequilla",
    edad: "2 años",
    raza: "Pug",
    sexo: "Hembra",
    peso: "7 kg",
    imagen: "https://i.imgur.com/4AiXzf8.jpeg", // puedes cambiarla
  },
  {
    nombre: "Rocky",
    edad: "3 años",
    raza: "Bulldog",
    sexo: "Macho",
    peso: "10 kg",
    imagen: "https://i.imgur.com/4AiXzf8.jpeg",
  },
  {
    nombre: "Luna",
    edad: "1 año",
    raza: "Chihuahua",
    sexo: "Hembra",
    peso: "3 kg",
    imagen: "https://i.imgur.com/4AiXzf8.jpeg",
  },
];

function TarjetaMascota({ mascota }) {
  return (
    <Box
      sx={{
        border: "2px solid #556B2F",
        borderRadius: "10px",
        p: 1,
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        mb: 2,
        backgroundColor: "#FFFDF9",
        flexWrap: "wrap",
      }}
    >
      <Avatar
        src={mascota.imagen}
        alt={mascota.nombre}
        sx={{ width: 45, height: 45, mt: 1 }}
      />
      <Grid container spacing={1} sx={{ flex: 1 }}>
        <Grid item size={{ xs: 12, sm: 6, md: 2.5 }}>
          <Typography variant="caption" color="textSecondary">Nombre</Typography>
          <Typography noWrap>{mascota.nombre}</Typography>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 2.5 }}>
          <Typography variant="caption" color="textSecondary">Edad</Typography>
          <Typography noWrap>{mascota.edad}</Typography>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 2.5 }}>
          <Typography variant="caption" color="textSecondary">Raza</Typography>
          <Typography noWrap>{mascota.raza}</Typography>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 2.5 }}>
          <Typography variant="caption" color="textSecondary">Sexo</Typography>
          <Typography sx={{ display: "flex", alignItems: "center", gap: 0.5 }} noWrap>
            {mascota.sexo}
            {mascota.sexo === "Hembra" && (
              <PetsIcon fontSize="small" sx={{ color: "hotpink" }} />
            )}
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 2 }}>
          <Typography variant="caption" color="textSecondary">Peso</Typography>
          <Typography noWrap>{mascota.peso}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}



function BodyMascotas() {
  return (
    <Grid item size={{xs:12,sm:12,md:12}}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>LISTA DE TUS MASCOTAS</Typography>
        <Button
        variant="outlined"
        startIcon={<AddIcon />}
        sx={{
            color: "#D35400", // naranja quemado
            borderColor: "#D35400",
            fontWeight: "bold",
            "&:hover": {
            backgroundColor: "#FDEBD0", // fondo naranja claro al pasar el mouse
            borderColor: "#BA4A00",
            color: "#BA4A00",
            },
        }}
        >
        Agregar
        </Button>
      </Box>
      {mascotas.map((mascota, index) => (
        <TarjetaMascota key={index} mascota={mascota} />
      ))}
    </Grid>
  );
}

export function MisMascotas() {
  return (
    <Box sx={{ flexGrow: 1, margin: '5vh' }}>
      <Grid
        container
        spacing={2}
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: '10px',
          boxShadow: 2,
          p: 5,
        }}
      >
        <BodyMascotas />
      </Grid>
    </Box>
  );
}

export default MisMascotas;
