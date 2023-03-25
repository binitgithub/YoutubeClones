import React from 'react';
import {useState, useEffect} from 'react';
import{Box, Stack, Typography } from '@mui/material';
import {Sidebar, Videos} from '../Components';
import {fetchFromAPI} from '../Utils/fetchFromAPI';

const Feed = () => {

const [selectCategory, setSelectCategory] = useState('New');
const [videos, setVideos] = useState([]);

  useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${selectCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectCategory]);

  return (
  
    <Stack sx={{flexDirection:{sx: "culumn", md: "row",}}}>
        <Box sx={{height:{sx:"auto", md:"92vh",}, borderRight:'1px solid #3d3d3d', px:{sx:0, mx:2}}}>

          <Sidebar
          selectCategory ={selectCategory} setSelectCategory={setSelectCategory}
          />
            <Typography className='copyright' variant='body2' sx={{mt:1.5, color:'#fff'}}>
                Copyright Multimedia 2022.
            </Typography>
        </Box>

        <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
              {selectCategory} <span style={{color: '#F31503'}}>Video</span>
          </Typography>
          <Videos videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Feed