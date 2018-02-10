# QR Encoder

<img  src="demo/qr-code-example.png"/>

A lightweight library generating stylish QR codes in only 12.2kB minified (4.75kB gzipped).
Try out the [demo](https://nimiq.github.io/qr-encoder/demo)!

## Usage
Call the QrCode API with a configuration object and a DOM element to render the QR code into:
```javascript
  QrEncoder.render({
    text: "some text",
    radius: 0.5, // 0.0 to 0.5
    ecLevel: 'H', // L, M, Q, H
    fill: '#536DFE', // foreground color
    background: null, // color or null for transparent
    size: 128 // in pixels
  }, document.querySelector('#qr-code'));
```

Attribute | Options | Default | Description
----------|---------|---------|------------
text | String | "" | Any kind of text, also links, email addresses, any thing. The library will figure out the size of the QR code to fit all the text inside.
radius | 0 .. 0.5 | 0.5 | Defines how round the blocks should be. Numbers from 0 (squares) to 0.5 (maximum round) are supported.
ecLevel | L, M, Q, H | L | Means "Error correction levels". The four values L, M, Q, and H will use %7, 15%, 25%, and 30% of the QR code for error correction respectively. So on one hand the code will get bigger but chances are also higher that it will be read without errors later on.
fill | color code | #000000 | What color you want your QR code to be. Use the demo to try different colors.
background | color code | null | The background color or null for transparent background.
size | int | 200 | The total size of the final QR code in pixels - it will be a square.

## Origin
This library is a trimmed down version of [Lars Jung's jQuery.qrcode library](https://larsjung.de/jquery-qrcode/). Lars Jung's library makes use of this [QR code Generator](https://github.com/kazuhikoarase/qrcode-generator). All parts are licensed under the MIT License.

## Trimmed down to be low weight
The goal of the library is to generate QR codes only. For that reason we have removed all additional code such as GIF image generation, background image support, rendering a label on top, removed some dead code, and freed it from depending on jQuery. Also, the resulting library does not use any global variables, is all strict mode, and relies on modern browser standards instead.

The result | Original | New
:--- | ---: | ---:
Lines of code | 2332 | 1556 (-33%)
Size | 64kB | 50kB (-22%)
Minified | 20.6kB | 11.95kB (-40%)
Gzipped | 7.3kB | 4.77kB (-35%)
