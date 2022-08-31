import React from 'react';
import { Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

function ContactUs() {
  return (
    <>
      <Typography varant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        lacinia, nisl eget vestibulum maximus, massa enim luctus lectus, sed
        aliquam nulla ipsum non est. Quisque dapibus orci ac congue ultricies.
        Mauris mauris nisi, laoreet ac convallis sit amet, pulvinar et est. Sed
        a pretium ipsum, ut blandit felis. Proin pharetra consequat ipsum, non
        semper sapien. Suspendisse urna diam, semper vel lorem eu, lacinia
        laoreet mi. Nam ipsum lacus, lacinia in velit non, vulputate scelerisque
        massa. Mauris arcu lorem, accumsan eget lobortis vitae, varius sit amet
        tellus. Etiam viverra at ex vitae imperdiet. Pellentesque vitae faucibus
        risus. Maecenas viverra lectus ut varius pulvinar. Etiam quis ornare
        ante. Suspendisse potenti. Pellentesque vel nulla vitae quam feugiat
        sollicitudin. Proin pretium neque sit amet velit hendrerit porta.
        Quisque accumsan tellus a tincidunt congue. Phasellus quis euismod
        risus, eget vulputate sem. Sed mollis felis nunc, lobortis elementum
        nisi tincidunt ut. Integer sapien dui, porta vel porttitor vel, tempus
        in diam. Mauris metus purus, vulputate sollicitudin justo sed, viverra
        commodo odio. Etiam sed metus eget neque sodales iaculis. Suspendisse
        faucibus elit in mollis lobortis. Nulla facilisi. Fusce id magna vitae
        ipsum scelerisque rutrum.
      </Typography>
      <EmailIcon
        style={{ textAlign: 'center', cursor: 'pointer', marginTop: '1rem' }}
        fontSize="large"
        onClick={() => {
          window.open(`mailto:${process.env.REACT_APP_PERSONAL_MAIL}`);
        }}
      />
    </>
  );
}

export default ContactUs;
