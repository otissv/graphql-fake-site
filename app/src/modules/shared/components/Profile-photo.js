import React from 'react';
import Img from 'react-uikit-img';
import photo from '../images/profile-photo-placeholder.png'

const ProfilePhoto = (props) => <Img
  className='uk-border-circle'
  width='30px' 
  height='30px' 
  src={props.photo ? props.photo : photo}
/>;

export default ProfilePhoto;
