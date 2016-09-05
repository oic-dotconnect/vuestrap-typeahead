import { typeahead } from 'vue-strap'

new Vue({
  components: {
      typeahead:typeahead
    },
    data() {
      return {
        customTemplate: '{{item.login}}',
        name: [],
        asynchronous: '{{item.formatted_address}}',
      }
    },
    methods: {
      githubCallback(items) {
        //window.open(items.html_url, '_blank')
        console.log(items.formatted_address)
      },
      googleCallback(items, targetVM) {
        console.log(items.formatted_address)
        this.name.push(items.formatted_address);
        const that = targetVM;
        that.reset()
        that.value = items.formatted_addres
      }
    }
}).$mount('body');
