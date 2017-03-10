import Ember from 'ember';

export default Ember.Route.extend({
  columns: [
    {value: '_id', title: 'ID', sortable: false},
    {value: 'balance', title: 'Balance', sortable: true, dir: 'desc'},
    {value: 'first', title: 'Name', sortable: true},
    {value: 'company', title: 'Company', sortable: true},
    {value: 'address', title: 'Address'}
  ],
  tableData: Ember.A([]),
  model(params) {
    let tempObj = {
      "_id": "58c0f59a9bf8c3a25dd0fa61",
      "balance": "$2,801.46",
      "age": 32,
      "eyeColor": "blue",
      "first": "Adrian",
      "last": "Mccullough",
      "company": "BALOOBA",
      "phone": "+1 (996) 411-2327",
      "address": "712 Central Avenue, Yukon, Kansas, 228"
    };
    let data = Ember.A([]);
    for(let i = 0; i < 1000; i++) {
      this.get('tableData').addObject(Ember.copy(tempObj));
    }

    data.addObject(Ember.copy(tempObj));
    let i = 0;
    let interval = setInterval(() => {
        for(let i = 0; i < 5; i++) {
          data.addObject(Ember.copy(tempObj));
          if (this.get('tableData.length') > 0) {
          //  this.get('tableData').removeAt(i);
            //Ember.set(this.get('tableData').objectAt(i), '__table_meta_expanded', true);
          }
        }
        i++;
        console.log(i, data.get('length'));
        if ( i == 10) {
          clearInterval(interval);
        }
    }, 1000);

    return new Promise(function(resolve, reject) {
      setTimeout(x => {
        resolve(data);
      }, 2000);
    })
  },

  setupController(controller, model) {
    controller.set('columns', this.get('columns'));
    controller.set('tableData', this.get('tableData'));
    this._super(...arguments);
  }
});
