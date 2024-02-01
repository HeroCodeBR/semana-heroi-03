'use client';
import { FormEvent, useRef } from 'react';
import Button from './Button';
import { Input } from './Input';
import { useRouter } from 'next/navigation';

export default function JoinRoom() {
  const name = useRef<HTMLInputElement>(null);
  const id = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleJoinRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      name.current &&
      name.current.value !== '' &&
      id.current &&
      id.current.value !== ''
    ) {
      sessionStorage.setItem('username', name.current.value);
      const roomId = id.current.value;
      window.location.href = `/room/${roomId}`;
    }
  };
  return (
    <>
      <form onSubmit={(e) => handleJoinRoom(e)} className="space-y-8">
        <Input placeholder="Seu nome" type="text" ref={name} />
        <Input placeholder="ID da reunião" type="text" ref={id} />

        <Button title="Entrar" type="submit" />
      </form>
    </>
  );
}
