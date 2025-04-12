import {ReactNode} from "react";

type ButtonProps = {
    children?: ReactNode;
    btnType?: 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-info' | 'btn-light' | 'btn-dark' | 'btn-close';
    onButtonClicked?: () => void;
}

function Button({children, btnType = 'btn-primary', onButtonClicked}: ButtonProps) {
    return (
        <button onClick={onButtonClicked} type="button" className={`btn ${btnType}`}>{children}</button>
    )
}

export default Button
