import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub,SiLeetcode } from "react-icons/si";
import Select from "react-select";
import { themeOptions } from "../utils/themeOptions";
import { useTheme } from "../context/ThemeContext";
const Footer = () => {
	const [value, setValue] = useState({});
	const { setTheme ,theme}=useTheme();
	const handleChange = (e) => {
		setTheme(e.value);
		localStorage.setItem("theme", JSON.stringify(e.value));
	};

	return (
		<div className='footerSection'>
            <div className='footerSectionLinks'>
                <FaLinkedin />
                <SiGithub />
                <SiLeetcode />
            </div>
			<div className='themesButton'>
				<Select
					onChange={handleChange}
                    options={themeOptions}
					menuPlacement="top"
					defaultValue={{ label: theme.label, value: theme }}
					styles={{
						control:styles => ({...styles,backgroundColor:theme.background}),
						menu: styles => ({ ...styles, backgroundColor: theme.background }),
						option: (styles, { isFocused }) => {
							return {
								...styles,
								backgroundColor: (!isFocused) ? theme.background : theme.textColor,
								color: (!isFocused) ? theme.textColor : theme.background,
								cursor:'pointer'
							}
						}
					}}
				/>
			</div>
		</div>
	);
};

export default Footer;
