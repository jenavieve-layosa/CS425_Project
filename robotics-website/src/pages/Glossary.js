// Glossary.js

import React from 'react';
import styled from 'styled-components';

const GlossaryContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const GlossaryTitle = styled.h2`
  color: #3399ff; /* Blue color for the title */
`;

const Term = styled.span`
  color: #3399ff; /* Blue color for terms */
  font-weight: bold;
`;

const Definition = styled.p`
  color: #000000; /* Black color for definitions */
  margin-bottom: 20px;
`;

const Glossary = () => {
  return (
    <GlossaryContainer>
      <GlossaryTitle>Glossary</GlossaryTitle>
      <Definition>
        <Term>Robotics:</Term> The branch of technology that deals with the design, construction, operation, and use of robots.
      </Definition>
      <Definition>
        <Term>Programming:</Term> The process of designing and building an executable computer program to accomplish a specific task.
      </Definition>
      {/* Add more terms and definitions as needed */}
    </GlossaryContainer>
  );
};

export default Glossary;
