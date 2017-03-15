import Ember from 'ember';
import layout from '../templates/components/ember-cli-simple-table';

const {
  get,
  set,
  computed,
  isEqual,
  String:{htmlSafe}
} = Ember;

const SORT_ORDER_ASC = 'asc';
const SORT_ORDER_DESC = 'desc';

export default Ember.Component.extend({
  layout,
  table: null,
  rows: null,
  expandedRowTemplate: null,
  containerStyle: computed('table.hasSubColumns', function() {
    return this.get('table.hasSubColumns') ? htmlSafe('fixed-table-container grouped-container') : htmlSafe('fixed-table-container');
  }),
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
