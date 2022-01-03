import React, { useState, useRef } from "react";

const InputSample = () => {
  const [inputs, setInput] = useState({
    name: "",
    nickname: "",
  });

  const nameInput = useRef();

  const onChange = (e) => {
    setInput({ ...inputs, [e.target.name]: e.target.value });
  };
  const onRest = () => {
    setInput({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };
  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={inputs.name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={inputs.nickname}
      />
      <button onClick={onRest}>초기화</button>
      <div>
        <b>
          값 : {inputs.name}({inputs.nickname})
        </b>
      </div>
    </div>
  );
};

export default InputSample;
