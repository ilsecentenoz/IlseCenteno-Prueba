var cargarPagina = function (){
  $(document).on('click','.people',getPeople);
};

function getFilms() {
  $.ajax({
    dataType: 'json',
    type: 'GET',
    async: true,
    url: 'https://swapi.co/api/films/',
    success: function(data) {
      if (data != null) {
        console.log($(this).data('home'));
        var peliculas= data.results;
        var $contentCard= $('#cardFilms');
        var plantillaPelicula = '<h3> __title__</h3>'+'<p>Episode __episode__</p>'+'<p>Release date __releaseDate__</p>';
        peliculas.forEach(function(pelicula) {
          var $cardFilm = $("<div />");
          var $p = $("<p />");
          $p.html(plantillaPelicula.replace('__title__', pelicula.title).replace('__episode__', pelicula.episode_id).replace('__releaseDate__', pelicula.release_date));
          $cardFilm.addClass("card");
          $p.addClass("item-card");
          $contentCard.append($cardFilm);
          $cardFilm.append($p);
        });
      }
    },
    error: function(xhr, status) {
      alert('Sorry, i have a problem');
    }
  });
}
function getPeople() {
  $.ajax({
    dataType: 'json',
    type: 'GET',
    async: true,
    url: 'https://swapi.co/api/people/',
    success: function(data){
      if (data != null) {
        var personajes= data.results;
        var $contentCard= $('#cardPersonajes');
        var plantillaPersonaje = '<p><b>__name__</b></p>';
        personajes.forEach(function(personaje) {
          var $cardPersonaje = $("<div />");
          var $p = $("<p />");
          $p.html(plantillaPersonaje.replace('__name__', personaje.name));
          $cardPersonaje.addClass("card");
          $p.addClass("item-card");
          $contentCard.append($cardPersonaje);
          $cardPersonaje.append($p);
        });
      }
    },
    error: function(xhr, status) {
      alert('Sorry, i have a problem');
    }
  });
}

$(document).ready(cargarPagina, getFilms());
