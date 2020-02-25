# Avon-skin

parches de `css` &amp; `js` para la plataforma *MAS* de AVON.

# Usage

## CDN Production

**CSS**


	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/pacificosas/avon-skin@1/css/dist/avon-skin.min.css">
**JS**

	<script> src="https://cdn.jsdelivr.net/gh/pacificosas/avon-skin@1/js/dist/avon-skin.min.js"></script>



## CDN Desarrollo

El CDN de desarrollo se actualiza cada 20 minutos en caso de haber una actualización en el repositorio.


**NO** usar en producción ya que se la puede no soportar los request en masa.



**CSS**

	<link rel="stylesheet" type="text/css" href="https://raw.githack.com/pacificosas/Avon-skin/develop/css/dist/avon-skin.css">


**JS**

	<script src="https://raw.githack.com/pacificosas/Avon-skin/develop/css/dist/avon-skin.min.js"></script>

# Manual de desarrollo

Los modulos de javascript estan escrits en typescript, quien los transpila a javascript. Luego con el motor de bundle *WEBPACK* se crea un minificado para la version de javascript especificada.

Los modulos de Css estas escritos en SASS

1. Abrir terminar en la raiz de la carpeta del repositorio
2. Ejecutar el siguiente comando para transpilar el código. El comando estara *vigilando* los cambios en los archivos fuente para transpilarlos de nuevo cada vez.

	npm run start

3. Para terminar el proceso de la terminal preisonar `Ctrl` + `c`
