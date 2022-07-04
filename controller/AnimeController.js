const Anime = require('../model/Anime');

function opAdd(req, res){
    res.render('anime/add.ejs');
};

function add(req, res){
    var anime = new Anime();
    anime.name = req.body.name;
    anime.episodes = req.body.episodes;
    anime.release = req.body.release;
    anime.end = req.body.end;
    anime.studio = req.body.studio;
    anime.genres = req.body.genres;
    anime.image = req.body.image;
    anime.save(function (err, result){
        if(result){
            res.redirect('/anime/lst');
        }else{
            res.send(err);
        };
    });
};

function lst(req, res){
    Anime.find({}).then(function(animes){
        res.render('anime/lst.ejs', {Animes: animes});
    });
};

function filter(req, res){
    var search = req.body.search;
    Anime.find({name: RegExp(search, 'i')}).then(function(animes){
        res.render('anime/lst.ejs', {Animes: animes});
    });
};

function opEdt(req, res){
    Anime.findById(req.params.id).then(function(anime){
        res.render('anime/edt.ejs', {Anime: anime});
    });
};

function edt(req, res){
    Anime.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        episodes: req.body.episodes,
        release: req.body.release,
        end: req.body.end,
        studio: req.body.studio,
        genres: req.body.genres,
        image: req.body.image
    }, function(err, result){
        if(result){
            res.redirect('/anime/lst');
        }else{
            res.render(err);
        };
    }); 
};

function del(req, res){
    Anime.findByIdAndDelete(req.params.id).then(function(i){
        res.redirect('/anime/lst');
    });
};

module.exports = {opAdd, add, lst, filter, opEdt, edt, del};