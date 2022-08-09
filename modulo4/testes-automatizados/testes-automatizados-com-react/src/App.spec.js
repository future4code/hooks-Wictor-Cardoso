import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Página do contador", () => { 

  test("Botão de soma realiza uma soma, de zero para 1.", () => {
    const { getByText } = render(<App />);
    const botaoSomar = getByText(/Somar/); // Se não houver elemento, getBy->erro; query->null
    // throw new Error();
    userEvent.click(botaoSomar);
    const contador = getByText(/Contador/i);    
    expect(contador).toHaveTextContent("Contador: 1");
  });

  test("Botão de soma realiza uma soma, de zero para 2.", () => {
    const { getByText } = render(<App />);
    const botaoSomar = getByText(/Somar/); // Se não houver elemento, getBy->erro; query->null   
    const contador = getByText(/Contador/i);    
    userEvent.click(botaoSomar);
    userEvent.click(botaoSomar);
    expect(contador).toHaveTextContent("Contador: 2");
  });
  
  test("Verifica se inicia o contador com valor 0.", () => {
    const { getByText } = render(<App />);
    // const botaoSomar = getByText(/Somar/); // Se não houver elemento, getBy->erro; query->null   
    const contador = getByText(/Contador/i);
    expect(contador).toHaveTextContent("Contador: 0");
  });

  test("Botão de soma realiza uma soma, de zero para 5.", () => {
    const { getByText } = render(<App />);
    const botaoSomar = getByText(/Somar/); // Se não houver elemento, getBy->erro; query->null   
    const contador = getByText(/Contador/i);    
    userEvent.click(botaoSomar);
    userEvent.click(botaoSomar);
    userEvent.click(botaoSomar);
    userEvent.click(botaoSomar);
    userEvent.click(botaoSomar);
    expect(contador).toHaveTextContent("Contador: 5");
  });





  // test.todo("Contador inicia com valor 0");
  // test.todo("Depois de apertar 'Somar', contador não diminui");

  
});

/**
 *
 * (get|find|query)(All|)By(Text|LabelText|PlaceholderText|TestId)
 *
 */
