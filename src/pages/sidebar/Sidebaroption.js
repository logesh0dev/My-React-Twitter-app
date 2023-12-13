import './Sidebaroption.css'

const Sidebaroptions=({active, text, Icon})=>{

    return (
        <div className="sidebaroptions" >
            <Icon></Icon>
            <h2>{text}</h2>
        </div>
    )

}

export default Sidebaroptions;