var app = new Vue({
  el: '#app',
  data: {
    cyr: '',
    lat: '',
    lettersComplex: {
      Я: "I'a",
      я: "i'a",
      Ю: "I'y'",
      ю: "i'y'",
      Ц: 'Ts',
      ц: 'ts'
    },
    lettersSimple: {
      А: 'A',
      а: 'a',
      Ә: "A'",
      ә: "a'",
      Б: 'B',
      б: 'b',
      Д: 'D',
      д: 'd',
      Е: 'E',
      е: 'e',
      Ф: 'F',
      ф: 'f',
      Ғ: "G'",
      ғ: "g'",
      Г: 'G',
      г: 'g',
      Х: 'H',
      х: 'h',
      І: 'I',
      i: 'i',
      І: 'I',
      i: 'i',
      И: "I'",
      и: "i'",
      Й: "I'",
      й: "i'",
      H: 'H',
      h: 'h',
      Ж: 'J',
      ж: 'j',
      К: 'K',
      к: 'k',
      Л: 'L',
      л: 'l',
      М: 'M',
      м: 'm',
      Н: 'N',
      н: 'n',
      Ң: "N'",
      ң: "n'",
      О: 'O',
      о: 'o',
      Ө: "O'",
      ө: "o'",
      П: 'P',
      п: 'p',
      Қ: 'Q',
      қ: 'q',
      Р: 'R',
      р: 'r',
      Ш: "S'",
      ш: "s'",
      С: 'S',
      с: 's',
      Т: 'T',
      т: 't',
      Ұ: 'U',
      ұ: 'u',
      Ү: "U'",
      ү: "u'",
      В: 'V',
      в: 'v',
      Ы: 'Y',
      ы: 'y',
      У: "Y'",
      у: "y'",
      З: 'Z',
      з: 'z',
      Ч: "C'",
      ч: "c'",
      Э: 'E',
      э: 'e',
      Щ: "s'",
      щ: "s'",
      ь: '',
      ъ: ''
    }
  },
  mounted: function() {
    String.prototype.convert = function(prevValue, nextValue) {
      return this.split(prevValue).join(nextValue);
    };
  },
  methods: {
    submit: function() {
      var result = new String(this.cyr);

      for (var lettersComplexKey in this.lettersComplex) {
        result = result.convert(
          lettersComplexKey.toString(),
          this.lettersComplex[lettersComplexKey]
        );
      }

      for (var lettersSimpleKey in this.lettersSimple) {
        result = result.convert(
          lettersSimpleKey.toString(),
          this.lettersSimple[lettersSimpleKey]
        );
      }

      this.lat = result;
    }
  }
});
