import { ForwardRefRenderFunction, forwardRef } from 'react';
interface IInput {
  placeholder: string;
  type: string;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { placeholder, type, ...rest },
  ref,
) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest}
        className="px-3 py-2 bg-gray-950 rounded-md w-full"
      />
    </div>
  );
};
export const Input = forwardRef(InputBase);
