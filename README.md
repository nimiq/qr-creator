# Low-weight beautiful QR Code lib
This library is a trimmed down version of (https://larsjung.de/jquery-qrcode/ Lars Jung's jQuery.qrcode library) which generates beautiful QR Codes. Lars Jung's library makes use of (https://github.com/kazuhikoarase/qrcode-generator QR Code Generator). All parts are licensed under the MIT License.

## API
Example:
```javascript
  QrCode.render({
    text: "some text",
    radius: 0.5, // 0.0 to 0.5
    ecLevel: 'H', // L, M, Q, H
    fill: '#536DFE', // foreground color
    background: null, // color or null for transparent
    size: 128 // in pixels
  }, document.querySelector('#qr-code'));
```

### Text
Any kind of text, also links, email addresses, any thing. The library will figure out the size of the QR Code to fit all the text inside.

### Radius
Defines how round the blocks should be. Numbers from 0 (squares) to 0.5 (maximum round) are supported.

### EcLevel
Means "Error correction levels". Four values are supported: L, M, Q, and H  and each will use %7, 15%, 25%, and 30% of the QR Code for error correction respectively. So on one hand the code will get bigger but chances are also higher that it will be read without errors later on.

### Fill
What color you want your QR Code to be. Should be a HEX code starting with #.

### Background
The background color (again in HEX code starting with #) or null for transparent background.

### Size
The total size of the final QR Code in pixels - it will be a square.

## Trimmed down to be low weight
The goal of the library is to generate QR Codes only. For that reason we have removed all additional code such as GIF image generation, background image support, rendering a label on top, removed some dead code, and freed it from depending on jQuery.

The resulting library is not using any global variables, is all strict mode, and relies on modern browser standards.

Browser compatibility testing | 4 lines
Dead code | 12 lines
Removed additional functionality |
Rendering labels | 45 lines
Fill with image | 55 lines
Draw rect QR Code | 8 lines
Create div, img, table tags | 121 lines
code refactoring | ~30 lines
focus on UTF-8 only | 82 lines
Removed unused modes, kept 8bit | ~30 lines
GIT image (w/t base64 streams | 385 lines

Use Google's Closure compiler:
Original:
Original Size: 12.75KB gzipped (64.01KB uncompressed)
Compiled Size: 7.32KB   gzipped (19.06KB uncompressed)
Saved 42.62% off the gzipped size (70.23% without gzip)

New:
Original Size: 9.18KB gzipped (49.74KB uncompressed)
Compiled Size: 4.75KB gzipped (12.06KB uncompressed)
Saved 48.22% off the gzipped size (75.76% without gzip)

compare | Original | New
Lines of code | 2332 | 1556
Size | 64kB | 50kB
Minified | 20.6kB | 12.3kB
Gzipped 7.3kB | 4.75kB
