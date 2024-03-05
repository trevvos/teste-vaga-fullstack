import { convertToDate } from "../../../../utils/validations/date.utils"

describe("Convert to Date", () => {
    it('should convet a valid date string to a Date object', () => {
        const dateString = '20240511'

        const result = convertToDate(dateString)

        expect(result.getUTCFullYear()).toBe(2024)
        expect(result.getUTCMonth()).toBe(4)
        expect(result.getUTCDate()).toBe(11)
    })

    it('should throw an error for an empty date string', () => {
        const dateString = ''

        expect(() => convertToDate(dateString)).toThrow('A string de data está vazia.')
    })

    it('should throw an error for an invalid date string', () => {
        const dateString = '20240231'

        expect(() => convertToDate(dateString)).toThrow('Data inválida.')
    })
})