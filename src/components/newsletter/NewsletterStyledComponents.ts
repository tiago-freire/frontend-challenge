import styled from "styled-components";

export const NewsletterFormContainer = styled.section`
  display: flex;
  background-color: var(--light-gray);
  flex-direction: column;
  padding: 1rem 0 2rem;
  align-content: center;
  justify-content: center;

  h3 {
    font-weight: 600;
    :after {
      display: none;
    }
  }

  input,
  button {
    height: 48px;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  label {
    display: flex;
    flex-direction: column;
    span {
      margin-top: 0.5rem;
      color: var(--danger);
      font-size: 0.75rem;
    }
  }

  input {
    width: 280px;
    border-radius: 5px;
    border: none;
    padding: 1rem;
  }
`;

export const NewsletterResult = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0;
  }

  p {
    font-size: 0.7rem;
  }

  button {
    width: 328px;
    margin-top: 1rem;
  }
`;
