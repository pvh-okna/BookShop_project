import React, {ReactNode} from 'react';
import { WrapperMain } from './style';

export type MainT = {
    children?: ReactNode
}
const Main = ({children}:MainT) => {
    return (
        <WrapperMain>

            {children}
        </WrapperMain>
    );
};

export default Main;