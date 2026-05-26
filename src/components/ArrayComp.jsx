export const ArrayComp = ({array}) => {
    return (
        <ul>{
            array.map((item, index) => <li key={index}>{item}</li>)
        }</ul>
    )
}