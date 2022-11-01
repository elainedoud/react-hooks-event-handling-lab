// Code EyesOnMe Component Here
function EyesOnMe (){
    return (
        <div>
            <btn onFocus={Focus} onBlur={Blur}>'Eyes on me'</btn>
        </div>
    )
}

function Focus (){
console.log("Good!")
}

function Blur (){
console.log("Hey! Eyes on me!")
}

export default EyesOnMe