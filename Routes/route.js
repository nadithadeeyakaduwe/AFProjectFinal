const express = require('express');

const router = express.Router();
const Patient = require('../Models/patient_model')


//get a list of data
router.get('/patient',function (req, res, next) {
    Patient.find().then(function (response) {
        res.send(response);
    });
});


router.get('/patients/:id',function (req, res, next) {
    Patient.findOne({_id: req.params.id}).then(function (response) {
        res.send(response);
    });
});


//for search
router.get('/patient/:hin',function (req, res, next) {
    console.log(req.params.hin);
    Patient.find({HIN: {$regex:req.params.hin}}).then(function (response) {
        res.send(response);
    });
});


//add a data
router.post('/patient',function (req, res, next) {

    Patient.create(req.body).then(function (response) {
        res.send(response)
    }).catch(next)

});

//update data
router.put('/patient/:id',function (req, res, next) {
    Patient.findByIdAndUpdate({_id: req.params.id},req.body).then(function() {
        Patient.findOne({_id: req.params.id}).then(function(response) {
            res.send(response);
        });

    });
});

//delete data
router.delete('/patient/:id',function (req, res, next) {
    Patient.findByIdAndRemove({_id: req.params.id}).then(function (response) {
        res.send(response);
    })

});

module.exports = router;
