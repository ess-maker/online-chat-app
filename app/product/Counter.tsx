import { CustomButton } from "@/components/commen";
import React, { useReducer } from "react";

type State = {
  count: number;
};

type Action = {
  type: string;
  payload?: number;
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState: State = {
  count: 0,
};

const counterReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case INCREMENT:
        return { ...state, count: state.count + (action.payload || 1) };
      case DECREMENT:
        if (state.count > 1) {
          return { ...state, count: state.count - (action.payload || 1) };
        } else {
          return state;
        }
      default:
        return state;
    }
  };

const Counter: React.FunctionComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = (value: number) => {
    dispatch({ type: INCREMENT, payload: value });
  };

  const decrement = (value: number) => {
    dispatch({ type: DECREMENT, payload: value });
  };


  return (
    <div className="flex flex-row items-center gap-12">
      <div className="flex flex-row items-center">
        <button
          className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
          onClick={() => decrement(1)}
        >
          -
        </button>
        <span className="py-4 px-6 rounded-lg">{state.count}</span>
        <button
          className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
          onClick={() => increment(1)}
        >
          +
        </button>
      </div>
      <CustomButton styles="!px-10 ">
       إضافة للسلة
      </CustomButton>
    </div>
  );
};

export default Counter;