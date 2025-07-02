import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Styles from './styles/style.module.scss'; // 換成你的檔名
import math from './math.jpg';

export default function AnimationWrapper() {
    const wrapperRef = useRef(null);
    const heroRef = useRef(null);
    const sliderRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(heroRef.current, { height: '0%' }, { height: '100%', duration: 1, ease: 'power2.inOut' }).fromTo(heroRef.current, { width: '80%' }, { width: '100%', duration: 1.2, ease: 'power2.inOut' }).fromTo(sliderRef.current, { x: '-100%' }, { x: '0%', duration: 1, ease: 'power2.inOut' }, '-=1.2').fromTo(wrapperRef.current, { opacity: 1 }, { opacity: 0, duration: 0.3 }).fromTo(wrapperRef.current, { zIndex: 1 }, { zIndex: -10, duration: 0.3 });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className={Styles.animation_wrapper} ref={wrapperRef}>
            <section className={Styles.animation} ref={animationRef}>
                <div className={Styles.hero} ref={heroRef}>
                    <img src={math} alt="math image" />
                </div>
            </section>
            <div className={Styles.slider} ref={sliderRef}></div>
        </section>
    );
}
