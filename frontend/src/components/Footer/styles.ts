import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0.7rem;
  width: 100%;
  height: 60px;

  background: ${(props) => props.theme.gradients.header};

  color: ${(props) => props.theme.colors.white};

  > p {
    font-style: normal;
    font-weight: 100;
    font-size: 20px;
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
