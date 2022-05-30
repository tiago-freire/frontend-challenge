import { useRef, useState } from "react";
import { Button, SectionTitle } from "../common/LayoutStyledComponents";
import { NewsletterForm, NewsletterFormContainer, NewsletterResult } from "./NewsletterStyledComponents";

const Newsletter = () => {
  const inputName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = inputName.current?.value;
    const email = inputEmail.current?.value;

    const validName = name && name.length > 0;
    const validEmail =
      email &&
      email.length > 0 &&
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    const validForm = validName && validEmail;

    if (!validName) {
      setErrorName("Preencha com seu nome completo");
    } else {
      setErrorName("");
    }

    if (!validEmail) {
      setErrorEmail("Preencha com um e-mail válido");
    } else {
      setErrorEmail("");
    }

    if (!validForm) {
      return;
    }

    setLoading(true);

    fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
      method: "POST",
      body: JSON.stringify({ name, email }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSuccess(true);
      })
      .catch((error) => {
        alert(`Erro na inscrição da newsletter: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleReset = () => {
    setSuccess(false);
    if (inputName.current) {
      inputName.current.focus();
    }
  };

  return (
    <NewsletterFormContainer>
      {!success && (
        <>
          <SectionTitle center>Participe de nossa news com promoções e novidades!</SectionTitle>
          <NewsletterForm onSubmit={handleSubmit}>
            <label htmlFor="name">
              <input type="text" id="name" ref={inputName} placeholder="Digite seu nome" />
              {errorName && <span>{errorName}</span>}
            </label>
            <label htmlFor="email">
              <input type="email" id="email" ref={inputEmail} placeholder="Digite seu email" />
              {errorEmail && <span>{errorEmail}</span>}
            </label>
            <Button type="submit">{loading ? "Salvando..." : "Eu quero!"}</Button>
          </NewsletterForm>
        </>
      )}
      {success && (
        <NewsletterResult>
          <h4>Seu email foi cadastrado com sucesso!</h4>
          <p>A partir de agora você receberá as novidades e ofertas exclusivas.</p>
          <Button onClick={handleReset}>Cadastrar novo e-mail</Button>
        </NewsletterResult>
      )}
    </NewsletterFormContainer>
  );
};

export default Newsletter;
