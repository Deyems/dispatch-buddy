import React from 'react'
import styled from 'styled-components'
import BrandLogo from "../../assets/icons/Logo.jsx"
function Logo({fillText, fillIcon}) {
  return (
      <LogoStyle>
      <BrandLogo fillText={fillText} fillIcon={fillIcon} />
    </LogoStyle>
  )
}

export default Logo;

const LogoStyle = styled.div`
  width: 12rem;
  margin: 0 auto 1rem;
  svg {
    width: 100%;
  }
`;