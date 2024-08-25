const Video = (props) => {

    console.log(props.name1)
    return (
        <iframe
            width="220"
            height="240"
            name={props.name1}
            src="https://www.youtube.com/embed/pXfDW7jA0b8"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
}

export default Video;
