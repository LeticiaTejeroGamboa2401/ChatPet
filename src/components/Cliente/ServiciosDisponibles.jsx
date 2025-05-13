import React, { useState } from "react";
import { Box, Grid, Button, Card, CardContent, Typography, ToggleButtonGroup, ToggleButton, Avatar } from "@mui/material";

const filtrosDisponibles = ["Adiestrador", "Entrenador", "Paseador", "Transportista"];

const serviciosSimulados = [
  {
    id: 1,
    nombre: "Juan Pérez",
    tipo: "Paseador",
    experiencia: "2 años de experiencia paseando perros",
    imagen: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    nombre: "Ana Torres",
    tipo: "Adiestrador",
    experiencia: "Especialista en comportamiento canino",
    imagen: "https://randomuser.me/api/portraits/women/44.jpg"
  },
];

function BodyServiciosDisponibles(){
    const [filtro, setFiltro] = useState(null);

    const handleFiltroChange = (_, newFiltro) => {
        setFiltro(newFiltro);
    };

    const serviciosFiltrados = filtro
        ? serviciosSimulados.filter((s) => s.tipo === filtro)
        : serviciosSimulados;
    return(
        <Grid item size={{xs:12,sm:12,md:12}}>
          <Typography variant="h5" sx={{ mb: 2 }}>Servicios Disponibles</Typography>
            <ToggleButtonGroup
            color="primary"
            value={filtro}
            exclusive
            onChange={handleFiltroChange}
            sx={{ flexWrap: 'wrap', gap: 2 , mb:3}}
            >
            {filtrosDisponibles.map((tipo) => (
                <ToggleButton
                key={tipo}
                value={tipo}
                sx={{
                border: '1px solid rgb(202, 150, 66)',
                borderRadius: 1,
                color: '#E1832B',
                minWidth: 120,
                px: 3,
                '&:not(:first-of-type)': {
                    borderLeft: '1px solid rgb(202, 150, 66)', // asegura el borde izquierdo en todos menos el primero
                },
                '&.Mui-selected': {
                    backgroundColor: '#E1832B',
                    color: '#fff',
                    borderColor: 'rgb(202, 150, 66)',
                },
                '&.Mui-selected:hover': {
                    backgroundColor: '#cc6f1e',
                    color: '#fff',
                    borderColor: 'rgb(202, 150, 66)',
                },
                '&:hover': {
                    backgroundColor: '#fff4e6',
                    borderColor: 'rgb(202, 150, 66)',
                },
                }}

                >
                {tipo}
                </ToggleButton>
            ))}
            </ToggleButtonGroup>
            <hr/>
            <Grid container size={{xs:12,sm:12,md:12}} sx={{mt:3}} spacing={2}>
            {serviciosFiltrados.map((servicio) => (
                <Grid item key={servicio.id} size={{xs:12,sm:6,md:6}}>
                    <Card sx={{ display: "flex", alignItems: "center", padding: 2, backgroundColor: "#FFFDF9", borderLeft: "6px solid #E1832B" , boxShadow:4}}>
                    <Avatar src={servicio.imagen} sx={{ width: 64, height: 64, mr: 2 }} />
                    <CardContent>
                        <Typography variant="h6">{servicio.nombre}</Typography>
                        <Typography variant="subtitle2" color="textSecondary">{servicio.tipo}</Typography>
                        <Typography variant="body2">{servicio.experiencia}</Typography>
                    </CardContent>
                    </Card>
                </Grid>
            ))}
            </Grid>
        </Grid>


    )
}

export function ServiciosDisponibles() {

  return (
    <Box sx={{ flexGrow: 1, margin: "5vh" }}>
      <Grid container spacing={3} sx={{ backgroundColor: "#FFFFFF", borderRadius: "10px", boxShadow: 2, padding: 5, border:'1px solid black',height:'100%',alignItems: 'flex-start' }}>
        <BodyServiciosDisponibles/>
      </Grid>
    </Box>
  );
}

export default ServiciosDisponibles;