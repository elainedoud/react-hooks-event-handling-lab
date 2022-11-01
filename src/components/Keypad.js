// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <input type="password" onChange={Password} />
        </div>
    )
}

function Password (){
console.log("Entering password...")
}

export default Keypad;