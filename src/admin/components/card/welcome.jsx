import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import image from '../../resources/Background.png';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { useTheme } from '@mui/material/styles';

const CardWithImage = ({ name }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 277,
        height: 264,
        position: 'relative',
        borderRadius: 5,
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(1)',
        }}
      />

      <CardContent
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <div>
          <Typography
            variant="h5"
            component="div"
            sx={{ color: theme.palette.buttons.color, fontWeight: 'bold' }}
          >
            Welcome
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ color: theme.palette.buttons.color }}
          >
            Nice to see you, {name}!
          </Typography>

          <Typography
            variant="h5"
            component="div"
            sx={{ color: 'black', fontWeight: 'bold' }}
          >
            Back!
          </Typography>
        </div>

        <Link
          href="www.google.com"
          sx={{
            color: theme.palette.buttons.color,
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          Turn on your
          <br /> car
          <ArrowForwardRoundedIcon
            sx={{ marginLeft: '4px', width: '15px', height: '15px' }}
          ></ArrowForwardRoundedIcon>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CardWithImage;
