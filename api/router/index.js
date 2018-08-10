const express = require('express');
const router = express.Router();

//Load Mongoose models
const Services = require('./../../module/Services');

router.get('/:pet_id', (req, res) => {
        Services.findOne({pet_id : req.params.pet_id})
            .then(resp => res.json(resp))
});


module.exports = router;