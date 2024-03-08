import { Router } from 'express'
import multer from 'multer';
import { MovimentoImportController } from '../controllers/movimento.controller'
import { container } from 'tsyringe';

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

const movimentoImportController = container.resolve(MovimentoImportController)

movimentosRoutes.post('/import', upload.single('file'), movimentoImportController.handleImportMovimentos)
movimentosRoutes.get('/all', movimentoImportController.handleGetMovimentos)

export { movimentosRoutes }