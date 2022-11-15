import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 220px;

  background: linear-gradient(180deg, #102347 0%, #181818 100%);

  > img {
    margin-top: 0.5rem;
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

    a:link,
    a:visited {
      color: ${(props) => props.theme.colors.white};
      margin-left: 0.7rem;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;
