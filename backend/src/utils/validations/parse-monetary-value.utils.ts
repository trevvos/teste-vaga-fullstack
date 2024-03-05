export function parseMonetaryValue(value: string) {
    const cleanValue = value.replace(/[^\d.,]/g, '').replace(',', '.')

    return parseFloat(cleanValue)
}