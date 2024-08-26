import { serveTest } from '../test-server.js';
import { strictEqual, throws } from '../../assert.js';

export const handler = serveTest(async (t) => {
  t.test('btoa', () => {
    var everything = "";
    for (var i = 0; i < 256; i++) {
      everything += String.fromCharCode(i);
    }
    strictEqual(btoa(everything), 'AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/w==');

    strictEqual(btoa(42), btoa('42'));
    strictEqual(btoa(null), btoa('null'));
    strictEqual(btoa({ x: 1 }), btoa('[object Object]'));

    throws(() => btoa(), TypeError);
    throws(() => btoa('🐱'));

    strictEqual(btoa(""), "", `btoa("")`);
    strictEqual(btoa("ab"), "YWI=", `btoa("ab")`);
    strictEqual(btoa("abc"), "YWJj", `btoa("abc")`);
    strictEqual(btoa("abcd"), "YWJjZA==", `btoa("abcd")`);
    strictEqual(btoa("abcde"), "YWJjZGU=", `btoa("abcde")`);
    strictEqual(btoa("ÿÿÀ"), "///A", `btoa("ÿÿÀ")`);
    strictEqual(btoa("\0a"), "AGE=", `btoa("\\0a")`);
    strictEqual(btoa("a\0b"), "YQBi", `btoa("a\\0b")`);
    strictEqual(btoa(undefined), "dW5kZWZpbmVk", `btoa(undefined)`);
    strictEqual(btoa(null), "bnVsbA==", `btoa(null)`);
    strictEqual(btoa(7), "Nw==", `btoa(7)`);
    strictEqual(btoa(12), "MTI=", `btoa(12)`);
    strictEqual(btoa(1.5), "MS41", `btoa(1.5)`);
    strictEqual(btoa(true), "dHJ1ZQ==", `btoa(true)`);
    strictEqual(btoa(false), "ZmFsc2U=", `btoa(false)`);
    strictEqual(btoa(NaN), "TmFO", `btoa(NaN)`);
    strictEqual(btoa(Infinity), "SW5maW5pdHk=", `btoa(Infinity)`);
    strictEqual(btoa(-Infinity), "LUluZmluaXR5", `btoa(-Infinity)`);
    strictEqual(btoa(0), "MA==", `btoa(0)`);
    strictEqual(btoa(-0), "MA==", `btoa(-0)`);
    strictEqual(btoa("\0"), "AA==", `btoa("\\0")`);
    strictEqual(btoa("\x01"), "AQ==", `btoa("\\x01")`);
    strictEqual(btoa("\x02"), "Ag==", `btoa("\\x02")`);
    strictEqual(btoa("\x03"), "Aw==", `btoa("\\x03")`);
    strictEqual(btoa("\x04"), "BA==", `btoa("\\x04")`);
    strictEqual(btoa("\x05"), "BQ==", `btoa("\\x05")`);
    strictEqual(btoa("\x06"), "Bg==", `btoa("\\x06")`);
    strictEqual(btoa("\x07"), "Bw==", `btoa("\\x07")`);
    strictEqual(btoa("\b"), "CA==", `btoa("\\b")`);
    strictEqual(btoa("\t"), "CQ==", `btoa("\\t")`);
    strictEqual(btoa("\n"), "Cg==", `btoa("\\n")`);
    strictEqual(btoa("\v"), "Cw==", `btoa("\\v")`);
    strictEqual(btoa("\f"), "DA==", `btoa("\\f")`);
    strictEqual(btoa("\r"), "DQ==", `btoa("\\r")`);
    strictEqual(btoa("\x0e"), "Dg==", `btoa("\\x0e")`);
    strictEqual(btoa("\x0f"), "Dw==", `btoa("\\x0f")`);
    strictEqual(btoa("\x10"), "EA==", `btoa("\\x10")`);
    strictEqual(btoa("\x11"), "EQ==", `btoa("\\x11")`);
    strictEqual(btoa("\x12"), "Eg==", `btoa("\\x12")`);
    strictEqual(btoa("\x13"), "Ew==", `btoa("\\x13")`);
    strictEqual(btoa("\x14"), "FA==", `btoa("\\x14")`);
    strictEqual(btoa("\x15"), "FQ==", `btoa("\\x15")`);
    strictEqual(btoa("\x16"), "Fg==", `btoa("\\x16")`);
    strictEqual(btoa("\x17"), "Fw==", `btoa("\\x17")`);
    strictEqual(btoa("\x18"), "GA==", `btoa("\\x18")`);
    strictEqual(btoa("\x19"), "GQ==", `btoa("\\x19")`);
    strictEqual(btoa("\x1a"), "Gg==", `btoa("\\x1a")`);
    strictEqual(btoa("\x1b"), "Gw==", `btoa("\\x1b")`);
    strictEqual(btoa("\x1c"), "HA==", `btoa("\\x1c")`);
    strictEqual(btoa("\x1d"), "HQ==", `btoa("\\x1d")`);
    strictEqual(btoa("\x1e"), "Hg==", `btoa("\\x1e")`);
    strictEqual(btoa("\x1f"), "Hw==", `btoa("\\x1f")`);
    strictEqual(btoa(" "), "IA==", `btoa(" ")`);
    strictEqual(btoa("!"), "IQ==", `btoa("!")`);
    strictEqual(btoa("#"), "Iw==", `btoa("#")`);
    strictEqual(btoa("$"), "JA==", `btoa("$")`);
    strictEqual(btoa("%"), "JQ==", `btoa("%")`);
    strictEqual(btoa("&"), "Jg==", `btoa("&")`);
    strictEqual(btoa("'"), "Jw==", `btoa("'")`);
    strictEqual(btoa("("), "KA==", `btoa("(")`);
    strictEqual(btoa(")"), "KQ==", `btoa(")")`);
    strictEqual(btoa("*"), "Kg==", `btoa("*")`);
    strictEqual(btoa("+"), "Kw==", `btoa("+")`);
    strictEqual(btoa(","), "LA==", `btoa(",")`);
    strictEqual(btoa("-"), "LQ==", `btoa("-")`);
    strictEqual(btoa("."), "Lg==", `btoa(".")`);
    strictEqual(btoa("/"), "Lw==", `btoa("/")`);
    strictEqual(btoa("0"), "MA==", `btoa("0")`);
    strictEqual(btoa("1"), "MQ==", `btoa("1")`);
    strictEqual(btoa("2"), "Mg==", `btoa("2")`);
    strictEqual(btoa("3"), "Mw==", `btoa("3")`);
    strictEqual(btoa("4"), "NA==", `btoa("4")`);
    strictEqual(btoa("5"), "NQ==", `btoa("5")`);
    strictEqual(btoa("6"), "Ng==", `btoa("6")`);
    strictEqual(btoa("7"), "Nw==", `btoa("7")`);
    strictEqual(btoa("8"), "OA==", `btoa("8")`);
    strictEqual(btoa("9"), "OQ==", `btoa("9")`);
    strictEqual(btoa(":"), "Og==", `btoa(":")`);
    strictEqual(btoa(";"), "Ow==", `btoa(";")`);
    strictEqual(btoa("<"), "PA==", `btoa("<")`);
    strictEqual(btoa("="), "PQ==", `btoa("=")`);
    strictEqual(btoa(">"), "Pg==", `btoa(">")`);
    strictEqual(btoa("?"), "Pw==", `btoa("?")`);
    strictEqual(btoa("@"), "QA==", `btoa("@")`);
    strictEqual(btoa("A"), "QQ==", `btoa("A")`);
    strictEqual(btoa("B"), "Qg==", `btoa("B")`);
    strictEqual(btoa("C"), "Qw==", `btoa("C")`);
    strictEqual(btoa("D"), "RA==", `btoa("D")`);
    strictEqual(btoa("E"), "RQ==", `btoa("E")`);
    strictEqual(btoa("F"), "Rg==", `btoa("F")`);
    strictEqual(btoa("G"), "Rw==", `btoa("G")`);
    strictEqual(btoa("H"), "SA==", `btoa("H")`);
    strictEqual(btoa("I"), "SQ==", `btoa("I")`);
    strictEqual(btoa("J"), "Sg==", `btoa("J")`);
    strictEqual(btoa("K"), "Sw==", `btoa("K")`);
    strictEqual(btoa("L"), "TA==", `btoa("L")`);
    strictEqual(btoa("M"), "TQ==", `btoa("M")`);
    strictEqual(btoa("N"), "Tg==", `btoa("N")`);
    strictEqual(btoa("O"), "Tw==", `btoa("O")`);
    strictEqual(btoa("P"), "UA==", `btoa("P")`);
    strictEqual(btoa("Q"), "UQ==", `btoa("Q")`);
    strictEqual(btoa("R"), "Ug==", `btoa("R")`);
    strictEqual(btoa("S"), "Uw==", `btoa("S")`);
    strictEqual(btoa("T"), "VA==", `btoa("T")`);
    strictEqual(btoa("U"), "VQ==", `btoa("U")`);
    strictEqual(btoa("V"), "Vg==", `btoa("V")`);
    strictEqual(btoa("W"), "Vw==", `btoa("W")`);
    strictEqual(btoa("X"), "WA==", `btoa("X")`);
    strictEqual(btoa("Y"), "WQ==", `btoa("Y")`);
    strictEqual(btoa("Z"), "Wg==", `btoa("Z")`);
    strictEqual(btoa("["), "Ww==", `btoa("[")`);
    strictEqual(btoa("\\"), "XA==", `btoa("\\\\")`);
    strictEqual(btoa("]"), "XQ==", `btoa("]")`);
    strictEqual(btoa("^"), "Xg==", `btoa("^")`);
    strictEqual(btoa("_"), "Xw==", `btoa("_")`);
    strictEqual(btoa("a"), "YQ==", `btoa("a")`);
    strictEqual(btoa("b"), "Yg==", `btoa("b")`);
    strictEqual(btoa("c"), "Yw==", `btoa("c")`);
    strictEqual(btoa("d"), "ZA==", `btoa("d")`);
    strictEqual(btoa("e"), "ZQ==", `btoa("e")`);
    strictEqual(btoa("f"), "Zg==", `btoa("f")`);
    strictEqual(btoa("g"), "Zw==", `btoa("g")`);
    strictEqual(btoa("h"), "aA==", `btoa("h")`);
    strictEqual(btoa("i"), "aQ==", `btoa("i")`);
    strictEqual(btoa("j"), "ag==", `btoa("j")`);
    strictEqual(btoa("k"), "aw==", `btoa("k")`);
    strictEqual(btoa("l"), "bA==", `btoa("l")`);
    strictEqual(btoa("m"), "bQ==", `btoa("m")`);
    strictEqual(btoa("n"), "bg==", `btoa("n")`);
    strictEqual(btoa("o"), "bw==", `btoa("o")`);
    strictEqual(btoa("p"), "cA==", `btoa("p")`);
    strictEqual(btoa("q"), "cQ==", `btoa("q")`);
    strictEqual(btoa("r"), "cg==", `btoa("r")`);
    strictEqual(btoa("s"), "cw==", `btoa("s")`);
    strictEqual(btoa("t"), "dA==", `btoa("t")`);
    strictEqual(btoa("u"), "dQ==", `btoa("u")`);
    strictEqual(btoa("v"), "dg==", `btoa("v")`);
    strictEqual(btoa("w"), "dw==", `btoa("w")`);
    strictEqual(btoa("x"), "eA==", `btoa("x")`);
    strictEqual(btoa("y"), "eQ==", `btoa("y")`);
    strictEqual(btoa("z"), "eg==", `btoa("z")`);
    strictEqual(btoa("{"), "ew==", `btoa("{")`);
    strictEqual(btoa("|"), "fA==", `btoa("|")`);
    strictEqual(btoa("}"), "fQ==", `btoa("}")`);
    strictEqual(btoa("~"), "fg==", `btoa("~")`);
    strictEqual(btoa(""), "fw==", `btoa("")`);
    strictEqual(btoa(""), "gA==", `btoa("")`);
    strictEqual(btoa(""), "gQ==", `btoa("")`);
    strictEqual(btoa(""), "gg==", `btoa("")`);
    strictEqual(btoa(""), "gw==", `btoa("")`);
    strictEqual(btoa(""), "hA==", `btoa("")`);
    strictEqual(btoa(""), "hQ==", `btoa("")`);
    strictEqual(btoa(""), "hg==", `btoa("")`);
    strictEqual(btoa(""), "hw==", `btoa("")`);
    strictEqual(btoa(""), "iA==", `btoa("")`);
    strictEqual(btoa(""), "iQ==", `btoa("")`);
    strictEqual(btoa(""), "ig==", `btoa("")`);
    strictEqual(btoa(""), "iw==", `btoa("")`);
    strictEqual(btoa(""), "jA==", `btoa("")`);
    strictEqual(btoa(""), "jQ==", `btoa("")`);
    strictEqual(btoa(""), "jg==", `btoa("")`);
    strictEqual(btoa(""), "jw==", `btoa("")`);
    strictEqual(btoa(""), "kA==", `btoa("")`);
    strictEqual(btoa(""), "kQ==", `btoa("")`);
    strictEqual(btoa(""), "kg==", `btoa("")`);
    strictEqual(btoa(""), "kw==", `btoa("")`);
    strictEqual(btoa(""), "lA==", `btoa("")`);
    strictEqual(btoa(""), "lQ==", `btoa("")`);
    strictEqual(btoa(""), "lg==", `btoa("")`);
    strictEqual(btoa(""), "lw==", `btoa("")`);
    strictEqual(btoa(""), "mA==", `btoa("")`);
    strictEqual(btoa(""), "mQ==", `btoa("")`);
    strictEqual(btoa(""), "mg==", `btoa("")`);
    strictEqual(btoa(""), "mw==", `btoa("")`);
    strictEqual(btoa(""), "nA==", `btoa("")`);
    strictEqual(btoa(""), "nQ==", `btoa("")`);
    strictEqual(btoa(""), "ng==", `btoa("")`);
    strictEqual(btoa(""), "nw==", `btoa("")`);
    strictEqual(btoa(" "), "oA==", `btoa(" ")`);
    strictEqual(btoa("¡"), "oQ==", `btoa("¡")`);
    strictEqual(btoa("¢"), "og==", `btoa("¢")`);
    strictEqual(btoa("£"), "ow==", `btoa("£")`);
    strictEqual(btoa("¤"), "pA==", `btoa("¤")`);
    strictEqual(btoa("¥"), "pQ==", `btoa("¥")`);
    strictEqual(btoa("¦"), "pg==", `btoa("¦")`);
    strictEqual(btoa("§"), "pw==", `btoa("§")`);
    strictEqual(btoa("¨"), "qA==", `btoa("¨")`);
    strictEqual(btoa("©"), "qQ==", `btoa("©")`);
    strictEqual(btoa("ª"), "qg==", `btoa("ª")`);
    strictEqual(btoa("«"), "qw==", `btoa("«")`);
    strictEqual(btoa("¬"), "rA==", `btoa("¬")`);
    strictEqual(btoa("­"), "rQ==", `btoa("­")`);
    strictEqual(btoa("®"), "rg==", `btoa("®")`);
    strictEqual(btoa("¯"), "rw==", `btoa("¯")`);
    strictEqual(btoa("°"), "sA==", `btoa("°")`);
    strictEqual(btoa("±"), "sQ==", `btoa("±")`);
    strictEqual(btoa("²"), "sg==", `btoa("²")`);
    strictEqual(btoa("³"), "sw==", `btoa("³")`);
    strictEqual(btoa("´"), "tA==", `btoa("´")`);
    strictEqual(btoa("µ"), "tQ==", `btoa("µ")`);
    strictEqual(btoa("¶"), "tg==", `btoa("¶")`);
    strictEqual(btoa("·"), "tw==", `btoa("·")`);
    strictEqual(btoa("¸"), "uA==", `btoa("¸")`);
    strictEqual(btoa("¹"), "uQ==", `btoa("¹")`);
    strictEqual(btoa("º"), "ug==", `btoa("º")`);
    strictEqual(btoa("»"), "uw==", `btoa("»")`);
    strictEqual(btoa("¼"), "vA==", `btoa("¼")`);
    strictEqual(btoa("½"), "vQ==", `btoa("½")`);
    strictEqual(btoa("¾"), "vg==", `btoa("¾")`);
    strictEqual(btoa("¿"), "vw==", `btoa("¿")`);
    strictEqual(btoa("À"), "wA==", `btoa("À")`);
    strictEqual(btoa("Á"), "wQ==", `btoa("Á")`);
    strictEqual(btoa("Â"), "wg==", `btoa("Â")`);
    strictEqual(btoa("Ã"), "ww==", `btoa("Ã")`);
    strictEqual(btoa("Ä"), "xA==", `btoa("Ä")`);
    strictEqual(btoa("Å"), "xQ==", `btoa("Å")`);
    strictEqual(btoa("Æ"), "xg==", `btoa("Æ")`);
    strictEqual(btoa("Ç"), "xw==", `btoa("Ç")`);
    strictEqual(btoa("È"), "yA==", `btoa("È")`);
    strictEqual(btoa("É"), "yQ==", `btoa("É")`);
    strictEqual(btoa("Ê"), "yg==", `btoa("Ê")`);
    strictEqual(btoa("Ë"), "yw==", `btoa("Ë")`);
    strictEqual(btoa("Ì"), "zA==", `btoa("Ì")`);
    strictEqual(btoa("Í"), "zQ==", `btoa("Í")`);
    strictEqual(btoa("Î"), "zg==", `btoa("Î")`);
    strictEqual(btoa("Ï"), "zw==", `btoa("Ï")`);
    strictEqual(btoa("Ð"), "0A==", `btoa("Ð")`);
    strictEqual(btoa("Ñ"), "0Q==", `btoa("Ñ")`);
    strictEqual(btoa("Ò"), "0g==", `btoa("Ò")`);
    strictEqual(btoa("Ó"), "0w==", `btoa("Ó")`);
    strictEqual(btoa("Ô"), "1A==", `btoa("Ô")`);
    strictEqual(btoa("Õ"), "1Q==", `btoa("Õ")`);
    strictEqual(btoa("Ö"), "1g==", `btoa("Ö")`);
    strictEqual(btoa("×"), "1w==", `btoa("×")`);
    strictEqual(btoa("Ø"), "2A==", `btoa("Ø")`);
    strictEqual(btoa("Ù"), "2Q==", `btoa("Ù")`);
    strictEqual(btoa("Ú"), "2g==", `btoa("Ú")`);
    strictEqual(btoa("Û"), "2w==", `btoa("Û")`);
    strictEqual(btoa("Ü"), "3A==", `btoa("Ü")`);
    strictEqual(btoa("Ý"), "3Q==", `btoa("Ý")`);
    strictEqual(btoa("Þ"), "3g==", `btoa("Þ")`);
    strictEqual(btoa("ß"), "3w==", `btoa("ß")`);
    strictEqual(btoa("à"), "4A==", `btoa("à")`);
    strictEqual(btoa("á"), "4Q==", `btoa("á")`);
    strictEqual(btoa("â"), "4g==", `btoa("â")`);
    strictEqual(btoa("ã"), "4w==", `btoa("ã")`);
    strictEqual(btoa("ä"), "5A==", `btoa("ä")`);
    strictEqual(btoa("å"), "5Q==", `btoa("å")`);
    strictEqual(btoa("æ"), "5g==", `btoa("æ")`);
    strictEqual(btoa("ç"), "5w==", `btoa("ç")`);
    strictEqual(btoa("è"), "6A==", `btoa("è")`);
    strictEqual(btoa("é"), "6Q==", `btoa("é")`);
    strictEqual(btoa("ê"), "6g==", `btoa("ê")`);
    strictEqual(btoa("ë"), "6w==", `btoa("ë")`);
    strictEqual(btoa("ì"), "7A==", `btoa("ì")`);
    strictEqual(btoa("í"), "7Q==", `btoa("í")`);
    strictEqual(btoa("î"), "7g==", `btoa("î")`);
    strictEqual(btoa("ï"), "7w==", `btoa("ï")`);
    strictEqual(btoa("ð"), "8A==", `btoa("ð")`);
    strictEqual(btoa("ñ"), "8Q==", `btoa("ñ")`);
    strictEqual(btoa("ò"), "8g==", `btoa("ò")`);
    strictEqual(btoa("ó"), "8w==", `btoa("ó")`);
    strictEqual(btoa("ô"), "9A==", `btoa("ô")`);
    strictEqual(btoa("õ"), "9Q==", `btoa("õ")`);
    strictEqual(btoa("ö"), "9g==", `btoa("ö")`);
    strictEqual(btoa("÷"), "9w==", `btoa("÷")`);
    strictEqual(btoa("ø"), "+A==", `btoa("ø")`);
    strictEqual(btoa("ù"), "+Q==", `btoa("ù")`);
    strictEqual(btoa("ú"), "+g==", `btoa("ú")`);
    strictEqual(btoa("û"), "+w==", `btoa("û")`);
    strictEqual(btoa("ü"), "/A==", `btoa("ü")`);
    strictEqual(btoa("ý"), "/Q==", `btoa("ý")`);
    strictEqual(btoa("þ"), "/g==", `btoa("þ")`);
    strictEqual(btoa("ÿ"), "/w==", `btoa("ÿ")`);
  });

  // atob
  t.test('atob', () => {
    strictEqual(atob(""), "", `atob("")`);
    strictEqual(atob("abcd"), 'i·\x1D');
    strictEqual(atob(" abcd"), 'i·\x1D');
    strictEqual(atob("abcd "), 'i·\x1D');
    throws(() => atob(" abcd==="));
    throws(() => atob("abcd=== "));
    throws(() => atob("abcd ==="));
    throws(() => atob("a"));
    strictEqual(atob("ab"), 'i');
    strictEqual(atob("abc"), 'i·');
    throws(() => atob("abcde"));
    throws(() => atob("𐀀"));
    throws(() => atob("="));
    throws(() => atob("=="));
    throws(() => atob("==="));
    throws(() => atob("===="));
    throws(() => atob("====="));
    throws(() => atob("a="));
    throws(() => atob("a=="));
    throws(() => atob("a==="));
    throws(() => atob("a===="));
    throws(() => atob("a====="));
    throws(() => atob("ab="));
    strictEqual(atob("ab=="), 'i');
    throws(() => atob("ab==="));
    throws(() => atob("ab===="));
    throws(() => atob("ab====="));
    strictEqual(atob("abc="), 'i·');
    throws(() => atob("abc=="));
    throws(() => atob("abc==="));
    throws(() => atob("abc===="));
    throws(() => atob("abc====="));
    throws(() => atob("abcd="));
    throws(() => atob("abcd=="));
    throws(() => atob("abcd==="));
    throws(() => atob("abcd===="));
    throws(() => atob("abcd====="));
    throws(() => atob("abcde="));
    throws(() => atob("abcde=="));
    throws(() => atob("abcde==="));
    throws(() => atob("abcde===="));
    throws(() => atob("abcde====="));
    throws(() => atob("=a"));
    throws(() => atob("=a="));
    throws(() => atob("a=b"));
    throws(() => atob("a=b="));
    throws(() => atob("ab=c"));
    throws(() => atob("ab=c="));
    throws(() => atob("abc=d"));
    throws(() => atob("abc=d="));
    throws(() => atob("ab\u000Bcd"));
    throws(() => atob("ab\u3000cd"));
    throws(() => atob("ab\u3001cd"));
    strictEqual(atob("ab\tcd"), 'i·\x1D');
    strictEqual(atob("ab\ncd"), 'i·\x1D');
    strictEqual(atob("ab\fcd"), 'i·\x1D');
    strictEqual(atob("ab\rcd"), 'i·\x1D');
    strictEqual(atob("ab cd"), 'i·\x1D');
    throws(() => atob("ab\u00a0cd"));
    strictEqual(atob("ab\t\n\f\r cd"), 'i·\x1D');
    strictEqual(atob(" \t\n\f\r ab\t\n\f\r cd\t\n\f\r "), 'i·\x1D');
    strictEqual(atob("ab\t\n\f\r =\t\n\f\r =\t\n\f\r "), 'i');
    throws(() => atob("A"));
    strictEqual(atob("/A"), 'ü');
    strictEqual(atob("//A"), 'ÿð');
    strictEqual(atob("///A"), 'ÿÿÀ');
    throws(() => atob("////A"));
    throws(() => atob("/"));
    strictEqual(atob("A/"), '\x03');
    strictEqual(atob("AA/"), '\x00\x0F');
    throws(() => atob("AAAA/"));
    strictEqual(atob("AAA/"), '\x00\x00?');
    throws(() => atob("\u0000nonsense"));
    throws(() => atob("abcd\u0000nonsense"));
    strictEqual(atob("YQ"), 'a');
    strictEqual(atob("YR"), 'a');
    throws(() => atob("~~"));
    throws(() => atob(".."));
    throws(() => atob("--"));
    throws(() => atob("__"));
  });
});
