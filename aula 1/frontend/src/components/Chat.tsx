import Image from 'next/image';

export default function Chat() {
  return (
    <div className="   bg-gray-900 px-4 pt-4 md:w-[15%] hidden md:flex rounded-md m-3 h-full">
      <div className="relative h-full w-full">
        <div className="bg-gray-950 rounded p-2">
          <div className="flex items-center text-pink-400 space-x-2">
            <span>Alexia Kattah</span>
            <span>09:15</span>
          </div>
          <div className="mt-5 text-sm">
            <p>text</p>
          </div>
        </div>

        <form action="" className="absolute bottom-2 w-full">
          <div className="flex relative ">
            <input
              type="text"
              name=""
              id=""
              className="px-3 py-2 bg-gray-950 rounded-md w-full"
            />
            <Image
              className="absolute right-2 top-2.5 cursor-pointer"
              src="/send.png"
              width={20}
              height={20}
              alt="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
