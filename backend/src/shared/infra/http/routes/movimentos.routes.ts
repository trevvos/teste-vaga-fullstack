import { Router } from 'express'
import multer from 'multer';
import { MovimentoImportController } from '../controllers/movimento-import.controller'

const movimentosRoutes = Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

const movimentoImportController = new MovimentoImportController()

movimentosRoutes.post('/import', upload.single('file'), movimentoImportController.handle)

export { movimentosRoutes }