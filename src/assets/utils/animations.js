import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export const leftAnimation = (ref, delay) => {
    gsap.fromTo(
        ref.current,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 2, ease: "power1", delay: delay }
    );
}

export const bottomAnimation = (ref, delay) => {
    gsap.fromTo(
        ref.current,
        { y: 400, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power1", delay: delay }
    )
}

export const titleAnimation = (ref, start, end) => {
    gsap.fromTo(
        ref.current,
        { x: -200, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 0.5, ease: "power1",
            scrollTrigger: {
                trigger: ref.current, // Elemento que ativa a animação
                start: `top ${start}%`, // Começa quando o topo do elemento atinge 80% da viewport
                end: `top ${end}%`, // Termina quando o topo atinge 20% da viewport
                scrub: true, // Animação acompanha o scroll suavemente
                markers: true, // Mostra marcadores visuais para debug
            }
        },
    )
}