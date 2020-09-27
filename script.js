let mainPage = new Vue({
  el: '#tarifs',
  data: {
    content: '',
  },
  methods: {
    speedCheck(title) {
      if (title.includes('Земля')) return 'tarif__speed_earth';
      if (title.includes('Вода')) return 'tarif__speed_water';
      if (title.includes('Огонь')) return 'tarif__speed_fire';
    }
  },
  mounted() {
    axios
      .get('json.php?view=groups')
      .then((response) => {
        this.content = response.data;
      })
    },
  }
)