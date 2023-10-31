import  { useEffect, useState } from 'react';
import simpleParallax from 'simple-parallax-js';
import Introduction from './Introduction';
import StickyNavigationBar from './StickyNavigationBar';
import VisibleWrapper from '../hocs/VisibleWrapper';
import Experience from './Experience';
import Skills from './Skills';
import '../styles/Profile.css';

const Profile: React.FC = () => {
    useEffect(() => {
        const element = document.getElementsByClassName('mamertismo');
        new simpleParallax(element, {scale: 5});
    })

    useEffect(() => {
        console.log('Here!');
        const comment = document.createComment('This is a React comment');
        document.body.appendChild(comment);
    }, []);

    return (
        <>
            <StickyNavigationBar />
            <div className="selfie-wrapper">
                <div className={'selfie'} />
                <Introduction />
            </div>
            <img src={'/mamertismo.jpg'} className='mamertismo' />

            <Experience />
            <VisibleWrapper animation="animate">
                {(isActive) => <Skills isActive={isActive} />}
            </VisibleWrapper>
        </>
    )

}

export default Profile;