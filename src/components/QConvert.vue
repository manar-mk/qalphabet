<template>
  <div class="main">
    <div class="field">
        <label for="cyr" class="control-label text-warning">Кирил жазуы</label>
        <textarea class="cyr form-control" @keyup="submit" id="cyr" v-model="cyr"></textarea>
    </div>
    <div class="field">
        <label for="lat" class="control-label text-success">Латын жазуы</label>
        <textarea class="lat form-control" id="lat" v-model="lat"></textarea>
    </div>
  </div>
</template>

<script>
import qazLatyn from 'qazlatyn-db';

export default {
  name: 'QConvert',
  data() {
    return {
      cyr:
        'Бұл жасқа келгенше жақсы өткіздік пе, жаман өткіздік пе, әйтеуір бірталай өмірімізді өткіздік: алыстық, жұлыстық, айтыстық, тартыстық - әурешілікті көре-көре келдік. Енді жер ортасы жасқа келдік: қажыдық, жалықтық; қылып жүрген ісіміздің баянсызын, байлаусызын көрдік, бәрі қоршылық екенін білдік. Ал, енді қалған өмірімізді қайтіп, не қылып өткіземіз? Соны таба алмай өзім де қайранмын.',
      lat: ''
    };
  },
  mounted: function() {
    this.submit();
  },
  methods: {
    submit: function() {
      function capitalize(string) {
        if (string.length > 1) {
          return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        } else {
          return string.toUpperCase();
        }
      }

      this.lat = this.cyr
        .split('')
        .map(function(el) {
          if (qazLatyn.hasOwnProperty(el)) return qazLatyn[el];
          else if (qazLatyn.hasOwnProperty(el.toLowerCase()))
            return capitalize(qazLatyn[el.toLowerCase()]);
          return el;
        })
        .join('');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea.form-control {
  width: 100%;
  display: block;
  resize: vertical;
  min-height: 100px;
  color: #ffffff;
}
.field {
  margin-top: 20px;
}
.cyr {
  background: #fd9d4f;
}
.lat {
  background: #4dc54f;
}
</style>
