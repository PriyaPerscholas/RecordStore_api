const express = require('express');
const router = express.Router();
const Records = require('../models/records')

//index
router.get('/', (req, res) => {
       Records.find({}, (err, foundRecords) => {
              res.json(foundRecords)
       })
});

//create
router.post('/', (req, res) => {
       Records.create(req.body, (err, createdRecords) => {
              res.json(createdRecords)
       })
})

//update route
router.put('/:id', (req, res) => {
       Records.findByIdAndUpdate(req.params.id, req.body, {
              new: true
       }, (err, updatedRecord) => {
              res.json(updatedRecord);
       })
})

//show
router.get('/:id', (req, res) => {
       Records.findById(req.params.id, (err, foundRecord) => {
              res.json(foundRecord)
       })
})

//delete
router.delete('/:id', (req, res) => {
       Records.findByIdAndRemove(req.params.id, (err, deletedRecord) => {
              res.json(deletedRecord)
       })
})
module.exports = router;