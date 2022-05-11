import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function groupAvatars() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            <Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        component="img"
        height="300"
        width="200"
        image="/Brittany.png"
        alt="Brittany"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Brittany
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
      </CardContent>
    
    </Card>
    </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        component="img"
        height="300"
        width="300"
        image="/Elizabeth.png"
        alt="Elizabeth"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Elizabeth
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
      </CardContent>
    
    </Card>

          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        component="img"
        height="300"
        width="300"
        image="/Sam.png"
        alt="Sam"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sam
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
      </CardContent>
    
    </Card>

          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>

          <Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        component="img"
        height="300"
        width="300"
        image="/realSteve.png"
        alt="realSteve"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Steve
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
      </CardContent>
    
    </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

