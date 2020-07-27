import React from "react";

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairsCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteAffair = () => {};// need to fix

    return (
        <div>
            // show some text

            <button onClick={deleteAffair}>X</button>
        </div>
    );
}

export default Affair;
