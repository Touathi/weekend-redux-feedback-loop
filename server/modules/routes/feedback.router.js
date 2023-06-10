const express = require('express');
const router = express.Router()
const pool = require('../pool')


//  GET Route
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

// POST Route
router.post('/', ( req, res ) => {
    let newFeedback = req.body
    console.log(`Adding new feedbacks ${newFeedback.feeling}, ${newFeedback.understanding}, ${newFeedback.support}, ${newFeedback.comments}`);
    let values = [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments]

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`
    pool.query( queryText, values)
        .then (result => {
            res.sendStatus(201)
        })
        .catch ( err => {
            console.log(`Error in saving feedback to server ${err}`);
            res.sendStatus(500)
        })
});
    

module.exports = router

