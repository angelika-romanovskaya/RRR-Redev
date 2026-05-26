export const ObjectComp = ({obj}) => {
    return (
        <ol>
            {Object.keys(obj).map((item, index) => <li key={index}>{item} : {obj[item]}</li>)}
        </ol>
    )
}