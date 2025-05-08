import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

export function HistorialServicio(){
    return (
        <Box sx={{flexGrow: 1, margin: '5vh'}}>
            <Typography
            sx={{mb: 2}}
            >
                Historial del servicio
            </Typography>
            <Grid container spacing={{xs: 2, md: 4}} columns={{ xs: 4, sm: 8, md: 12}}>
                <Grid size={12}>
                    <Item></Item>
                </Grid>
                <Grid size={8}>
                    <Item></Item>
                </Grid>
                <Grid size={4}>
                    <Item></Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HistorialServicio