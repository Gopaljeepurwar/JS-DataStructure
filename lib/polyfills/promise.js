'use strict';

(function(module) {
  function Promise(callback) {
    let successCallback;
    let failureCallback;

    this.resolve = function(value) {
      successCallback(value);
    };

    this.reject = function(error) {
      failureCallback(error);
    };

    this.then = function(callback) {
      successCallback = callback;
      return this;
    };

    this.catch = function(callback) {
      failureCallback = callback;
      return this;
    };
    if (typeof callback === 'function') {
      callback(this.resolve, this.reject);
    }
    return this;
  }

  Promise.all = function(promises) {
    let counter = 0;
    let values = [];
    const _promise = new Promise();

    values.length = promises.length;
    (promises || []).forEach(function(promise, index) {
      promise
        .then(function(value) {
          values[index] = value;
          counter++;
          if (counter === promises.length) {
            _promise.resolve(values);
          }
        })
        .catch(function(error) {
          _promise.reject(error);
        });
    });

    return _promise;
  };

  Promise.race = function(promises) {
    const _promise = new Promise();

    (promises || []).forEach(function(promise, index) {
      promise
        .then(function(value) {
          _promise.resolve(value);
        })
        .catch(function(error) {
          _promise.reject(error);
        });
    });
    return _promise;
  };

  module.exports = Promise;
})(module);
