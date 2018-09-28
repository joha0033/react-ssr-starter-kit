'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// transpile to babel before publishing

class StateApi {
  constructor(rawData) {
    this.lookupAuthor = id => this.data.users[id];

    this.getState = () => this.data;

    this.subscribe = cb => {
      this.lastSubscriptionId++;
      this.subscription[this.lastSubscriptionId] = cb;
      return this.lastSubscriptionId;
    };

    this.unsubscribe = subscriptionId => delete this.subscribe[subscriptionId];

    this.notifySubscribers = () => Object.values(this.subscription).forEach(cb => cb());

    this.mergeWithState = stateChange => {
      this.data = _extends({}, this.data, stateChange);
      this.notifySubscribers();
    };

    this.setSearchTerm = searchTerm => {
      this.mergeWithState({
        searchTerm
      });
    };

    this.startClock = () => {
      setInterval(() => {
        this.mergeWithState({
          timestamp: new Date()
        });
      }, 1000);
    };

    this.data = {
      posts: this.mapIntoObject(rawData.posts),
      users: this.mapIntoObject(rawData.users),
      searchTerm: '',
      timestamp: new Date()
    }, this.subscription = {}, this.lastSubscriptionId = 0;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, cur) => {
      acc[cur._id] = cur;
      return acc;
    }, {});
  }

}

exports.default = StateApi;