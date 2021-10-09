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

const id = 10;

// getEmpleado( id )
//     .then( empleado => console.log( empleado ) )
//     .catch( err => console.log( err ) );

// getSalario( id )
//     .then( salario => console.log( salario ) )
//     .catch( err => console.log( err ) );

// getEmpleado( id )
//     .then( empleado => {

//         getSalario( id )
//             .then( salario => {
//                 console.log('El empleado:', empleado , 'su salario es:' , salario);
//             })
//             .catch(err => console.log(err));

//     })
//     .catch(err => console.log(err));

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id);
    })
    .then(salario => {
        console.log('El empleado:', nombre , 'su salario es:' , salario);
    })
    .catch(err => console.log(err));