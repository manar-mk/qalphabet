<template>
  <div class="app container-fluid" id="app">
    <div class="jumbotron text-center">
        <h1>QAlphabet</h1>
        <p class="lead">
            <span class="text-warning">Қазақша мәтінді латын нұсқасына аудару</span>
            <br>
            <span class="text-success">Qazaqs'a ma'tіndі latyn nusqasyna ay'dary'</span>
        </p>
        <a target="_blank" class="btn btn-primary btn-lg" href="mailto:contact@qalphabet.kz">
            <i class="glyphicon glyphicon-envelope"></i>
            contact@qalphabet.kz
        </a>
    </div>
    <QConvert/>
  </div>
</template>

<script>
import QConvert from './components/QConvert';

export default {
  name: 'app',
  components: {
    QConvert
  }
};
</script>

<style scoped>
.app {
  padding-top: 10px;
  padding-bottom: 30px;
}
.jumbotron {
  padding: 30px;
}
.jumbotron p {
  font-weight: 400;
}
.jumbotron h1 {
  font-size: 45px;
}
.btn {
  font-size: 14px;
}
.btn .glyphicon {
  font-size: 12px;
  margin-right: 3px;
}
</style>
