const router = require('express').Router()


const product=require('../Controller/productController')

router.post('/products',product.addProduct)

router.get('/products/:productId',product.getProduct)

router.get('/products',product.getAllProducts)

router.delete('/products/:productId',product.deleteProduct)







module.exports = router