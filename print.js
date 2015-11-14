function printJSON( obj ) {
    console.log( JSON.stringify( obj, null, 2 ) );
};

module.exports = {
    JSON: printJSON
};

