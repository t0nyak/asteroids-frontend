import { MouseEventHandler } from "react";
import "./DateButton.css";

function DateButton({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  return <button onClick={onClick}>Send</button>;
}

export default DateButton;
