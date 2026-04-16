import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Componente Button da Calculadora', () => {
  
  it('1. Deve renderizar o botão na tela com o dígito correto', () => {
    render(<Button tipo="numero" digito="7" />);
    const botao = screen.getByText('7');
    expect(botao).toBeInTheDocument();
  });

  it('2. Deve aplicar a classe CSS correta passada pela prop "tipo"', () => {
    const { container } = render(<Button tipo="operador-laranja" digito="+" />);
    // container.firstChild pega a div externa que o componente Button retorna
    expect(container.firstChild).toHaveClass('operador-laranja');
  });

  it('3. Deve exibir o número zero (0) corretamente', () => {
    render(<Button tipo="numero zero" digito="0" />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('4. Deve exibir símbolos e operadores corretamente (ex: "=")', () => {
    render(<Button tipo="igual" digito="=" />);
    expect(screen.getByText('=')).toBeInTheDocument();
  });

  it('5. Garante que o elemento HTML não renderiza vazio quando recebe props', () => {
    render(<Button tipo="numero" digito="9" />);
    const botao = screen.getByText('9');
    expect(botao).not.toBeEmptyDOMElement();
  });

});