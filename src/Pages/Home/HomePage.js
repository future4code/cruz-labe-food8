import React from 'react';
import { useHistory } from 'react-router';
import { goToLogin } from '../../Router/coordinator';
import {DivMaster, ImageInitial} from './Styled'

const HomePage = () => {
  const history = useHistory()
  const go = () => {
    goToLogin(history)
  }
  return (
    <DivMaster>
      <ImageInitial
        src='https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/BEEEAD31-8486-4A4B-AA8C-239F38A9FB65.svg'
        onClick={go}
      >
      </ImageInitial>
    </DivMaster>
  );
}
export default HomePage;