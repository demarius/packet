#!/usr/bin/env node

require('./proof')(12, function (serialize) {
    serialize('b8(0-251: b8 | 252/252-0xffff: x8{252}, b16 | 253/0x10000-0xffffff: x8{253}, b24 | x8{254}, b64)', 3, 1, [ 0x03 ], 'write alternation byte')
    serialize('b8(0-251: b8 | 252/252-0xffff: x8{252}, b16 | 253/0x10000-0xffffff: x8{253}, b24 | x8{254}, b64)', 258, 3, [ 252, 0x01, 0x02 ], 'write alternation short')
    serialize('b8(0-251: b8 | 252/252-0xffff: x8{252}, b16 | 253/0x10000-0xffffff: x8{253}, b24 | x8{254}, b64)', 0x01ffffff, 9, [ 254, 0x00, 0x00, 0x00, 0x00, 0x01, 0xff, 0xff, 0xff ], 'write alternation long')
    serialize('b8(252/252-0xffff: x8{252}, foo: b16 | 0-251: foo: b8 | 253/0x10000-0xffffff: x8{253}, foo: b24 | x8{254}, foo: b64)', { foo: 0x01ffffff }, 9, [ 254, 0x00, 0x00, 0x00, 0x00, 0x01, 0xff, 0xff, 0xff ], 'write named alternation long')
})
