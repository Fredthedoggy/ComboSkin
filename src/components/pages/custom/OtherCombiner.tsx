import React, { useEffect, useState } from 'react';
import ViewPage from '../../ViewPage';
import otherMerge, { customMarkup } from '../../../effects/otherMerge';

const steve =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==';
export default function OtherCombiner({ json }: { json: customMarkup }) {
    const [skinData, setSkinData] = useState<string>(steve);

    const [inputs, setInputs] = useState(
        Array.from(Array(json.skins).keys()).map((n) => localStorage.getItem('skin' + n) ?? ''),
    );

    useEffect(() => {
        async function effect() {
            setSkinData((await otherMerge(json, ...inputs.map((input) => 'https://crafatar.com/skins/' + input))) ?? steve);
        }

        effect().then();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        async function effect() {
            setInputs(Array.from(Array(json.skins).keys()).map((n) => localStorage.getItem('skin' + n) ?? ''));
            setSkinData((await otherMerge(json, ...inputs.map((input) => 'https://crafatar.com/skins/' + input))) ?? steve);
        }

        effect().then();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [json]);

    return (
        <ViewPage
            name={'Custom Combination'}
            updateSkin={async () => {
                setSkinData(
                    (await otherMerge(json, ...inputs.map((input) => 'https://crafatar.com/skins/' + input))) ?? steve,
                );
            }}
            inputs={inputs}
            setInputs={setInputs}
            skinData={skinData}
        />
    );
}
