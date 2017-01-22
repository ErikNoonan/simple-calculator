var express = require('express');
var router = express.Router();

var total = null;

mathOps = {
    add: function(obj) {
        return Number(obj.x) + Number(obj.y);
    },
    sub: function(obj) {
        return Number(obj.x) - Number(obj.y);
    },
    mult: function(obj) {
        return Number(obj.x) * Number(obj.y);

    },
    div: function(obj) {
        return Number(obj.x) / Number(obj.y);
    }
};

router.post('/:name', function(req, res) {
    var toCompute = mathOps[req.params.name];
    total = toCompute(req.body);
    res.send({
        result: total
    });
});

module.exports = router;
