// const SectionComponent = ({ url }: { url: `${"http" | "https"}://${string}.${string}/${string}` }) => { // url: http://sdfsdsdsddsd.dsds

type SizesType = "sm" | "md" | "lg" | "xl"
type NumbersType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

const SectionComponent = ({ bootstrapGrid }: { bootstrapGrid: `col-${SizesType}-${NumbersType}`}) => { // url: http://sdfsdsdsddsd.dsds
    return (
        <div className={` ${bootstrapGrid}`}>
            Hello world...
        </div>
    );
};

export default SectionComponent;