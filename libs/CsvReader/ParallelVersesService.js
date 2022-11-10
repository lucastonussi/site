import parallelVerses from '@/libs/CsvReader/parallel.json'
console.log(parallelVerses)
function parseVerses() {
  let parsedElements = []
  parallelVerses.forEach(element => {
    parsedElements.push(element)
  })
  return parsedElements
}

export {
  parseVerses
}
