
const getUsuarioByID = (id, callback) => {
    
    const usuario = {
        id,
        nombre: 'Fernando'
    }

    setTimeout( () => {
        callback(usuario)
    }, 3000);

}

getUsuarioByID (10, ({nombre}) => {
    console.log(`Hola ${nombre}`);
});