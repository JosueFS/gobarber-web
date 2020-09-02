import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`

  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;

  ${(props => props.hasError && css`
    border-color: #c53030;
  `)}

  ${(props) => props.isFocused && css`
    color: #FF9000;
    border-color: #FF9000;
  `}

  ${(props) => props.isFilled && css`
    color: #FF9000;
  `}

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    color: #f4ede8;
    flex: 1;
    border: 0;

    &::placeholder {
      color: #666360;
    }

  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #C53030;
    color: #FFF;

    &::before {
      border-color: #C53030 transparent;
    }
  }
`;
