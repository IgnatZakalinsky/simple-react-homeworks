import React, {useState} from "react";
import SuperInputText from "./common/SuperInputText/SuperInputText";
import s from "./HW4.module.css";

function HW4() {
    const [text, setText] = useState<string>("");
    const showAlert = () => {
        if (error) {
            alert("введите текст...");
        } else {
            alert(text); // если нет ошибки показать текс
        }
    }
    const error = text ? "" : "error";

    return (
        <div>
            <hr/>
            homeworks 4

            {/*should work (должно работать)*/}
            <SuperInputText
                value={text}
                onChangeText={setText}
                onEnter={showAlert}
                error={error}
                // className={s.blue} // проверьте, рабоет ли смешивание классов
            />
            {/*should work (должно работать)*/}


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            <hr/>
        </div>
    );
}

export default HW4;
