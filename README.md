# Fullscreen

Author : Cyril Pereira

Put a HTML node in fullscreen fitted homothetically inside the browser

GitHub : https://github.com/funkymed/fullscreen

# Demo
Image : http://medcg.free.fr/tmp/fullscreen/index.html

# Install

```bash
yarn add funkymed-fullscreen --save
```

## Build

```bash
yarn build
```

## Test

```bash
yarn start
```

# Install in React

```javascript
import $ from "jquery";
import '../dist/Fullscreen'
```

```javascript
componentDidMount()
{
    $('.imgresized').Fullscreen({fade:3000});
}
```

```javascript
render()
{
    return (
        <div>
            <img className="imgresized" src="images/image7.jpg" />
        </div>
    );
}
```

# How to use ?

Just do this

```javascript
$('img').Fullscreen();
```

## options

```javascript
$('img').Fullscreen({transition:'ease-in-out',speed:0});
```

transition : ease-in, ease-out, ease-in-out

speed : time in second

### Fade

```javascript
$('img').Fullscreen({fade:3000});
```

fade : time in millisecond for the fade after load img

### Width and height

if you need use something else than image, you will need to set the size

just add width and height to the object option

```javascript
$('img').Fullscreen({width:1280,height:720});
```
