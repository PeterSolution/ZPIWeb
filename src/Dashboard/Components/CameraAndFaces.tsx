import React from 'react';
import PiotrFace from './PiotrFace.png';

interface Props {
    userid: number;
}

const FaceImage: React.FC<Props> = ({ userid }) => {

    return (
        <div>
            <h2>Ostatnia twoja twarz</h2>
            <img
                src={PiotrFace}
                alt="Twarz"
                style={{ width: '45vw', height: '68vh', borderRadius: '8px' }}
            />
        </div>
    );
};

export default FaceImage;
