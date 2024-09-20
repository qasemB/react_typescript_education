import { ComponentProps } from "react";
// import ClassComponent from "./ClassComponent";

// type ConfirmButtonType = Omit<ComponentProps<"button">, "title"> & {
//     title: ReactNode
// }
type ConfirmButtonType = ComponentProps<"button"> 

const ConfirmButton = ({className, ...rest}: ConfirmButtonType) => {
    return (
        <button className={`some-optional-styles ${className}`} {...rest}>
            ثبت و تایید نهایی
        </button>
    );
};

export default ConfirmButton;