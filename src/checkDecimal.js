function checkDecimal(value){
    var decimal = (value - Math.floor(value)) !== 0
    return (decimal)
}

export default checkDecimal