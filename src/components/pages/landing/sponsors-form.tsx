import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import { TextField, SuccessText } from '../../elements/form-control';
import { PrimaryButton } from '../../elements/buttons';
import { StylesSchema } from '../../../shared/enums/styles';
import FormsService from '../../../shared/services/forms.service';
import { SponsorApplication } from '../../../shared/interfaces/forms.interface';

interface SponsorHelpOption {
  value: string;
  label: string;
}

const SponsorTitle = styled.div`
  background-color: ${StylesSchema.Yellow};
  color: ${StylesSchema.Black};
  font-size: 2rem;
  font-weight: 1000;
  padding: 2rem 0;
  text-align: center;
  width: 100%;
`;

const SponsorsFormWrapper = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
`;

const ReactSelect = React.lazy(() => import('react-select'));

const Select = styled(ReactSelect)`
  margin: 0.5rem;
  width: 100%;
  
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const options: SponsorHelpOption[] = [
  { value: 'finance', label: 'Finance' },
  { value: 'resources, logistics, or operations', label: 'Resources, Logistics, or Operations' },
  { value: 'talent', label: 'Talent' },
  { value: 'training', label: 'Training' },
];

const defaultForm = {
  companyName: '', 
  companyEmail: '', 
  contributionArea: '',
};

const SponsorsForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sponsorForm, setSponsorForm] = useState<SponsorApplication>(defaultForm);

  const onSelect = (e: SponsorHelpOption[]) => {
    const contributionArea = e.map(({ value }) => value).join(',');
    setSponsorForm({
      ...sponsorForm,
      contributionArea
    })
  };

  const submitForm = async () => {
    const responseStatus = await FormsService.postSponsorApplication(sponsorForm);
    if (responseStatus === 200) {
      setSponsorForm(defaultForm);
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <SponsorTitle id='beASponsor'>
        BE A SPONSOR
      </SponsorTitle>
      <SponsorsFormWrapper>
        <TextField 
          placeholder='Company name'
          onChange={(e) => setSponsorForm({
            ...sponsorForm,
            companyName: e.target.value,
          })}
        />
        <TextField 
          placeholder='Contact' 
          onChange={(e) => setSponsorForm({
            ...sponsorForm,
            companyEmail: e.target.value,
          })}
        />
        <span>What would you like to contribute?</span>
        <Suspense fallback={<div>Loading Options...</div>}>
          <Select
            options={options}
            isMulti
            onChange={onSelect}
          />
        </Suspense>
        <PrimaryButton
          type='button'
          onClick={submitForm}
        >
          Be a Sponsor
        </PrimaryButton>
        {
          isSubmitted && (
            <SuccessText>
              Thank you for. Your response has been submitted. We will be in touch with you shortly to discuss how you can support this initiative.
            </SuccessText>
          )
        }
        <h3>We will be in touch with you shortly</h3>
      </SponsorsFormWrapper>
    </>
  );
}

export default SponsorsForm;
