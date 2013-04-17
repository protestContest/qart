var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ArtSchema;

ArtSchema = new Schema({
    id: {type: Number, unique: true},
    title: String,
    description: String,
    artist: {
        name: String,
        about: String
    }
});

ArtSchema.static('getAll', function(callback) {
    Art.find({}, function(err, pieces) {
        if (err) {
            callback(err);
        } else {
            callback(null, pieces);
        }
    });
});

ArtSchema.static('create', function(attrs, callback) {
    var piece = new Art(attrs);
    piece.save(function(err) {
        if (err) {
            callback(err);
        } else {
            callback(null, piece);
        }
    });
});

ArtSchema.static('get', function(id, callback) {
    Art.findOne({'id': id}, function(err, piece) {
        if (err) {
            callback(err);
        } else {
            if (piece) {
                callback(null, piece);
            } else {
                callback("Piece not found");
            }
        }
    });
});

ArtSchema.method('update', function(attrs, callback) {
    for (var attr in attrs) {
        this[attr] = attrs[attr];
    }

    this.save(function(err) {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
});

ArtSchema.method('destroy', function(callback) {
    Art.remove({ id: this.id }, callback);
});

mongoose.model("Art", ArtSchema);
var Art = mongoose.model("Art");
module.exports = Art;
