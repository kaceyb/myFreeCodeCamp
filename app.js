
var app = new Vue({
  el: '#app',
  data: {
    search: '',
    results: ''
  },
  watch: {
    search: function() {
      this.search = '';
      if(this.search.length != null) {
        this.getJson();
      }
    }
  },
  methods: {
    getJson: _.debounce(function() {
      this.results = 'Searching...';
    }, 500)
  }
});
