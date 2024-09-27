import { ComponentProps, ElementType } from "react";

type AsProp<C extends ElementType> = {
    as?: C;
};

type PolymorphicComponentProps<C extends ElementType> = AsProp<C> & Omit<ComponentProps<C>, "as">;

const ButtonComponent = <C extends ElementType>({ as, className, ...restProps }: PolymorphicComponentProps<C>) => {
    const Component = as || 'button';
    return <Component {...restProps} className={`custom-class-1 ${className}`} />;
};

export default ButtonComponent;