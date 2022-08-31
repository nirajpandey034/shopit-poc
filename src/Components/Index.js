import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function Index() {
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus
        nisl ante, posuere varius metus placerat eu. Aliquam viverra sapien et
        volutpat luctus. Nullam in ultrices sem. Vestibulum vitae urna vehicula,
        dictum neque ornare, euismod dui. Etiam ac felis enim. Nam sollicitudin
        sodales mauris ut tincidunt. Phasellus ullamcorper arcu ut erat
        ullamcorper, fermentum porta metus luctus. Nam condimentum justo arcu,
        ac mattis mi pellentesque vel. Ut lacinia quam ut nulla iaculis, at
        aliquam ante eleifend. Nullam sed lacinia odio. Donec cursus metus
        mattis magna pharetra tincidunt. Phasellus aliquam massa in est
        malesuada tempus.
      </Typography>
      <Typography
        variant="body1"
        element="a"
        style={{
          textAlign: 'center',
          color: 'blue',
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
        onClick={() => {
          navigate('/shop');
        }}
      >
        Shop Something
      </Typography>
    </>
  );
}

export default Index;
