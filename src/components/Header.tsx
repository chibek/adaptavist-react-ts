import React, {FC} from "react";

import "@Styles/index.css";

const Header: FC = () => {

    return (
        <header className="bg-white shadow-lg flex items-center lg:justify-between h-12 px-10">
            <span className="text-xl py-4 font-bold"> Adaptavist </span>
        </header>
    );
};

export default Header;
