var args = {}
process.argv.slice(2).forEach( param => {
    var values = param.split( '=' )
    var key = values.shift()
    args[ key ] = ( args[ key ] || [] ).concat( values )
} )
