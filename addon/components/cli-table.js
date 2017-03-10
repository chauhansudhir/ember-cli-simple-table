import Ember from 'ember';
import layout from '../templates/components/cli-table';

const {
  get,
  set,
  computed,
  isEqual
} = Ember;

const SORT_ORDER_ASC = 'asc';
const SORT_ORDER_DESC = 'desc';

export default Ember.Component.extend({
  layout,
  columns: null,
  rows: null,
  multipleColumnSort: false,
  columnClickAction: null,
  expandedRowFlagKey: '__table_meta_expanded',
  sortedColumns: computed.filterBy('columns', 'sorted', true).readOnly(),
  sortableColumns: computed.filterBy('columns', 'sortable', true).readOnly(),

  actions: {
    columnClick(column) {
      if (isEqual(get(column, 'sortable'), false)) {
        return;
      }
      let direction = column.dir  || SORT_ORDER_ASC;
      if (isEqual(this.get('multipleColumnSort'), false)) {
        this.get('sortableColumns').setEach('dir', null);
      }
      set(column, 'dir',  direction === SORT_ORDER_ASC ? SORT_ORDER_DESC : SORT_ORDER_ASC);
      this.sendAction('columnClickAction', ...arguments);
    },

    rowClick(item) {
      item.toggleProperty(this.get('expandedRowFlagKey'));
    }
  }
});
