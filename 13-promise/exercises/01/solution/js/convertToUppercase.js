// 1. Írj egy függvényt, `convertToUppercase()` néven, mely paraméterként kap egy tömböt.A függvény visszatérési érték egy Promise.  
// Amennyiben a tömb minden eleme string, és sikeresen nagybetűssé alakíthatók a Promise resolved lesz és visszaad egy új tömböt, 
// ami az eredeti tömb összes elemét nagybetűssé alakítva tartalmazza.  
// Ellenkező esetben a Promise rejected lesz, a visszatérési érték a következő string: 'Error: Not all items in the array are strings!'


// const convertToUppercase = new Promise((resolve, reject) => {
//         let array = [];
//         resolve(array.map(item=>item.toUpperCase))
//         reject('Error: Not all items in the array are strings!')
// })

// convertToUppercase.then();

// export default convertToUppercase;


//const convertToUppercase = (array) => {
//        return new Promise((resolve, reject) => {
//                if( array.some(item => typeof item == 'string')) {
//                        resolve(array.map(modArray => modArray.toLocaleUpperCase()));
//                } else {
//                        reject("Error: Error: Not all items in the array are strings!");
//                }
//                });
//        };
//
//export default convertToUppercase;

const convertToUppercase = (array) => {
        return new Promise((resolve, reject) => {
                if (array.every(item => typeof item == 'string')) {
                        resolve(array.map(item2 => item2.toLocaleUpperCase()))
                } else {
                        reject(new Error('Error: Not all items in the array are strings!'))
                }
        })
}

export default convertToUppercase;