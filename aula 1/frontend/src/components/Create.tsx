import { useRef } from 'react';
import Button from './Button';
import { Input } from './Input';

export default function CreateRoom() {
  const name = useRef<HTMLInputElement>(null);

  return (
    <>
      <Input placeholder="Seu nome" type="text" ref={name} />

      <Button title="Entrar" type="button" />
    </>
  );
}
