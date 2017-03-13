import Ember from 'ember';

export default class Column extends Ember.Object.extend({
  valuePath: null,
  templatePath: null,
  multipleColumnSort: false,
  columnClickAction: null,
  expandedRowFlagKey: '__table_meta_expanded',
  colSpan: null
}) {
  constructor(column = {}, colSpan = null) {
    super();
    this.setProperties(column);
    this.set('colSpan', colSpan);
  }
}
