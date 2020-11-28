function getMethods(obj) {
    var props = [];
    var obj = myObj;
    do {
        props = props.concat(Object.getOwnPropertyNames(obj));
    } while (obj = Object.getPrototypeOf(obj));
    
    const propss = props.sort().filter(function(e, i, arr) { 
        if (e!=arr[i+1] && typeof myObj[e] == 'function') return true;
    });
}