import React, { FC, ReactText } from 'react';

import '@Styles/index.css';

interface Props {
    inputText: ReactText;
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    label?: React.ReactNode;
    clear?: () => void;
}

const TextAreaInput: FC<Props> = ({ inputText, handleChange, label, clear }) => {
    let clearButton;
    if (clear) {
        clearButton = (
            <button
                onClick={clear}
                className="text-sm self-end bg-[#FFCC03] hover:bg-[#F9D64D] hover:shadow-lg text-gray-800 font-bold py-2 px-6 rounded-full"
            >
                Clear
            </button>
        );
    }

    return (
        <div className="flex flex-col space-y-2">
            <>{label}</>
            <textarea
                className="text-xs font-bold h-20 w-[20rem] form-textarea ring border-none rounded-lg shadow-lg outline-none"
                value={inputText}
                onChange={handleChange}
            />
            {clearButton}
        </div>
    );
};
export default TextAreaInput;
