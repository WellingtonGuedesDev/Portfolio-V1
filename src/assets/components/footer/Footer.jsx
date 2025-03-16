import { IoIosArrowRoundForward } from "react-icons/io";
import { colors } from '../../styles/colors';
import { ThemeContext } from '../../../ThemeContext';
import { useContext } from 'react';


const Footer = () => {
    const { theme } = useContext(ThemeContext);
    const currentColor = colors[theme];

    return (
        <>
            <footer id="contato">
                <h2 className="text-5xl font-bold antialiased mb-4">Vamos entrar em contato</h2>
                <p>HMU for work, coffee chats, advice, or LMK about your favourite animes</p>
                <div class="socials flex gap-2 my-12 ">
                    <a href="#" className="flex gap-1 items-center text-xl">
                        <IoIosArrowRoundForward className={`text-2xl text-[${currentColor.primary}] hover:text-[${currentColor.hover}]`} />
                        Linkedin
                    </a>
                    <a href="#" className="flex gap-1 items-center text-xl">
                        <IoIosArrowRoundForward className={`text-2xl text-[${currentColor.primary}] hover:text-[${currentColor.hover}]`} />
                        Email
                    </a>
                    <a href="#" className="flex gap-1 items-center text-xl">
                        <IoIosArrowRoundForward className={`text-2xl text-[${currentColor.primary}] hover:text-[${currentColor.hover}]`} />
                        GitHub
                    </a>
                </div>
                <div class="copyright mb-8">
                    <p className="mb-4">Desenvolvido e codado por Wellington Guedes ♥️</p>
                    <p id="caption">© Wellington Guedes 2025</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
