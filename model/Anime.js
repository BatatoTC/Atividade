const conexao = require('../config/database');

const AnimeSchema = conexao.Schema({
    name: {type: 'String'},
    episodes: {type: 'Number'},
    release: {type: 'Date'},
    end: {type: 'Date'},
    studio: {type: 'String'},
    genres: {type: 'String'},
    image: {type: 'String'}
});

module.exports = conexao.model("Anime", AnimeSchema);