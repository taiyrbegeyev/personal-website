import React from 'react';
import PropTypes from 'prop-types';
import GithubIcon from 'icons/Github';
import LinkedIcon from 'icons/LinkedIn';
import InstagramIcon from 'icons/Instagram';
import TelegramIcon from 'icons/Telegram';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Github':
      return <GithubIcon />;
    case 'LinkedIn':
      return <LinkedIcon />;
    case 'Instagram':
      return <InstagramIcon />;
    case 'Telegram':
      return <TelegramIcon />;
    default:
      return <GithubIcon />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
