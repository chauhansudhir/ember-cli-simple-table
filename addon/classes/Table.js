import Ember from 'ember';
import Column from './Column';

const {
  makeArray,
  isBlank,
  computed
} = Ember;

export default class Table extends Ember.Object.extend({
  rows: [],
  columns: [],
  subColumns: null,
  hasSubColumns: computed.notEmpty('subColumns'),
  sortedColumns: computed.filterBy('columns', 'sorted', true).readOnly(),
  sortableColumns: computed.filterBy('columns', 'sortable', true).readOnly(),
}) {
  constructor(columns = []) {
    super();
    let colSet = makeArray();
    let subCols = makeArray();
    makeArray(columns).forEach(col => {
      let conSpan = 0;
      if (!isBlank(col.subColumns)) {
        makeArray(col.subColumns).forEach((x) => {
          conSpan++;
          colSet.push(new Column(x));
        });
        subCols.push(new Column(col, conSpan));
      } else {
        colSet.push(new Column(col));
      }
    });
    this.setProperties({
      columns: colSet,
      subColumns: subCols
    });
  }
  destroy() {
    this._super(...arguments);
  }
}
