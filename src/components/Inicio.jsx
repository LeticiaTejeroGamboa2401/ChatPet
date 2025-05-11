import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper, Typography } from '@mui/material';


//Icons
import DoorbellIcon from '@mui/icons-material/Doorbell';
import StarIcon from '@mui/icons-material/Star';
import PaidIcon from '@mui/icons-material/Paid';
import MessageIcon from '@mui/icons-material/Message';

// const Estadisticas = styled(Paper)(({ theme }) => ({
//     backgroundColor: '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: (theme.vars ?? theme).palette.text.secondary,
//     ...theme.applyStyles('dark', {
//       backgroundColor: '#1A2027',
//     }),
//   }));



export function Inicio(){

        const stats = [
        {
            id: 1,
            icon: <DoorbellIcon fontSize='large'/>,
            label: "Reservas activas",
            value: 3
        },
        {
            id: 2,
            icon: <StarIcon fontSize='large'/>,
            label: "Calificación promedio",
            value: "4,8"
        },
        {
            id: 3,
            icon: <PaidIcon fontSize='large'/>,
            label: "Ingreso de la semana",
            value: "3,500"
        },
        {
            id: 4,
            icon: <MessageIcon fontSize='large'/>,
            label: "Nuevos mensajes",
            value: 2
        },
    ]


function StatCards({ data }) {
  return (
    <Grid container spacing={2}>
      {data.map((stats) => (
        <Grid item xs={12} sm={6} md={3} key={stats.id}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'row', // horizontal layout
              alignItems: 'center',
              height: '8vh',
              width: '100%',
              borderRadius: '10px',
              bgcolor:'#F1F5EF',
              border:'1px solid rgb(127, 165, 113)'
            }}
          >
            <Box sx={{ fontSize: 40 }}>{stats.icon}</Box>
            <Box sx={{ ml: 2, textAlign: 'left' }}>
              <Typography variant="h5">{stats.value}</Typography>
              <Typography variant="body2" color="text.secondary">{stats.label}</Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}


    return (
        <Box sx={{flexGrow: 1, margin: '5vh'}}>
            <Typography
            sx={{mb: 2}}
            variant='h5'
            >
                Inicio
            </Typography>
            <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12}}>
                <Grid item size={{xs: 12,sm: 12,md:12}}
                    sx={{
                        bgcolor: '#FFFFFF',
                        width: '100%',
                        height: '12vh',
                        borderRadius: '10px',
                        boxShadow: 2,
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <StatCards data={stats}/>
                </Grid>
                <Grid size={{xs: 12,sm: 8,md:8}}>
                <Box
                    sx={{
                        bgcolor: '#FFFFFF',
                        width: '100%',
                        height: ' 60vh',
                        borderRadius: '10px',
                        boxShadow: 2
                    }}
                    ></Box>
                </Grid>
                <Grid size={{xs: 12,sm: 4,md:4}}>
                <Box
                    sx={{
                        bgcolor: '#FFFFFF',
                        width: '100%',
                        height: '60vh',
                        borderRadius: '10px',
                        boxShadow: 2
                    }}
                    ></Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Inicio