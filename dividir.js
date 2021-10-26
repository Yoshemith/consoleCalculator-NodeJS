let dividir = (numeroA,numeroB) => {
    resultado = (numeroA === 0|| numeroB === 0) ? "No se puede dividir por cero" : numeroA/numeroB;
    return resultado;
};

//export default dividir;
module.exports = dividir;