import React from 'react';
import {Box, CardContent, CardMedia, Typography} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import {demoProfilePicture} from '../Utils/Constant';

const ChannelCard = ({channelDetail}) => {
  return (
    <Box sx={{boxShadow:'none', borderRadius:'20px', display:'flex', justifyContent:'center', alignItems:'center', width:{sx:'356px', md:'320'}, height:'326px', margin:'auto'}}>
        <Link to={`/channel/${channelDetail?.id?.channelid}`}>
            <CardContent sx={{display: 'flex' , flexDirection: 'column', justifyContent: 'center', textAlign:'center', color:'#fff'}}>
                <CardMedia image={channelDetail?.snippet?.thumbnail?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{borderRadius:'50%', height:'180px', width:'180px', mb:2, border:'1px solid #e3e3e3'}} />
                <Typography variant='h6'>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{fontSize: 12, color:'grey', ml: '5px'}}/>
                </Typography>
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard