import styled, { css } from "styled-components";

export const CheckoutContainer = styled.section`
  max-width: 70rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 65% 1fr;
  gap: 2rem;
  
  h1, h2 {
    font-size: ${(props) => props.theme["text-5"]};
    line-height: 1.3;
    margin-bottom: 0.9375rem;
  }
`;

type CheckoutCardProps = {
  mb?: string | number;
};

export const CheckoutCard = styled.div<CheckoutCardProps>`
  background-color: ${(props) => props.theme['base-100']};
  border-radius: 6px;
  padding: 2.5rem;

  ${(props) => props.mb && css`
    margin-bottom: ${props.mb}
  `}
`;

export const CheckoutCardInformation = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    span {
      color: ${(props) => props.theme['base-700']};
      font-weight: 400;
      font-size: ${(props) => props.theme['text-4']};
      line-height: 1.3;
    }

    small {
      color: ${(props) => props.theme['base-600']};
      font-weight: 400;
      font-size: ${(props) => props.theme['text-3']};
      line-height: 1.3;
    }
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.75rem;
  }
`

type BasicInputProps = {
  w: string | number;
}

export const BasicInput = styled.input<BasicInputProps>`
  width: ${(props) => props.w};
  border: ${(props) => `1px solid ${props.theme['base-300']}`};
  border-radius: 4px;
  padding: 0.75rem;
  background-color: ${(props) => props.theme['base-200']};
  font-size: ${(props) => props.theme['text-3']};
  line-height: 1.3;

  &::placeholder {
    color: ${(props) => props.theme['base-500']};
  }
`