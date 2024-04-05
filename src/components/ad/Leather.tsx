import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Typography, Paper, IconButton, ButtonBase } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import leImage from '../../assets/leather.jpg';

interface NearbyNotificationProps {
    username: string;
    distance: string;
    phoneNumber: string;
}

const StyledNotification = styled(Paper)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    padding: theme.spacing(3),
    zIndex: 9999,
    border: `2px solid #4CAF50`,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    animation: '$fadeIn 0.5s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
}));

const TextContainer = styled('div')({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
});

const BoldTypography = styled(Typography)({
    fontWeight: 'bold',
});

const ImageContainer = styled('div')({
    position: 'relative',
    marginTop: '16px',
    width: '300px',
    height: '170px',
    overflow: 'hidden',
    border: '2px solid #4CAF50',
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

const PhoneNumberContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginTop: '8px',
});

const PhoneIconStyled = styled(PhoneIcon)({
    marginRight: '8px',
});

const NearbyNotification: React.FC<NearbyNotificationProps> = () => {
    const [isVisible, setIsVisible] = useState(false);
    const username = 'Анастейша';
    const phoneNumber = '+7 (123) 456-78-90';
    const distance = '500м';

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleImageClick = () => {
        window.open('https://youtu.be/dQw4w9WgXcQ?t=1', '_blank');
    };

    if (!isVisible) {
        return null;
    }

    return (
        <StyledNotification elevation={3}>
            <CloseButton onClick={handleClose}>
                <CloseIcon />
            </CloseButton>
            <TextContainer>
                <BoldTypography variant="subtitle1">{username}, {distance} от вас</BoldTypography>
                <PhoneNumberContainer>
                    <PhoneIconStyled />
                    <Typography variant="body2" color="textSecondary">{phoneNumber}</Typography>
                </PhoneNumberContainer>
            </TextContainer>
            <ImageContainer>
                <Image src={leImage} alt="leather.jpg" />
                <InvisibleButton onClick={handleImageClick} />
            </ImageContainer>
        </StyledNotification>
    );
};

export default NearbyNotification;
