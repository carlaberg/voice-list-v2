import React from 'react';
import {
  SpinnerWrapper, SpinnerOuter, SpinnerInner, SpinnerText
} from './styles';
import Portal from '../Portal';

interface SpinnerProps {
  loading?: boolean;
}

const Spinner = ({ loading }: SpinnerProps) => {
  return (
    <Portal selector="#modal">
      <SpinnerWrapper loading={loading}>
        <SpinnerOuter>
          <SpinnerInner />
          <SpinnerText>Loading...</SpinnerText>
        </SpinnerOuter>
      </SpinnerWrapper>
    </Portal>
  )
};

export default Spinner;
