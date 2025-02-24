interface Image {
    className?: string;
    src: string;
    alt?: string;
    height?: number;
    width?: number;
    id?: string;
}

const ImageWithBasePath = (props: Image) => {
    const fullSrc = `${"/"}${props.src}`;
    return (
        <img
            className={props.className}
            src={fullSrc}
            height={props.height}
            alt={props.alt}
            width={props.width}
            id={props.id}
        />
    );
};

export default ImageWithBasePath;
