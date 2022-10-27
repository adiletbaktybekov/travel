import React, {FC} from 'react';

interface IChildrenProps {
    children: any,
}

const Layout: FC<IChildrenProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;