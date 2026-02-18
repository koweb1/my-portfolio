
type buttonProps = {
    style: React.CSSProperties;
}
export default function Practice({style} : buttonProps){
    return(
        <button style={style}>Click me</button>
    );
}