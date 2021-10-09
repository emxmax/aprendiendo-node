const empleados = [
    {
        id: 1,
        nombre: 'gabriela'
    },
    {
        id: 2,
        nombre: 'luis'
    },
    {
        id: 3,
        nombre: 'max'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id:2,
        salario: 2000
    }
];

const getEmpleado = ( id ) => {
    
    return new Promise(( resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id)?.nombre;

        ( empleado )
            ?resolve( empleado )
            :reject( `Empleado con id ${id} no existe` );
    });

}

const getSalario = ( id ) => {
    
    return new Promise(( resolve, reject) => {
        const salario = salarios.find((s) => s.id === id)?.salario;

        ( salario )
            ?resolve( salario )
            :reject( `Salario con id empleado ${id} no existe` );
    });

}

const getInfoUsuario = async(id) => {
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${empleado} es ${salario}.`;
    }catch(error){
        throw error;
    }
}

const id = 3;

getInfoUsuario(id)
    .then(msg => {
        console.log('HOLA SALIO BIEN');
        console.log(msg);
    })
    .catch(err => {
        console.log('HOLA SALIO MAL');
        console.log(err);
    });

