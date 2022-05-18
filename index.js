function findMatching(array, string) {
    return array.filter(function(el) {
        return el.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(array, string) {
    return array.filter(function(el) {
        return el.startsWith(string)
    })
}

function matchName(array, str) {
    return array.filter( el => el.name === str ) 
}