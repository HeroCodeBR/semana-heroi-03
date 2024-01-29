interface IButton {
  title: string;
  type: 'button' | 'submit' | 'reset';
}
export default function Button({ title, type }: IButton) {
  return (
    <button
      className="bg-primary w-full text-black font-medium rounded-md py-2"
      type={type}
    >
      <span>{title}</span>
    </button>
  );
}
