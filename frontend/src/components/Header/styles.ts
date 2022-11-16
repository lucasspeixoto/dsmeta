import { mixins } from '@styles/abstracts/mixins';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.7rem;
  width: 100%;
  height: 220px;

  background: ${(props) => props.theme.gradients.header};

  > img {
    margin-top: 0.1rem;
    ${mixins.noSelect}
  }

  > * {
    color: ${(props) => props.theme.colors.white};
  }

  > h1 {
    margin-top: 1rem;
  }

  > p {
    font-style: normal;
    font-weight: 100;
    font-size: 14px;
    text-align: center;

    a:link,
    a:visited {
      color: ${(props) => props.theme.colors.white};
      margin-left: 0.3rem;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
      font-weight: 200;
    }
  }
`;
