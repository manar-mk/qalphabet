<template>
<div class="container-fluid">
  <div class="row align-items-stretch">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <label for="cyr" class="control-label">Кирил жазуы</label>
        </div>
        <textarea class="cyr form-control" @keyup="submit" id="cyr" v-model="cyr"></textarea>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <label for="lat" class="control-label">Latyn jazýy</label>
        </div>
          <textarea class="lat form-control" @keyup="submit" id="lat" v-model="lat"></textarea>
      </div>
    </div>
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
.card{
  height: 100%;
}
label{
  margin-bottom: 0;
  font-weight: bold;
}
textarea.form-control {
  width: 100%;
  min-height: 50vh;
  display: block;
  resize: vertical;
  box-shadow: none;
  border-radius: 0;
  border: 0;
  /* color: #ffffff; */
}
textarea.form-control:focus {
  box-shadow: none;
}
.container-fluid{
  height: 100%;
}
@media (min-width: 576px) {
}
</style>
