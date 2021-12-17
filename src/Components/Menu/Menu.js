import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { BannerSection } from './Banner';
import { useFetch } from '../Hooks/useFetch';

const MenuStyled = styled.main`
  background-color: #F7F7F7;
  margin-left: 380px;
`
const SectionMenu = styled.section`
  padding: 30px;

`

const Loading = styled.div`
background-color: #289b00;
color: #FFF;
text-align: center;
position: absolute;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 50px;
`


export const Menu = ( {setOpenItem}) => {

  const { data } = useFetch('DB.json');
  const dbMenu = data;
  
  return (
    <React.Fragment>
    <BannerSection />
    <MenuStyled>

      {data ? 
        <>
        <SectionMenu>
          <h2>Бургеры</h2>
          <ListItem 
            itemList={dbMenu.burger}
            setOpenItem={setOpenItem}
          />
        </SectionMenu>

        <SectionMenu>
          <h2>Закуски / Напитки</h2>
          <ListItem 
            itemList={dbMenu.other}
            setOpenItem={setOpenItem}
          />
        </SectionMenu>
        </> :
        <Loading>Loading....</Loading>

      }
    </MenuStyled>
    </React.Fragment>
  );
}