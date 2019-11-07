import React, { useState } from 'react';
import styled from 'styled-components';

export default () => {
  const [activeFilter, setActiveFilter] = useState(0)

  const Container = styled.ul`
    padding: 0px;
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
    border-radius: 4px;
    width: 80%;
    margin: auto;
  `;
  const AccordianItem = styled.li`
    padding: 12px 15px;
    font-size: 14px;
    color: #ffffff;
    text-decoration: none;
    list-style-type: none;
    position: relative;
  `;
  const AccordianTitle = styled(AccordianItem)`
    border: 1px solid #428bca;
    border-top-left-radius: 4px;
    background-color: #428bca;
    border-top-right-radius: 4px;
  `;
  const AccordianButton = styled(AccordianItem)`
    background-color: #ffffff;
    color: #555555;
    cursor: pointer;
    border-bottom: 1px solid #dddddd;
  `;
  const Panel = styled.ul`
    padding: 0;
    display: none;
    background-color: white;
    overflow: hidden;
    display: ${props => props.show ? "block" : "none"};
  `;
  const PlusIcon = styled.img`
    position: absolute;
    top: 4px;
    right: 12px;
  `;

  const togglePanel = () => {
    console.log("clicked-------------");
  }

  return (<Container>
    <AccordianTitle>Filters</AccordianTitle>
    <AccordianButton onClick={togglePanel}>Section 1
      <PlusIcon src="/public/icons/Icon.svg"></PlusIcon>
    </AccordianButton>
    <Panel show>
      <AccordianButton>Men</AccordianButton>
      <AccordianButton>Women</AccordianButton>
      <AccordianButton>Kitchen</AccordianButton>
      <AccordianButton>Mobiles/Laptops</AccordianButton>
    </Panel>
    <AccordianButton>Section 2
      <Panel>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </Panel>
    </AccordianButton>
  </Container>)
}