# ember-cli-table

Check test/dummy app dashboard route
```
myroute.js

columns: [
  {valuePath: '_id', title: 'ID', sortable: false},
  {valuePath: 'balance', title: 'Balance', sortable: true, dir: 'desc'},
  {valuePath: 'first', title: 'Name', sortable: true},
  {valuePath: 'company', title: 'Company', sortable: true},
  {valuePath: 'address', title: 'Address'}
]
setupController(controller, model) {
  let table = new Table(this.get('columns'));
  controller.set('table', table);
  controller.set('tableData', this.get('tableData'));
  this._super(...arguments);
}
model() {
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

  for(let i = 0; i < 100; i++) {
    data.addObject(Ember.copy(tempObj));
  }
  return data;
}

# application template
{{cli-table table=table rows=tableData}}
```
This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-table`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
