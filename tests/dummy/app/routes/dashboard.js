import Ember from 'ember';
import Table from 'ember-cli-simple-table';

export default Ember.Route.extend({
  columns: [
    {title: 'Group 1', sortable: false, subColumns: [
      {valuePath: '_id', title: 'ID', sortable: false},
      {valuePath: 'balance', title: 'Balance', sortable: true, dir: 'desc'},
    ]},
    {title: 'Group 2', sortable: false, subColumns: [
      {valuePath: 'first', title: 'Name', sortable: true},
      {valuePath: 'company', title: 'Company', sortable: true},
      {valuePath: 'address', title: 'Address'}
    ]}
  ],
  columnsSimple: [
    {valuePath: '_id', title: 'ID', sortable: false},
    {valuePath: 'balance', title: 'Balance', sortable: true, dir: 'desc'},
    {valuePath: 'first', title: 'Name', sortable: true},
    {valuePath: 'company', title: 'Company', sortable: true},
    {valuePath: 'address', title: 'Address'}
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
    setTimeout(x => {
      for(let i = 0; i < 2000; i++) {
        this.get('tableData').addObject(Ember.copy(tempObj));
      }
    }, 1000);
    for(let i = 0; i < 100; i++) {
      data.addObject(Ember.copy(tempObj));
    }
    // let i = 0;
    // let interval = setInterval(() => {
    //     for(let i = 0; i < 5; i++) {
    //       data.addObject(Ember.copy(tempObj));
    //       if (this.get('tableData.length') > 0) {
    //       //  this.get('tableData').removeAt(i);
    //         //Ember.set(this.get('tableData').objectAt(i), '__table_meta_expanded', true);
    //       }
    //     }
    //     i++;
    //     console.log(i, data.get('length'));
    //     if ( i == 10) {
    //       clearInterval(interval);
    //     }
    // }, 1000);

    // return new Promise(function(resolve, reject) {
    //   setTimeout(x => {
    //     resolve(data);
    //   }, 500);
    // })
    return data;
  },

  setupController(controller, model) {
    let table = new Table(this.get('columns'));
    let table1 = new Table(this.get('columnsSimple'));
    controller.set('table', table);
    controller.set('table1', table1);
    controller.set('tableData', this.get('tableData'));
    this._super(...arguments);
  }
});
