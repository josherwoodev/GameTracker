export default function Error(props) {
    const {type, children} = props;

    return (<div>{type === "404" ? 'The page you tried to reach could not be found.' : children ? children : 'An unexpected error has occurred.'}</div>);
}