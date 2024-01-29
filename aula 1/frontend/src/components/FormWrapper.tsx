'use client';
import { useState } from 'react';
import CreateRoom from './Create';
import JoinRoom from './Join';

export default function FormWrapper() {
  const [selectedRoom, setSelectedRoom] = useState<'create' | 'join'>('join');
  const handleSelectRoom = (room: 'create' | 'join') => {
    setSelectedRoom(room);
  };
  return (
    <div className="max-w-[580px] w-full ">
      <div className="flex mx-auto items-center space-x-6 text-center ">
        <span
          className={`cursor-pointer w-1/2  p-4 ${
            selectedRoom === 'join' &&
            ' bg-secondary rounded-t-lg  text-primary'
          }`}
          onClick={() => handleSelectRoom('join')}
        >
          Ingressar
        </span>
        <span
          className={`cursor-pointer w-1/2  p-4 ${
            selectedRoom === 'create' &&
            ' bg-secondary rounded-t-lg  text-primary'
          }`}
          onClick={() => handleSelectRoom('create')}
        >
          Nova reunião
        </span>
      </div>
      <div className="space-y-8 bg-secondary p-10 rounded-b-lg">
        <RoomSelector selectedRoom={selectedRoom} />
      </div>
    </div>
  );
}

const RoomSelector = ({ selectedRoom }: { selectedRoom: string }) => {
  switch (selectedRoom) {
    case 'create':
      return <CreateRoom />;
    case 'join':
      return <JoinRoom />;
    default:
      return <JoinRoom />;
  }
};
