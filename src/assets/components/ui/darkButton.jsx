import React, { useContext } from 'react';
import { ThemeContext } from '../../../ThemeContext';
import { FaRegMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { colors } from '../../styles/colors';



const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const currentColor = colors[theme];

    return (
        <>
            <label class="inline-flex items-center cursor-pointer ml-4">
                <input type="checkbox" value="" class="sr-only peer" onChange={toggleTheme} checked={theme === 'dark'} />
                    <div class={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-${currentColor.primary} dark:peer-checked:bg-${currentColor.primary} mr-2`}></div>

                    {theme === 'dark' ? <FaRegMoon /> : <IoIosSunny />}
            </label>
        </>
    );
};

export default ThemeToggleButton;