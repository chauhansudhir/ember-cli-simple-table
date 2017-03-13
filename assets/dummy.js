"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/cli-table', ['exports', 'ember-cli-simple-table/components/cli-table'], function (exports, _emberCliSimpleTableComponentsCliTable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliSimpleTableComponentsCliTable['default'];
    }
  });
});
define('dummy/ember-cli-simple-table/tests/modules/ember-cli-simple-table/classes/Column.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-cli-simple-table/classes/Column.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-cli-simple-table/classes/Column.js should pass jshint.');
  });
});
define('dummy/ember-cli-simple-table/tests/modules/ember-cli-simple-table/classes/Table.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-cli-simple-table/classes/Table.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-cli-simple-table/classes/Table.js should pass jshint.');
  });
});
define('dummy/ember-cli-simple-table/tests/modules/ember-cli-simple-table/components/cli-table.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-cli-simple-table/components/cli-table.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-cli-simple-table/components/cli-table.js should pass jshint.\nmodules/ember-cli-simple-table/components/cli-table.js: line 9, col 3, Redefinition of \'String\'.\n\n1 error');
  });
});
define('dummy/ember-cli-simple-table/tests/modules/ember-cli-simple-table/index.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-cli-simple-table/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-cli-simple-table/index.js should pass jshint.');
  });
});
define('dummy/helpers/app-version', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _dummyConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  var _config$APP = _dummyConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("dummy/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType,
    rootURL: _dummyConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('dashboard');
  });

  exports['default'] = Router;
});
define('dummy/routes/dashboard', ['exports', 'ember', 'ember-cli-simple-table'], function (exports, _ember, _emberCliSimpleTable) {
  exports['default'] = _ember['default'].Route.extend({
    columns: [{ title: 'Group 1', sortable: false, subColumns: [{ valuePath: '_id', title: 'ID', sortable: false }, { valuePath: 'balance', title: 'Balance', sortable: true, dir: 'desc' }] }, { title: 'Group 2', sortable: false, subColumns: [{ valuePath: 'first', title: 'Name', sortable: true }, { valuePath: 'company', title: 'Company', sortable: true }, { valuePath: 'address', title: 'Address' }] }],
    columnsSimple: [{ valuePath: '_id', title: 'ID', sortable: false }, { valuePath: 'balance', title: 'Balance', sortable: true, dir: 'desc' }, { valuePath: 'first', title: 'Name', sortable: true }, { valuePath: 'company', title: 'Company', sortable: true }, { valuePath: 'address', title: 'Address' }],
    tableData: _ember['default'].A([]),
    model: function model(params) {
      var _this = this;

      var tempObj = {
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
      var data = _ember['default'].A([]);
      setTimeout(function (x) {
        for (var i = 0; i < 2000; i++) {
          _this.get('tableData').addObject(_ember['default'].copy(tempObj));
        }
      }, 1000);
      for (var i = 0; i < 100; i++) {
        data.addObject(_ember['default'].copy(tempObj));
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

    setupController: function setupController(controller, model) {
      var table = new _emberCliSimpleTable['default'](this.get('columns'));
      var table1 = new _emberCliSimpleTable['default'](this.get('columnsSimple'));
      controller.set('table', table);
      controller.set('table1', table1);
      controller.set('tableData', this.get('tableData'));
      this._super.apply(this, arguments);
    }
  });
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3hM3Un8V", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
define("dummy/templates/dashboard", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "AHVyb6+p", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"tableData\",\"length\"]],false],[\"text\",\" Rows\\n\"],[\"append\",[\"helper\",[\"cli-table\"],null,[[\"table\",\"rows\"],[[\"get\",[\"table\"]],[\"get\",[\"tableData\"]]]]],false],[\"text\",\"\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"model\",\"length\"]],false],[\"text\",\" Rows\\n\"],[\"append\",[\"helper\",[\"cli-table\"],null,[[\"table\",\"rows\"],[[\"get\",[\"table1\"]],[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/dashboard.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-cli-simple-table","version":"0.0.2+bf56e7c2"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
