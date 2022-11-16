//import { mixins } from '@styles/abstracts/mixins';
import styled from 'styled-components';

export const SalesContainer = styled.section`
  padding: 40px 5px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0px 20px;
  margin: 0 auto;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 10px;
  padding: 30px 10px;

  > h2 {
    color: #676fff;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const FormContainer = styled.div`
  margin-bottom: 16px;
  max-width: 300px;

  > input {
    width: 100%;
    height: 46px;
    background-color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.grey};
    border-radius: 5px;
    color: ${(props) => props.theme.colors.white};
    opacity: 0.7;
    padding: 0 20px;
    font-size: 18px;
  }
`;
