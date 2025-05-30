import React, { useState } from "react";
import Select from "react-select/base";
import { themeOptions } from "../utils/themeOptions";


const Footer = () => {
    const [value, setValue] = useState({});
    const handelChange = (e) => {
        console.log(e);
    }

    const handleMenuOpen = () => {
  console.log("Menu opened");
};
    return (
        <div className="footerSection">
            <div className="footerSectionLinks">Links</div>
            <div className="footerSectionThemes">
                <Select
                    value={value}
                    onChange={handelChange}
                    options={themeOptions}
                    menuPlacement='top'
                    onMenuOpen={handleMenuOpen}
                />
 
            </div>
        </div>
    )
}

export default Footer;