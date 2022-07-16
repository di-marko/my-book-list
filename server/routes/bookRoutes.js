const router = require('express').Router();
const { books } = require("./../data.json");

// GET ALL BOOKS     =>    /api/books
router.route('/').get((req , res) => {
    res.status(200).json({
        status : 'success' ,
        books 
    })
})

// GET SINGLE BOOK BY ID    =>     /api/books/:id
router.route('/:id').get((req ,res) => {
    const { id } = req.params;
    if(!id){
        return res.status(400).json({
            status : 'fail' ,
            message : 'Please provide book id'
        })
    }
    const book = books.filter(b => b.id === Number(id))[0];
    return res.status(200).json({
        status : 'success' ,
        book 
    })
})

module.exports = router;