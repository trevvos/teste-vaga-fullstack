

export function convertToDate(dateString: string){

    if(!dateString) {
        throw new Error('A string de data está vazia.')
    }

    const year = parseInt(dateString.substring(0, 4), 10)
    const month = parseInt(dateString.substring(4, 6), 10) - 1
    const day = parseInt(dateString.substring(6, 8), 10)

    const date = new Date(Date.UTC(year, month, day))

    const isValidDate = date.getUTCFullYear() === year && date.getUTCMonth() === month && date.getUTCDate() === day

    if(!isValidDate){
        throw new Error('Data inválida.')
    }

    return date
}