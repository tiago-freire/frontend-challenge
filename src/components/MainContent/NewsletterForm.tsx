import { useRef } from "react";
import styled from "styled-components";

const BaseNewsletterForm = ({ className }: { className?: string }) => {
  const inputName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = inputName.current?.value;
    const email = inputEmail.current?.value;

    if (!name || !email) {
      alert("Preencha todos os campos!");
      return;
    }

    fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
      method: "POST",
      body: JSON.stringify({ name, email }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <h3>Participe de nossas news com promoções e novidades!</h3>
      <label htmlFor="name">
        <input type="text" id="name" ref={inputName} placeholder="Digite seu nome" />
      </label>
      <label htmlFor="email">
        <input type="email" id="email" ref={inputEmail} placeholder="Digite seu email" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

const NewsletterForm = styled(BaseNewsletterForm)`
  display: flex;
  background-color: var(--light-gray);
`;

export default NewsletterForm;
