// Falsy values: undefined, null, 0, '', NaN
    // Truthy values: Not falsy values

    var height;

    if (height) {
        console.log('Variable is defined');
    } else {
        console.log('Variable has NOT been defined');
    }

    // Here, height is undefined.  -- falsy value
    // If return ('Variable has NOT been defined')

    // So, if we insert height = 23 before if, --truthy value


    var height;
    height = 23;
    if (height) {
        console.log('Variable is defined');
    } else {
        console.log('Variable has NOT been defined');
    }

    // If return ('Variable is defined')
    // But if height = 0;, it will return  ('Variable has NOT been defined')

    var height;
    height = 0;
    if (height) {
        console.log('Variable is defined');
    } else {
        console.log('Variable has NOT been defined');
    }


    var height;
    height = 0;
    if (height || height === 0) { // height == 0)
        console.log('Variable is defined');
    } else {
        console.log('Variable has NOT been defined');
    }
    // if return ('Variable is defined')

    // PS: '==' only compare the value, '===' also compare the type and value

    console.log(23 == '23')  //--- ture
    console.log(23 === '23') // ---false
    //如何存储数据
    var a=0.1;
    var b=0.2;
    console.log(a+b)