import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LaptopIcon from '@mui/icons-material/Laptop';
import TvIcon from '@mui/icons-material/Tv';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactsIcon from '@mui/icons-material/Contacts';
import PhotoIcon from '@mui/icons-material/Photo';
import ForumIcon from '@mui/icons-material/Forum';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import SupportIcon from '@mui/icons-material/Support';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function AppBarComponent() {
  const history = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [devices, setDevices] = React.useState(() => ['laptop']);

  const handleDevices = (
    _event: React.MouseEvent<HTMLElement>,
    newDevices: string[],
  ) => {
    if (newDevices.length) {
      setDevices(newDevices);
    }
  };

  const handleReadClick = () => {
    history.push('/LogIn');
  };

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  const handleInfoClick = () => {
    history.push('/TechnicalWork');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ width: '100%' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
          </Typography>

          <ToggleButtonGroup
            value={devices}
            onChange={handleDevices}
            aria-label="device"
          >
            <ToggleButton value="laptop" aria-label="laptop">
              <LaptopIcon />
            </ToggleButton>
            <ToggleButton value="tv" aria-label="tv">
              <TvIcon />
            </ToggleButton>
            <ToggleButton value="phone" aria-label="phone">
              <PhoneAndroidIcon />
            </ToggleButton>
          </ToggleButtonGroup>

          <Button sx={{ marginLeft: '10px' }} color="inherit" onClick={handleReadClick}>Войти</Button>

          <Drawer 
    anchor="left" 
    open={isDrawerOpen} 
    onClose={toggleDrawer(false)}
    sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            background: 'linear-gradient(to bottom, #9AB9EF, rgba(26, 26, 26, 1 ))',
            opacity: 1,
        },
    }}
>
            <div
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
              <List>
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                  <ListItemText primary="Профиль" />
                </ListItem>
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><MailIcon /></ListItemIcon>
                  <ListItemText primary="Сообщения" />
                </ListItem>
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><ForumIcon /></ListItemIcon>
                  <ListItemText primary="Треды" />
                </ListItem>
                <Divider />
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><ContactsIcon /></ListItemIcon>
                  <ListItemText primary="Контакты" />
                </ListItem>
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><PhotoIcon /></ListItemIcon>
                  <ListItemText primary="Фотографии" />
                </ListItem>
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><VideoCallIcon /></ListItemIcon>
                  <ListItemText primary="Видео" />
                </ListItem>
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><SettingsIcon /></ListItemIcon>
                  <ListItemText primary="Настройки" />
                </ListItem>
                <Divider />
                <ListItem button onClick={handleInfoClick}>
                <ListItemIcon><InfoIcon /></ListItemIcon>
                <ListItemText primary="Информация" />
                </ListItem>
                <ListItem button onClick={handleInfoClick}>
                  <ListItemIcon><SupportIcon /></ListItemIcon>
                  <ListItemText primary="Поддержка" />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
