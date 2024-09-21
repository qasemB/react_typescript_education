import { ComponentType } from "react";

const Container = ({Component} : {Component: ComponentType<{name:string}>}) => {
    return (
        <div>
            <Component name={"qasem"}/>
        </div>
    );
};

export default Container;