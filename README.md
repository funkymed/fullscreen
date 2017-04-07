jquery-fullscreen
=================

Put a HTML node in fullscreen fitted homothetically inside the browser

GitHub : https://github.com/funkymed/jquery-fullscreen

##Author

Cyril Pereira <cyril.pereira@gmail.com>

##Demo
Image : http://med.planet-d.net/demo/web/jQFullscreen

Video : http://med.planet-d.net/demo/web/jQFullscreen/video.html

##Documentation

###How to use ?

Just do this

~~~
  $('img').jQFullscreen();
~~~

###options

~~~
  $('img').jQFullscreen({transition:'ease-in-out',speed:0});
~~~

transition : ease-in, ease-out, ease-in-out

speed : time in second

####Fade

~~~
  $('img').jQFullscreen({fade:3000});
~~~

fade : time in millisecond for the fade after load img

####Width and height

if you need use something else than image, you will need to set the size

just add width and height to the object option

~~~
$('img').jQFullscreen({width:1280,height:720});
~~~
