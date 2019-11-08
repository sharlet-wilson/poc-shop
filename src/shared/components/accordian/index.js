import React, { useState } from 'react';
import styled from 'styled-components';

export default ({ filters }) => {
  const [activeFilter, setActiveFilter] = useState(null)

  const Container = styled.ul`
    padding: 0px;
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
    border-radius: 4px;
    width: 80%;
    margin: auto;
    min-width: 170px;
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
  const InnerPanel = styled(Panel)`
    background-color: lightgray;
  `;
  const Icon = styled.img`
    position: absolute;
    top: 4px;
    right: 12px;
    @media (max-width: 425px) {
      height: 20px;
      top: 10px;
    }
  `;

  const togglePanel = (id) => {
    (activeFilter === id) ? setActiveFilter(null) : setActiveFilter(id);
  }

  return (<Container>
    <AccordianTitle>Filters</AccordianTitle>
    {filters.map(filter => (
      <React.Fragment key={filter.id}>
        <AccordianButton onClick={() => togglePanel(filter.id)}>
          {!filter.types && <input type="checkbox" value={filter.name} />}
          {filter.name}
          {filter.types &&
            (activeFilter === filter.id
              ? <Icon src="/public/icons/FontAwesome47.svg"></Icon>
              : <Icon src="/public/icons/Icon.svg"></Icon>)}
        </AccordianButton>
        {filter.types && <InnerPanel show={activeFilter === filter.id}>
          {filter.types.map(type => <AccordianButton key={type}>
            <input type="checkbox" value={type} />{type}
          </AccordianButton>)}
        </InnerPanel>}
      </React.Fragment>
    ))}
  </Container>)
}