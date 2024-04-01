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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.gif';
import p6 from '../../assets/p6.jpg';
import p7 from '../../assets/p7.jpg';
import p8 from '../../assets/p8.gif';
import p9 from '../../assets/p9.jpg';
import p10 from '../../assets/p10.gif';
import p11 from '../../assets/p11.png';
import p12 from '../../assets/p12.jpg';

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

export default function CombinedComponents() {
const history = useHistory();

const handleReadClick = () => {
    history.push('/LogIn');
};

const [devices, setDevices] = React.useState(() => ['laptop']);

const handleDevices = (
    _event: React.MouseEvent<HTMLElement>,
    newDevices: string[],
) => {
    if (newDevices.length) {
    setDevices(newDevices);
    }
};

return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden'}}>
    <AppBar position="fixed" sx={{ width: '100%' }}>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: 2 }}
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
            Новости
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

        <Button sx={{ marginLeft: '20px' }} color="inherit" onClick={handleReadClick}>Войти</Button>
        </Toolbar>
    </AppBar>

    <Box sx={{ marginTop: '64px' }}> 
        <ImageList 
        sx={{ 
            width: '100%', 
            height: 'calc(100vh - 64px)',  
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
        }}
        style={{ gap: '15px', rowGap: '20px' }} 
        >
        {itemData.map((item) => (
            <ImageListItem 
            key={item.img} 
            cols={1} 
            style={{ marginBottom: '20px', width: '25%', maxWidth: '20%' }} 
            >
            <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{ width: '100%' }}
            />
            <ImageListItemBar
    title={item.title}
    subtitle={item.author}
    actionIcon={
        <IconButton
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            aria-label={`info about ${item.title}`}
            onClick={() => window.open(item.img, '_blank')}
        >
            <InfoIcon />
        </IconButton>
    }
/>
            </ImageListItem>
        ))}
        </ImageList>
    </Box>
    </Box>
);
}


const itemData = [
{
    img: p1,
    title: 'AngryCat',
    author: '@fufel',
    rows: 2,
    cols: 2,
    featured: true,
},
{
    img: p2,
    title: 'wallpaper',
    author: '@aestethic',
},
{
    img: p3,
    title: 'pain',
    author: '@fufrik',
},
{
    img: p4,
    title: 'FOX',
    author: '@Alia_93',
    cols: 2,
},
{
    img: p5,
    title: 'boi',
    author: '@mauzymice',
    cols: 2,
},
{
    img: p6,
    title: 'Mr. Kat',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
},
{
    img: p7,
    title: 'autumn_cat',
    author: '@LemanRys',
},
{
    img: p8,
    title: 'lel',
    author: '@Biba',
},
{
    img: p9,
    title: 'My_friend',
    author: '@Stephenson 2-18',
    rows: 2,
    cols: 2,
},
{
    img: p10,
    title: 'Furry plane',
    author: '@AirPlane',
},
{
    img: p11,
    title: 'Arcade',
    author: '@Backrooms',
},
{
    img: p12,
    title: 'remnants of the moon',
    author: '@VA-11 Hall-A',
    cols: 2,
},
];
