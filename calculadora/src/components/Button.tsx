// src/components/Button.tsx
interface ButtonProps {
  tipo: string;
  digito: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <div className={props.tipo}>
      {props.digito}
    </div>
  );
};