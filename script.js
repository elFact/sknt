let mainPage = new Vue({
  el: '#tarifs',
  data: {
    content: '',
    show: 'groups',
  },
  methods: {
    showGroup(groupNumber) {
      axios
      .get('json.php?view=tarif&group='+groupNumber)
      .then((response) => {
        this.show = 'group';
        this.content = response.data;
      })
    },
    goBack() {
      this.show = 'groups';
    }
  },

  // mounted: function() {
  //   axios
  //     .post('json.php?view=tarifs')
  //     .then(function (response) {
  //       mainPage.content = response.data;
  //     })
  // },
})