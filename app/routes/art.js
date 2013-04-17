exports.createForm = function(req, res) {
    res.render('newArt');
};

exports.create = function(req, res) {

};

exports.view = function(req, res) {
    res.render('art', {
        'piece': {
            'title': 'Piece Title',
            'artist': {
                'name': 'Artist O. Piece',
                'about': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec rhoncus dignissim lacus vulputate vestibulum. Integer pulvinar velit sed quam pharetra vel malesuada erat blandit.  Morbi ligula ipsum, malesuada ut porta in, rhoncus sed neque.  Nullam at est dignissim sem tristique laoreet. Fusce at ullamcorper justo. In hac habitasse platea dictumst. In sagittis, tortor et volutpat viverra, risus nisl fermentum tellus, eget volutpat est nisi vel sapien. Maecenas convallis tristique metus non iaculis.'
            },
            'description': 'Piece description'
        }
    });
};

exports.editForm = function(req, res) {
    res.render('edit', {
        'piece': {
            'title': 'Piece Title',
            'artist': {
                'name': 'Artist O. Piece',
                'about': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec rhoncus dignissim lacus vulputate vestibulum. Integer pulvinar velit sed quam pharetra vel malesuada erat blandit.  Morbi ligula ipsum, malesuada ut porta in, rhoncus sed neque.  Nullam at est dignissim sem tristique laoreet. Fusce at ullamcorper justo. In hac habitasse platea dictumst. In sagittis, tortor et volutpat viverra, risus nisl fermentum tellus, eget volutpat est nisi vel sapien. Maecenas convallis tristique metus non iaculis.'
            },
            'description': 'Piece description'
        }
    });
};

exports.update = function(req, res) {

};

exports.destroy = function(req, res) {

};
