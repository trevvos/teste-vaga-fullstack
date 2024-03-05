import CsvImportMovimentosUseCase from "../../modules/movimentos/use-cases/import-movimentos/csv-import-movimentos-use-case";

async function importMov() {
    
const csv = new CsvImportMovimentosUseCase()

const filePath = 'data.csv'
const mov = await csv.execute(filePath)

console.log(mov)
}

importMov()