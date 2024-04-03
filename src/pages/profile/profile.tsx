import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

const ProfileContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
});

const ProfileAvatar = styled(Avatar)({
  width: '100px',
  height: '100px',
  marginBottom: '15px',
});

const ProfileInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
});

const ProfileButton = styled(Button)({
  marginTop: '15px',
});

const ProfilePage = () => {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
      <Box 
        style={{ 
          backgroundImage: `url('path_to_your_background_image.jpg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ProfileContainer>
          <ProfileAvatar alt="User Avatar" src="path_to_avatar_image.jpg" />

          <Typography variant="h6" component="div" gutterBottom>
            Имя Фамилия
          </Typography>

          <ProfileInfo>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Город, Страна
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Дата рождения: 01.01.2000
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              E-mail: example@example.com
            </Typography>
          </ProfileInfo>

          <Divider style={{ width: '100%' }} />

          <ProfileButton variant="contained" color="primary">
            Редактировать профиль
          </ProfileButton>
        </ProfileContainer>
      </Box>
    </Box>
  );
};

export default ProfilePage;
