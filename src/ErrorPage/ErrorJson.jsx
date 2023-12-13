'use client'
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from "../Animation - 1702340604480.json";
const LottiePi = () => {
    return (
        <div>
            <Player
                autoplay
                loop
                src={animationData}
                style={{ height: '100%', width: '100%' }}
            >
            </Player>
        </div>
    );
};

export default LottiePi;