let mainPage = new Vue({
  el: '#content',
  data: {
    content: '',
    show: '',
    groupNum: '',
    tarifTitle: '',
  },
  methods: {
    getDate(timestamp){
      let arrTimestamp = timestamp.split('+');
      let date = new Date(arrTimestamp[0]*1000);
      let payDay = [
        ('0' + date.getDate()).slice(-2),
        ('0' + (date.getMonth()+1)).slice(-2),
        date.getFullYear()
      ]
      return payDay.join('.');
    },
    speedCheck(title) {
      if (title.includes('Земля')) return 'tarif__speed_color-earth';
      if (title.includes('Вода')) return 'tarif__speed_color-water';
      if (title.includes('Огонь')) return 'tarif__speed_color-fire';
    },
    getPeriodName(payPeriod) {
      if (payPeriod[payPeriod.length-1] == 1) return payPeriod + ' месяц';
      else if (payPeriod[payPeriod.length-2] != 1 && 
               payPeriod[payPeriod.length-1] > 1 &&
               payPeriod[payPeriod.length-1] < 5) {
               return payPeriod + ' месяца';
              }
      else return payPeriod + ' месяцев';
    },
    showGroup(groupNumber) {
      axios
        .get('functions.php?view=group&group='+groupNumber)
        .then((response) => {
          this.content = response.data;
          this.tarifTitle = this.content[0];
          this.content.shift();
          this.groupNum = groupNumber;
          this.show = 'group';
        })
    },
    showGroups() {
      axios
      .get('functions.php?view=groups')
      .then((response) => {
        this.content = response.data;
        this.show = 'groups';
      })
    },
    showTarif(tarif){
      groupNum = mainPage.groupNum;
      mainPage.content = mainPage.content[tarif];
      mainPage.show = 'tarif';
    },
  },
  mounted() {
    this.showGroups();
  }})