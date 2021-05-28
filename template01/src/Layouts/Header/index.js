import React from 'react';
import { TopHero } from '../../Components';
import imgOne from '../../Assets/Images/bg-4.jpg';

const index = () => {
    return (
        <div>
            <TopHero heroImage={imgOne} title='Test Page'/>
        </div>
    )
}

export default index;
