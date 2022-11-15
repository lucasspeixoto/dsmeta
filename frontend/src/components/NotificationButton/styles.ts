import styled from 'styled-components';

export const Container = styled.div`
  height: 45px;
  width: 45px;
  background: ${(props) => props.theme.colors.tertiary};
  border: 1px solid ${(props) => props.theme.colors.warning};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  > button {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    background: ${(props) => props.theme.colors.tertiary};

    > img {
      width: 19px;
    }
  }
`;
