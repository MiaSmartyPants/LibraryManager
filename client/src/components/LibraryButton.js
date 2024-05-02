import * as React from 'react';
import Button from '@mui/material/Button';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';


export default function LibraryButton({ displayProfile}) {
  return (
      <Button
        onClick={() => displayProfile() }
        variant="contained"
        endIcon={<AutoStoriesIcon />}
      >
       Profile
      </Button>
  );
}