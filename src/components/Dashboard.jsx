import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import HistoryIcon from '@mui/icons-material/History';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';

import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';

const NAVIGATION = [
  {
    segment: 'inicio',
    title: 'Inicio',
    icon: <HomeIcon />,
  },
  {
    segment: 'informacion-servicio',
    title: 'Información del servicio',
    icon: <InfoIcon />,
  },
  {
    segment: 'reservas',
    title: 'Reservas',
    icon: <CalendarMonthIcon />,
  },
  {
    segment: 'chats',
    title: 'Chats',
    icon: <ChatIcon />,
  },
  {
    segment: 'historia-servicio',
    title: 'Historial del servicio',
    icon: <HistoryIcon />,
  },
  {
    segment: 'pagos-facturacion',
    title: 'Pagos y facturación',
    icon: <CreditCardIcon />,
  },
  {
    segment: 'resenas-opiniones',
    title: 'Reseñas y opiniones',
    icon: <StarIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}


DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function CustomAppTitle() {
  return (
    <Typography variant="h6" sx={{ alignContent: 'center', padding: '0 10vh' }}>
      CHAT PET
    </Typography>
  );
}

function SettingsButton() {
  const router = useDemoRouter();
  return (
    <Box sx={{ p: 2 }}>
      <Button
        sx={{ justifyContent: 'flex-start', padding: '8px 11.2px' }}
        startIcon={<SettingsIcon />}
        fullWidth
        variant="text"
        onClick={() => router.navigate('configuracion')}
      >
        Configuración
      </Button>
    </Box>
  );
}

function Dashboard(props) {
  const { window } = props;

  const [session, setSession] = React.useState({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const router = useDemoRouter('/dashboard');
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout
        slots={{
          appTitle: CustomAppTitle,
          sidebarFooter: SettingsButton,
        }}
      >
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
