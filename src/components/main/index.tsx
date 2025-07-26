import type {ReactNode} from "react";

interface MainProps {
    children:ReactNode;
}

export const Main:React.FC<MainProps> = ({children}) => {
    return (
        <div className="d-flex justify-content-center">
            {children}
        </div>
    );
};