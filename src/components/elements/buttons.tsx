import styled from "styled-components";
import { StylesSchema } from "../../shared/enums/styles";

export const PrimaryButton = styled.button `
  background-color: ${StylesSchema.Yellow};
  border: 0;
  color: ${StylesSchema.Black};
  font-family: 'Raleway', sans-serif;
  font-size: 1.2rem;
  padding: 1rem 0;
  width: 100%;

  &:active, &:focus {
    outline-color: ${StylesSchema.Yellow}; 
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;
