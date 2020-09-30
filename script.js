let mainPage = new Vue({
  el: '#tarifs',
  data: {
    content: '',
    show: '',
    groupNum: '',
    tarifTitle: '',
  },
  methods: {
    speedCheck(title) {
      if (title.includes('Земля')) return 'tarif__speed_earth';
      if (title.includes('Вода')) return 'tarif__speed_water';
      if (title.includes('Огонь')) return 'tarif__speed_fire';
    },
    showGroup(groupNumber) {
      axios
        .get('json.php?view=group&group='+groupNumber)
        .then((response) => {
          this.content = response.data;
          this.groupNum = groupNumber;
          this.tarifTitle = this.content["Tarif title"];
          delete this.content["Tarif title"];
          this.show = 'group';
          console.log(response.data);
        })
    },
    showGroups() {
      axios
      .get('json.php?view=groups')
      .then((response) => {
        this.content = response.data;
        this.show = 'groups';
      })
    },
    showTarif(groupNum,tarif) {
      groupNum = mainPage.groupNum;
      axios
      .get('json.php?groupNum='+groupNum+'&tarifNum='+tarif)
      .then((response) => {
        this.show = 'tarif',
        this.content = response.data;
        console.log(response.data);
      })
    },
  },
  mounted() {
    this.showGroups();
  }})