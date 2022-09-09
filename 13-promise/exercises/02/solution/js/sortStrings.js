// 2. Írj egy másik függvényt `sortStrings()` néven, mely paraméterként egy tömböt kap.A függvény visszatérési érték egy Promise.  
// A Promise resolved lesz, amennyiben a tömb minden eleme string, a resolved value az ABC szerinti rendezett tömb.  
// Ha nem minden elem string, akkor a Promise rejected lesz, az Error objektum üzenet szövege:
// 'Error: Not all items in the array are strings!'   
// Ha a sorba rendezés során hiba történik akkor is rejected lesz a Promise, az Error objektum üzenet szövege ebben az esetben:
// 'Error: Something went wrong with sorting words.'

//const sortStrings = (array = ['apa', 'cuka']) => {
//    return new Promise((resolve, reject) => {
//        if (!array.some(item => typeof item !== 'string')) {
//            const modArray = array.sort();
//            resolve(modArray);
//        } else {
//            reject(["Error: Not all items in the array are strings"]);
//        }
//    });
//};

//newPro.then(data).catch(() => new Error = ('Error: Something went wrong with sorting words.'))

//export default sortStrings;

const sortStrings = (array) => {
    return new Promise((resolve, reject) => {
        try {
            array.every(item => typeof item === 'string')
        }
        catch (error) {
            reject(new Error('Error: Something went wrong with sorting words!'))
        }
        if (array.every(item => typeof item === 'string')) {
            try {
                array.sort();
            } catch (error) {
                reject(new Error('Error: Something went wrong with sorting words!'));
            }
        } else {
            reject(new Error('Error: Not all items in the array are strings!'))
        };
        resolve(array.sort())
    })
}


export default sortStrings;
