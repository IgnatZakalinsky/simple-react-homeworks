import React from "react";
import AlternativeMessageClasses from './AlternativeMessage.module.css'

type alternativeType = {
    info: string
}

function AlternativeMessage(props: alternativeType) {
    return (
        <div className={AlternativeMessageClasses.AlternativeMessage}>
            {props.info}
        </div>
    );
}

export default AlternativeMessage;
