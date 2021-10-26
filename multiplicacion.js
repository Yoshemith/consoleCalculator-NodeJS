let multiplicacion = (numeroA,numeroB) => {
    resultado = (numeroA === 0|| numeroB === 0) ? 0 : numeroA*numeroB;
    return resultado;
};

//export default multiplicacion;
module.exports = multiplicacion;