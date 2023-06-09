const express = require('express');
const router = express.Router()
const pool = require('../pool')

router.get('/', ( req, res ) => {
    console.log( `GET Feedback from server` );
    pool.query('SELECT * FROM "feedback"')
        .then( result => {
            res.send(result.rows);
        })
        .catch ( err => {
            console.log(`Error when trying to GET Feedbacks ${err}`);
            res.sendStatus(500)
        });
});

module.exports = router

