class StringBuilder {
    constructor(value) {
        this._value = value;    
    }
    get value() {
        return this._value;
    };
   
    append(value) {
        this._value.push(value);
       
    };

    prepend(value) {
        this._value.unshift(value);
        
    };

    pad(value) {
        this._value.push(value);
        this._value.unshift(value);

    }


}


const builder = new StringBuilder(['.']);

builder.append('^');
console.log(builder.value.join('')); // '.^'

builder.prepend('^');
console.log(builder.value.join('')); // '^.^'

builder.pad('=');
console.log(builder.value.join('')); // '=^.^='