import * as React from 'react';

export interface ISidebarProps {

}

const Sidebar: React.SFC<ISidebarProps> = () => {

    return (
        <>

            <div className="sidenav">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

        </>
    )

}

export default Sidebar;
