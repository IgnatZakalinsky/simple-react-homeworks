import React, { ChangeEvent, useState } from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";

// спросить:
// [нет] как объединить классы. Объединяются через раз. Наверное это баг кодсэндбокса
// не понял про children в СуперБаттоне

function HW4() {
  const [text, setText] = useState<string>("");
  const error = text ? "" : "error";
  const showAlert = () => {
    if (error) {
      alert("введите текст...");
    } else {
      alert(text); // если нет ошибки показать текст
    }
  };

  const [checked, setChecked] = useState<boolean>(false);
  const testOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setChecked(e.currentTarget.checked);

  return (
    <div>
      <hr />
      <header>Homework 4</header>

      <div className={s.column}>
        {/*should work (должно работать)*/}
        <SuperInputText
          value={text}
          onChangeText={setText}
          onEnter={showAlert}
          error={error}
          className={s.blue} // проверьте, рабоет ли смешивание классов
        />

        {/*should work (должно работать)*/}
        <SuperButton
          red // пропсу с булевым значением не обязательно указывать true
          onClick={showAlert}
        >
          Alert! {/*// название кнопки попадёт в children*/}
        </SuperButton>

        {/*should work (должно работать)*/}
        <SuperCheckbox checked={checked} onChangeChecked={setChecked}>
          some text {/*// этот текст попадёт в children*/}
        </SuperCheckbox>

        {/*// onChange тоже должен работать*/}
        <SuperCheckbox checked={checked} onChange={testOnChange} />
      </div>

      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperInputText/>*/}
      {/*<AlternativeSuperButton/>*/}
      {/*<AlternativeSuperCheckbox/>*/}
      <hr />
    </div>
  );
}

export default HW4;
