const Cell = ({id,cell,cells,setCells,turn, setTurn,won}) => {

const handleClick = (e) => {
    if(won)
{
    return
}
    const taken = (cell.value !== "" ? false : true);

    if(!taken){
        const newArray =  cells.map((cell, index)=>{
            if(index === id && cell === ""){
                    
                    if(turn === "O"){
                        document.getElementById(index).style.color = "blue"
                        setTurn("X")
                    }else{
                        document.getElementById(index).style.color = "red"
                        setTurn("O")
                    }
                    return turn;
                }else{
                    return cell
                }
            })
            setCells(newArray)
    }
}


    return (
        <div className="square" id={id} onClick={ handleClick}>{cell}</div>
    )
}

export default Cell