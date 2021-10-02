import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from '@fortawesome/free-solid-svg-icons';

export default function Masks() {
    return (
        <div css={tw`m-3 mx-auto my-auto flex flex-col`}>
            <span css={tw`text-center mx-auto`}>
                <FontAwesomeIcon icon={faHammer} size={'4x'} />
            </span>
            <span css={tw`text-center mx-auto font-medium text-2xl`}>Coming Soon™</span>
        </div>
    );
}
