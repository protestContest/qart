var Art = require('../models/art');

exports.list = function(req, res) {
    Art.getAll(function(err, pieces) {
        if (err) {
            console.warn(err);
        }
        if (pieces) {
            res.render('artList', {'pieces': pieces});
        } else {
            res.send('No pieces');
        }
    });
};

exports.createForm = function(req, res) {
    res.render('newArt');
};

exports.create = function(req, res) {
    Art.create({
        'id': req.body.id,
        'title': req.body.title,
        'description': req.body.description,
        'artist': {
            'name': req.body.artist,
            'about': req.body.about_artist
        }
    }, function(err, piece) {
        res.redirect('/art');
    });
};

exports.view = function(req, res) {
    Art.get(req.params.id, function(err, piece) {
        res.render('art', {'piece': piece});
    });
};

exports.editForm = function(req, res) {
    Art.get(req.params.id, function(err, piece) {
        res.render('edit', {'piece': piece});
    });
};

exports.update = function(req, res) {
    Art.get(req.params.id, function(err, piece) {
        piece.update({
            'title': req.body.title,
            'description': req.body.description,
            'artist': {
                'name': req.body.artist,
                'about': req.body.about_artist
            }
        }, function(err, piece) {
            if (err) {
                res.send(err);
            } else {
                res.redirect('/art');
            }
        });
    });
};

exports.destroy = function(req, res) {
    Art.get(req.params.id, function(err, piece) {
        piece.destroy(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.redirect('/art');
            }
        });
    });
};
