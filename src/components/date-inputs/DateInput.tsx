import { ChangeEventHandler } from "react";
import "./DateInput.css";

function DateInput({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}): JSX.Element {
  // const [text, setText] = useState<string>("");

  // const onChange = (val: string) => setText(val);

  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      // value={text}
    ></input>
  );
}

export default DateInput;
