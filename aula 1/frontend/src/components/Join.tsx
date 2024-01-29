import { useRef } from 'react';
import Button from './Button';
import { Input } from './Input';

export default function JoinRoom() {
  const name = useRef<HTMLInputElement>(null);
  const id = useRef<HTMLInputElement>(null);
  return (
    <>
      <Input placeholder="Seu nome" type="text" ref={name} />
      <Input placeholder="ID da reunião" type="text" ref={id} />

      <Button title="Entrar" type="button" />
    </>
  );
}
