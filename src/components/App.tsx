import React, { FC, useEffect, useState } from 'react';
import TextAreaInput from '@Components/TextAreaInput';

interface objectWord {
    name: string;
    count: number;
}

enum order {
    ASCENDING = 'ASC',
    DESCENDING = 'DESC',
    DEFAULT = 'DEFAULT',
}

const App: FC = () => {
    const [inputText, setInputText] = useState('');
    const [counterWords, setCounterWords] = useState<any>({});
    const [listOfWords, setlistOfWord] = useState<objectWord[]>([]);
    const [initialListOfWords, setInitialListOfWord] = useState<objectWord[]>([]);

    const handleChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
    };
    const clear = () => {
        setInputText('');
    };

    const orderBy = (key: string) => {};

    useEffect(() => {
        const mapWords = inputText
            .toLowerCase()
            .replace(/(\r\n|\n|\r)/gm, ' ')
            .split(' ')
            .filter(item => item.trim() !== '')
            .reduce((acc: any, word) => ({ ...acc, [word]: acc[word] ? acc[word] + 1 : 1 }), {});
        setCounterWords(mapWords);
    }, [inputText]);

    useEffect(() => {
        setlistOfWord(state => []);
        for (const key of Object.keys(counterWords)) {
            setlistOfWord(state => [
                ...state,
                {
                    name: key,
                    count: counterWords[key],
                },
            ]);
        }
        setInitialListOfWord([...listOfWords]);
    }, [counterWords]);

    return (
        <div className="h-full w-full flex  flex-col space-y-4 items-center justify-center bg-gray-200">
            <TextAreaInput inputText={inputText} handleChange={handleChangeInput} clear={clear} />
            <table className="bg-blue-200 space-y-2 rounded-lg border border-gray-200 table-auto inline-block shadow-2xl">
                <thead>
                    <tr className="bg-red-200">
                        <th className="p-3">
                            Words
                        </th>
                        <th className="p-3">count</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfWords.map((itemWord, index) => {
                        return (
                            <tr key={index} className="text-center">
                                <td className="p-3">{itemWord.name}</td>
                                <td className="p-3 text-center">
                                    <span className="text-center">{itemWord.count}</span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default App;
