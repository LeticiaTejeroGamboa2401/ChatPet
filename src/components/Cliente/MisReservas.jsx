import React, { useState } from "react";
import { Box, Grid, Button, Card, CardContent, Typography, ToggleButtonGroup, ToggleButton, Avatar } from "@mui/material";

const reservasData = [
  {
    id: 343,
    fecha: "30 de Abril, 2025",
    tarifa: 250,
    cuidador: "Juan Alonso",
    estado: "PENDIENTE",
    tipoServicio: "Prestador de servicio",
    categoria: "Adiestramiento",
    horario: "14:00 p.m",
    lugar: "A domicilio",
    tamanoMascota: "Pequeño",
    raza: "Pug",
    mascota: {
      nombre: "Mantequilla",
      foto: "https://i.imgur.com/5tj6S7Ol.jpg"
    }
  },
];


function BodyReservas() {
  return (
    <Grid item size={{xs:12,sm:12,md:12}}>
      <Typography variant="h5" sx={{ mb: 2 }}>Mis reservas</Typography>
      <hr />
      <Grid container size={{xs:12,sm:12,md:12}} sx={{ mt: 3 }}>
        {reservasData.map((reserva) => (
          <Grid item size={{xs:12,sm:12,md:12}} key={reserva.id}>
            <Card sx={{ display: 'flex', flexDirection: 'column', borderRadius: 2, boxShadow: 3, backgroundColor: "#fefefe", p:1}}>
              <CardContent>
                <Grid container spacing={2}>

                  {/* Encabezado */}
                  <Grid item size={{x:12, sm:6, md:2.4}}>
                    <Typography variant="subtitle2">Fecha reservada</Typography>
                    <Typography>{reserva.fecha}</Typography>
                  </Grid>
                  <Grid item size={{x:12, sm:6, md:2.4}}>
                    <Typography variant="subtitle2">Total de tarifa</Typography>
                    <Typography>${reserva.tarifa}</Typography>
                  </Grid>
                  <Grid item size={{x:12, sm:6, md:2.4}}>
                    <Typography variant="subtitle2">Cuidador</Typography>
                    <Typography fontWeight="bold">{reserva.cuidador}</Typography>
                  </Grid>
                  <Grid item size={{x:12, sm:6, md:2.4}}>
                    <Typography variant="subtitle2">Estado de servicio</Typography>
                    <Typography color="green">{reserva.estado}</Typography>
                  </Grid>
                  <Grid item size={{x:12, sm:6, md:2.4}}>
                    <Typography variant="subtitle2">No. de servicio</Typography>
                    <Typography># {reserva.id}</Typography>
                  </Grid>

                  <Grid container size={{xs:8,sm:8,md:10}}>
                    <Grid item size={{xs:12,sm:12,md:12}}>
                        <Typography variant="subtitle1" sx={{ mt: 3 }}>DETALLES DEL SERVICIO</Typography>
                    </Grid>

                    <Grid container size={{xs:12,sm:12,md:12}}>
                        <Grid item size={{x:12, sm:6, md:3}}>
                            <Typography variant="subtitle2">Tipo de servicio</Typography>
                            <Typography>{reserva.tipoServicio}</Typography>
                        </Grid>
                        <Grid item size={{x:12, sm:6, md:3}}>
                            <Typography variant="subtitle2">Categoría</Typography>
                            <Typography>{reserva.categoria}</Typography>
                        </Grid>
                        <Grid item size={{x:12, sm:6, md:3}}>
                            <Typography variant="subtitle2">Horario</Typography>
                            <Typography>{reserva.horario}</Typography>
                        </Grid>
                        <Grid item size={{x:12, sm:6, md:3}}>
                            <Typography variant="subtitle2">Lugar</Typography>
                            <Typography>{reserva.lugar}</Typography>
                        </Grid>
                    </Grid>

                    <Grid container size={{xs:12,sm:12,md:12}}>
                    <Grid item size={{x:12, sm:6, md:3}}>
                        <Typography variant="subtitle2">Tamaño de mascota</Typography>
                        <Typography>{reserva.tamanoMascota}</Typography>
                    </Grid>
                    <Grid item size={{x:12, sm:6, md:3}}>
                        <Typography variant="subtitle2">Raza</Typography>
                        <Typography>{reserva.raza}</Typography>
                    </Grid>
                    </Grid>

                    {/* Botón de eliminar */}
                    <Grid item size={{xs:12,sm:12,md:12}} sx={{ mt: 2 }}>
                        <Button variant="text" color="error">Eliminar servicio</Button>
                    </Grid>
                  </Grid>

                  <Grid container size={{xs:2,sm:2,md:2}}>
                    <Grid item size={{x:12, sm:12, md:12}} textAlign="center" marginTop={6}>
                        <Avatar alt={reserva.mascota.nombre} src={reserva.mascota.foto} sx={{ width: 56, height: 56, margin: "0 auto" }} />
                        <Typography variant="subtitle2">Mascota</Typography>
                        <Typography fontWeight="bold">{reserva.mascota.nombre}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}


export function MisReservas(){
    return(
    <Box sx={{ flexGrow: 1, margin: "5vh" }}>
      <Grid container spacing={3} sx={{ backgroundColor: "#FFFFFF", borderRadius: "10px", boxShadow: 2, padding: 5, border:'1px solid black',height:'100%',alignItems: 'flex-start' }}>
        <BodyReservas/>
      </Grid>
    </Box>
    )
}

export default MisReservas