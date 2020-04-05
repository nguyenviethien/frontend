import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './header/header';
import CallToAction from './pages/landing/call-to-action';
import MoveOnline from './pages/landing/move-online';
import ApplyFundForm from './pages/landing/apply-fund-form';
import SponsorsForm from './pages/landing/sponsors-form';
import { StylesSchema } from '../shared/enums/styles';

const AppWrapper = styled.div`
  background-color: ${StylesSchema.White};
  height: 100%;
`;
 
const App: React.FC = ()  => {
  return (
    <AppWrapper>
      <Header />
      <CallToAction />
      <MoveOnline />
      <ApplyFundForm />
      <SponsorsForm />
    </AppWrapper>
  );
}

export default App;
