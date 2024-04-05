const ThumbnailsComponent = ({ obj, setView }) => {
    return (
        <div style={{ marginRight: "8px" }}>
            <img
                loading="lazy"
                src={obj.images.preview_gif.url}
                onClick={() => setView(obj)}
            />
        </div>
    );
};

export default ThumbnailsComponent;
