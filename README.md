# Tiny QR Code Javascript Encoder Library with Logo

<img src="demo/qr-code-example.png"/>

A lightweight library generating stylish QR codes that also support gradient fills, rounded corners, logos and different colors for the corner modules in only 12.8kB minified (5.39kB gzipped).
Try out the [demo](https://airconsole.github.io/qr-creator-logo/demo)!

## Origin
This library is an extended version of [Nimiq's qr-creator library](https://github.com/nimiq/qr-creator), which is a trimmed down version of [Lars Jung's jQuery.qrcode library](https://larsjung.de/jquery-qrcode/). Our library is however not based on jQuery anymore and doesnt make use of it. Lars Jung's library itself is based on this [QR code Generator](https://github.com/kazuhikoarase/qrcode-generator).

All parts are licensed under the MIT License.

## Usage
The library is available as a module and non-module version.
To import it as a module:
```javascript
  import QrCreator from 'qr-creator';
```
To use the non-module version:
```html
  <script src="dist/qr-creator.min.js"></script>
```

Call the QrCreator API with a configuration object and a DOM element or canvas to render the QR code into:
```javascript
  QrCreator.render({
    text: 'some text',
    radius: 0.5, // 0.0 to 0.5
    ecLevel: 'H', // L, M, Q, H
    fill: '#536DFE', // foreground color
    cornerFill: '#434FCE', // foreground color for conrners,
    image: 'logo.png', // Logo to show inside the QR code
    background: null, // color or null for transparent
    size: 128 // in pixels
  }, document.querySelector('#qr-code'));
```

Attribute | Options           | Default | Description
----------|-------------------|---------|------------
text | String            | ""      | Any kind of text, also links, email addresses, any thing. The library will figure out the size of the QR code to fit all the text inside.
radius | 0 .. 0.5          | 0.5     | Defines how round the blocks should be. Numbers from 0 (squares) to 0.5 (maximum round) are supported.
ecLevel | L, M, Q, H        | L       | Means "Error correction levels". The four values L, M, Q, and H will use %7, 15%, 25%, and 30% of the QR code for error correction respectively. So on one hand the code will get bigger but chances are also higher that it will be read without errors later on.
fill | color or gradient | #000000 | What color you want your QR code to be. Use the demo to try different colors.
cornerFill | color or gradient | null    | What color you want your QR code corners to be. If not set, uses same value as 'fill'. Use the demo to try different colors.
background | color code        | null    | The background color or null for transparent background.
image | String            | null    | The URL to the image you want to put inside of your QR Code.
imageEcCover | 0 .. 1            | 0.5     | How much of the allowed are should be covered by the image. The closer you get to 1, the harder the QR code will be to scan.
size | int               | 200     | The total size of the final QR code in pixels - it will be a square.

If you want to fill the QR code with a gradient, use the following format:
```js
{
    type: 'radial-gradient', // or 'linear-gradient'
    position: [ ... ],
    colorStops: [
        [ offset0, color0 ],
        [ offset1, color1 ],
        ...
    ]
}
```
Where the position is specified as in [createLinearGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient) / [createRadialGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient). However, each value is relative to the QR code size, i.e. will be multiplied by that size to yield the absolute position.

## Trimmed down to be low weight
The goal of the library is to generate QR codes only. For that reason we have removed all additional code such as GIF image generation, background image support, rendering a label on top, removed some dead code, and freed it from depending on jQuery. Also, the resulting library does not use any global variables, is all strict mode, and relies on modern browser standards instead.

The result | Original Lib Lars Jung |      Nimiq Lib | This Lib with Logo support
:--- |-----------------------:|---------------:| ---:
Size |                   64kB |    50kB (-22%) | 53KB (-18%)
Minified |                 20.6kB | 11.95kB (-40%) | 12.8kB (-38%)
Gzipped |                  7.3kB |  4.77kB (-35%)  | 5.39kB (-27%)

## Building

To install the dependencies run:
```bash
npm install
```
and then to build the project:
```bash
npm run build
```
