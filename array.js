Array.prototype.concatAll = function() {
    var results = [];
    this.forEach( function( subArray ) {
        subArray.forEach( function( value ) {
            results.push( value );
        });
    });

    return results;
};

Array.prototype.concatMap = function( retArrayFn ) {
    return this
        .map( function( item ) {
            return retArrayFn( item );
        })
        .concatAll();
};

Array.prototype.reduce = function(combiner, initialValue) {
    var counter, accumulatedValue;

    if (this.length === 0) {
        return this;
    }
    else {
        if (arguments.length === 1) {
            counter = 1;
            accumulatedValue = this[0];
        }
        else if (arguments.length >= 2) {
            counter = 0;
            accumulatedValue = initialValue;
        }
        else {
            throw "Invalid arguments.";
        }

        while(counter < this.length) {
            accumulatedValue = combiner(accumulatedValue, this[counter]);
            counter++;
        }

        return [accumulatedValue];
    }
}

Array.zip = function( left, right, combinerFn ) {
    var counter, results = [];

    for( counter = 0; counter < Math.min( left.length, right.length ); counter++ ) {
        results.push( combinerFn( left[counter], right[counter] ) );
    }

    return results;
};
