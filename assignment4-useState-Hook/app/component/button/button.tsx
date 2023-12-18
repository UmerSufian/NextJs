
"use client"
import { ButtonProps } from "@/types/componentTypes";

export default function Button(props: ButtonProps) {
  return (
    <button
      className="bg-green-500 text-white font-bold py-2 px-4 rounded"
      onClick={props.onClickHandler}
    >
      {props.title}
    </button>
  );
}
