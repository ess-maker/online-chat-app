import React from 'react';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
  styles?: string;
  type?: ButtonType;
  Isloding?: boolean;
  
}

const Button = (props: Props) => {
  return (
    <button
      role='button'
      className={`${props.styles} px-4 py-2  bg-slate-900   text-white hover:bg-slate-600  w-full rounded-lg font-bold  ${props.Isloding ? 'hover:cursor-not-allowed' :'hover:bg-indigo-300'} duration-[500ms,800ms]`}
      type={props?.type}
      disabled={props.Isloding}
      onClick={props?.handleClick}
    >
      {props.Isloding ? (
        <div className="flex items-center justify-center m-[10px]">
          <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
          <div className="ml-2">Processing...</div>
        </div>
      ) : (
        props.children
      )}
    </button>
  );
};

export default Button;