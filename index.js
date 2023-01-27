const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat() {
    return cats.push('Ralph')
}

function destructivelyPrependCat() {
    return cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat () {
    return cats.shift()
}

function appendCat() {
    return cats.concat('Broom')
}

function prependCat () {
    const newCats = ['Arnold',...cats]
    return newCats
}

function removeLastCat() {
    return cats.slice(0, 2)

}

function removeFirstCat() {
    return cats.slice(-2)
}