import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Library from '../Library';


export default function ProfileButtons({ displayLibrary}) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={() => displayLibrary() }
        variant="contained"
        endIcon={<AutoStoriesIcon />}
      >
        Browse Books!
      </Button>
      <Button variant="contained" endIcon={<EditNoteIcon />}>
        Add To The Public Collection
      </Button>
    </Stack>
  );
}
