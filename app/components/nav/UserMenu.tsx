'use client'

import { useCallback, useState } from "react";

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen=useCallback(()=>{},[])
    return ( <>
    <div className="relative z-30">
        <div onClick={toggleOpen}></div>
    </div>
    </> );
}
 
export default UserMenu;