module.exports = {
    getProducts: (req, res, next) => {
        const db = req.app.get('db')
        
        db.get_product()
            .then(dbResponse => res.status(200).send(dbResponse))
            .catch(err => {
                res.status(500).send({errorMessage: 'Something went wrong!'})
            })
    },

    addProduct: (req, res, next) => {
        const db = req.app.get('db')
        const { image, name, price } = req.body;
        console.log(image, name, price)
        db.add_product([image, name, price])
            .then(data => res.status(200).send(data))
    },

    updateProduct: (req, res, next) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { image, name, price } = req.body

        db.update_product([id, image, name, price])
            .then(data => res.status(200).send(data))
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        // console.log(id)
        db.delete_product(+id)
            .then(data => res.status(200).send(data))
            .catch(err => {
                res.sendStatus(500)
                console.log(err)
            })
    },
}