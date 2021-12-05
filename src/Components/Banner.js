import React from 'react';
import styled from 'styled-components';
import bannerImg from '../images/banner.png';


const SectionBanner = styled.section`
  margin-top: 80px;
  height: 210px
`
const ImgBanner = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`


export const BannerSection = () => (
  <SectionBanner>
    <ImgBanner src={bannerImg} alt="Баннер"/>
  </SectionBanner>
) 