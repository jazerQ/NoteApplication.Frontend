function Hello(props)
{
    return (
    <div>
        <h2>Привет, {props.name}</h2>
        <h4>{props.prop}</h4>
    </div>
    );
}
export default Hello;