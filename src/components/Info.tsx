
type InfoType<T> = { name: string, skills: T[] }

const Info = <T extends { id: number }>({ name }: InfoType<T>) => {
    return (
        <div>
            name = {name}
        </div>
    );
};

export default Info;