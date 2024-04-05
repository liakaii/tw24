import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Typography, Paper, IconButton, ButtonBase } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import tileImage from '../../assets/ad1.png';

interface Plitka {
    productName: string;
    price: string;
    shopLink: string;
}


const StyledNotification = styled(Paper)(({ theme }) => ({
    position: 'fixed',
    bottom: '-400px',  // Стартовая позиция за пределами экрана
    left: '20px',       // Стартовая позиция с левой стороны экрана
    padding: theme.spacing(3),
    zIndex: 9999,
    border: `0px solid #FFC107`,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    animation: '$slideIn 0.5s ease-in-out forwards', // Анимация для выезда
    display: 'flex',
    alignItems: 'center',
    transition: 'bottom 0.5s ease-in-out',  // Плавное движение
    '&.visible': {
        bottom: theme.spacing(2),  // Конечная позиция после выезда
    },
    '@keyframes slideIn': {
        from: {
            bottom: '-300px',
        },
        to: {
            bottom: '2%',
        },
    },
}));




const CloseButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
}));

const TextContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '20px', // Add some margin to separate text from image
});

const BoldTypography = styled(Typography)({
    fontWeight: 'bold',
});

const ImageContainer = styled('div')({
    position: 'relative',
    width: '150px',
    height: '270px',
    overflow: 'hidden',
    border: '0px solid #FFC107',
});

const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

const InvisibleButton = styled(ButtonBase)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    zIndex: 1,
});

const ShopLinkContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginTop: '8px',
});

// const ShoppingBasketIconStyled = styled(ShoppingBasketIcon)({
//     marginRight: '8px',
// });

const TileNotification: React.FC<Plitka> = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 7000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleImageClick = () => {
        window.open('https://example.com/shop', '_blank');
    };

    return (
        <StyledNotification elevation={3} className={isVisible ? 'visible' : ''}>
            <CloseButton onClick={handleClose}>
                <CloseIcon />
            </CloseButton>
            <ImageContainer>
                <Image src={tileImage} alt="ad1.jpg" />
                <InvisibleButton onClick={handleImageClick} />
            </ImageContainer>
            <TextContainer>
            <BoldTypography variant="subtitle1">Тротуарная плитка в</BoldTypography>
                <BoldTypography variant="subtitle1" >Перми</BoldTypography>
                <Typography variant="body2" color="textSecondary">каменьщик.мд</Typography>
                <div className="spacer"></div>
                <BoldTypography variant="body2" ><span style={{ fontStyle: 'italic' }}>Молодая, ласковая,</span></BoldTypography>
                <BoldTypography variant="body2" ><span style={{ fontStyle: 'italic' }}>ухоженная девушка,</span></BoldTypography>
                <BoldTypography variant="body2" ><span style={{ fontStyle: 'italic' }}>без комплексов, продам</span></BoldTypography>
                <BoldTypography variant="body2" ><span style={{ fontStyle: 'italic' }}>плитку, но дорого</span></BoldTypography>

                <ShopLinkContainer>
                    {/* <ShoppingBasketIconStyled /> */}
                    <Typography variant="body2" color="primary" onClick={handleImageClick}>Купить сейчас</Typography>
                </ShopLinkContainer>
                <ShopLinkContainer>
                    <div className="spacer"></div>
                    <Typography variant="body2" color="textSecondary">От вас - 1.5км</Typography>
                </ShopLinkContainer>
            </TextContainer>
        </StyledNotification>
    );
};

export default TileNotification;
