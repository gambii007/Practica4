//Metodos de Propiedad
const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo cancion con el ID: ${id}`);
    },
    pausar: function () {
        console.log('Pausando...');
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando la Playlist: ${nombre}`);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo Playlist: ${nombre}`);
    }

}

reproductor.borrarCancion = function (id) {
    console.log(`Eliminando la cancion: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(3840);
reproductor.crearPlaylist('Amor mio')
reproductor.reproducirPlaylist("Amor mio");