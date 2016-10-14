Parse.initialize("BtUb3tIMS0QgBhhuUlC5dcoU6bbDjHJBnIrx2sJr", "BeIw56xBQw4ENNnrEFyqbMMkOselNeOEOVcSz5i6");
var mainApp = angular.module("mainApp", ['ngRoute', 'infinite-scroll','ui.bootstrap','ui-rangeSlider', 'toaster']);
mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'deal.html',
        controller: 'MainCtrldeal',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Womens_Ethnic_Wear';
            }
        }
    }).when('/Mens_Clothing', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Mens_Clothing';
            }
        }
    }).when('/men_Footware', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Mens_Footwear';
            }
        }
    }).when('/Sunglasses', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Eyewear';
            }
        }
    }).when('/watches', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Watches';
            }
        }
    }).when('/Jewellery', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Jewellery';
            }
        }
    }).when('/Furniture', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Furniture';
            }
        }
    }).when('/Office_Equipment', {
        templateUrl: 'Common.html',
        controller: 'MainCtr',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Office_Equipment';
            }
        }
    }).when('/Bags_Luggage', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Bags_Luggage';
            }
        }
    }).when('/Mobiles_Tablets', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Mobiles_Tablets';
            }
        }
    }).when('/Kids_Footwear', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Kids_Footwear';
            }
        }
    }).when('/about', {
        templateUrl: 'about.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Eyewear';
            }
        }
    }).when('/contact', {
        templateUrl: 'contact.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Eyewear';
            }
        }
    }).when('/Computers_Peripherals', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Computers_Peripherals';
            }
        }
    }).when('/Womens_Ethnic_Wear', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Womens_Ethnic_Wear';
            }
        }
    }).when('/Womens_Footwear', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Womens_Footwear';
            }
        }
    }).when('/Womens_Clothing', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Womens_Clothing';
            }
        }
    }).when('/Beauty_Personal_Care', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Beauty_Personal_Care';
            }
        }
    }).when('/Fragrances', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Fragrances';
            }
        }
    }).when('/Appliances', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Appliances';
            }
        }
    }).when('/Kitchenware', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'Kitchenware';
            }
        }
    }).when('/kid', {
        templateUrl: 'fk.html',
        controller: 'MainCtrlfkg',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'kids_clothing';
            }
        }
    }).when('/Toys', {
        templateUrl: 'fk.html',
        controller: 'MainCtrlfkg',
        resolve: {
            test: function($route) {
                $route.current.params.test = 'toys';
            }
        }
    })
         .when('/air_coolers', {
        templateUrl: 'fk.html',
          controller: 'MainCtrlfkg',
        resolve: {
            test: function ($route) { $route.current.params.test = 'air_coolers'; }
        }
      })
                  .when('/food_nutrition', {
        templateUrl: 'fk.html',
          controller: 'MainCtrlfkg',
        resolve: {
            test: function ($route) { $route.current.params.test = 'air_conditioners'; }
        }
      })
         .when('/Lingerie', {
        templateUrl: 'fk.html',
          controller: 'MainCtrlfkg',
        resolve: {
            test: function ($route) { $route.current.params.test = 'womens_clothing'; }
        }
        
      })

    .otherwise({
        redirectTo: '/'
    });
}]);
/*mainApp.directive('loading', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="loading"><img src="images/loading.gif" width="100" height="80" /></div>',
        link: function(scope, element, attr) {
            scope.$watch('loading', function(val) {
                if (val) $(element).show();
                else
                    $(element).hide();
            });
        }
    }
*/
/*
 *  Angular RangeSlider Directive
 * 
 *  Version: 0.0.13
 *
 *  Author: Daniel Crisp, danielcrisp.com
 *
 *  The rangeSlider has been styled to match the default styling
 *  of form elements styled using Twitter's Bootstrap
 *
 *  Originally forked from https://github.com/leongersen/noUiSlider
 *

    This code is released under the MIT Licence - http://opensource.org/licenses/MIT

    Copyright (c) 2013 Daniel Crisp

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

*/

(function() {
    'use strict';

    // check if we need to support legacy angular
    var legacySupport = (angular.version.major === 1 && angular.version.minor === 0);

    /**
     * RangeSlider, allows user to define a range of values using a slider
     * Touch friendly.
     * @directive
     */
    angular.module('ui-rangeSlider', [])
        .directive('rangeSlider', ['$document', '$filter', '$log', function($document, $filter, $log) {

            // test for mouse, pointer or touch
            var eventNamespace = '.rangeSlider',

                defaults = {
                    disabled: false,
                    orientation: 'horizontal',
                    step: 0,
                    decimalPlaces: 0,
                    showValues: true,
                    preventEqualMinMax: false,
                    attachHandleValues: false
                },

                // Determine the events to bind. IE11 implements pointerEvents without
                // a prefix, which breaks compatibility with the IE10 implementation.
                /** @const */
                actions = window.navigator.pointerEnabled ? {
                    start: 'pointerdown',
                    move: 'pointermove',
                    end: 'pointerup',
                    over: 'pointerdown',
                    out: 'mouseout'
                } : window.navigator.msPointerEnabled ? {
                    start: 'MSPointerDown',
                    move: 'MSPointerMove',
                    end: 'MSPointerUp',
                    over: 'MSPointerDown',
                    out: 'mouseout'
                } : {
                    start: 'mousedown touchstart',
                    move: 'mousemove touchmove',
                    end: 'mouseup touchend',
                    over: 'mouseover touchstart',
                    out: 'mouseout'
                },

                onEvent = actions.start + eventNamespace,
                moveEvent = actions.move + eventNamespace,
                offEvent = actions.end + eventNamespace,
                overEvent = actions.over + eventNamespace,
                outEvent = actions.out + eventNamespace,

                // get standarised clientX and clientY
                client = function(f) {
                    try {
                        return [(f.clientX || f.originalEvent.clientX || f.originalEvent.touches[0].clientX), (f.clientY || f.originalEvent.clientY || f.originalEvent.touches[0].clientY)];
                    } catch (e) {
                        return ['x', 'y'];
                    }
                },

                restrict = function(value) {

                    // normalize so it can't move out of bounds
                    return (value < 0 ? 0 : (value > 100 ? 100 : value));

                },

                isNumber = function(n) {
                    // console.log(n);
                    return !isNaN(parseFloat(n)) && isFinite(n);
                },

                scopeOptions = {
                    disabled: '=?',
                    min: '=',
                    max: '=',
                    modelMin: '=?',
                    modelMax: '=?',
                    onHandleDown: '&', // calls optional function when handle is grabbed
                    onHandleUp: '&', // calls optional function when handle is released
                    orientation: '@', // options: horizontal | vertical | vertical left | vertical right
                    step: '@',
                    decimalPlaces: '@',
                    filter: '@',
                    filterOptions: '@',
                    showValues: '@',
                    pinHandle: '@',
                    preventEqualMinMax: '@',
                    attachHandleValues: '@',
                    getterSetter: '@' // Allow the use of getterSetters for model values
                };

            if (legacySupport) {
                // make optional properties required
                scopeOptions.disabled = '=';
                scopeOptions.modelMin = '=';
                scopeOptions.modelMax = '=';
            }

            // if (EVENT < 4) {
            //     // some sort of touch has been detected
            //     angular.element('html').addClass('ngrs-touch');
            // } else {
            //     angular.element('html').addClass('ngrs-no-touch');
            // }


            return {
                restrict: 'A',
                replace: true,
                template: ['<div class="ngrs-range-slider">',
                    '<div class="ngrs-runner">',
                    '<div class="ngrs-handle ngrs-handle-min"><i></i></div>',
                    '<div class="ngrs-handle ngrs-handle-max"><i></i></div>',
                    '<div class="ngrs-join"></div>',
                    '</div>',
                    '<div class="ngrs-value-runner">',
                    '<div class="ngrs-value ngrs-value-min" ng-show="showValues"><div>{{filteredModelMin}}</div></div>',
                    '<div class="ngrs-value ngrs-value-max" ng-show="showValues"><div>{{filteredModelMax}}</div></div>',
                    '</div>',
                    '</div>'
                ].join(''),
                scope: scopeOptions,
                link: function(scope, element, attrs, controller) {

                    /**
                     *  FIND ELEMENTS
                     */

                    var $slider = angular.element(element),
                        handles = [element.find('.ngrs-handle-min'), element.find('.ngrs-handle-max')],
                        values = [element.find('.ngrs-value-min'), element.find('.ngrs-value-max')],
                        join = element.find('.ngrs-join'),
                        pos = 'left',
                        posOpp = 'right',
                        orientation = 0,
                        allowedRange = [0, 0],
                        range = 0,
                        down = false;

                    // filtered
                    scope.filteredModelMin = modelMin();
                    scope.filteredModelMax = modelMax();

                    /**
                     *  FALL BACK TO DEFAULTS FOR SOME ATTRIBUTES
                     */

                    attrs.$observe('disabled', function(val) {
                        if (!angular.isDefined(val)) {
                            scope.disabled = defaults.disabled;
                        }

                        scope.$watch('disabled', setDisabledStatus);
                    });

                    attrs.$observe('orientation', function(val) {
                        if (!angular.isDefined(val)) {
                            scope.orientation = defaults.orientation;
                        }

                        var classNames = scope.orientation.split(' '),
                            useClass;

                        for (var i = 0, l = classNames.length; i < l; i++) {
                            classNames[i] = 'ngrs-' + classNames[i];
                        }

                        useClass = classNames.join(' ');

                        // add class to element
                        $slider.addClass(useClass);

                        // update pos
                        if (scope.orientation === 'vertical' || scope.orientation === 'vertical left' || scope.orientation === 'vertical right') {
                            pos = 'top';
                            posOpp = 'bottom';
                            orientation = 1;
                        }
                    });

                    attrs.$observe('step', function(val) {
                        if (!angular.isDefined(val)) {
                            scope.step = defaults.step;
                        }
                    });

                    attrs.$observe('decimalPlaces', function(val) {
                        if (!angular.isDefined(val)) {
                            scope.decimalPlaces = defaults.decimalPlaces;
                        }
                    });

                    attrs.$observe('showValues', function(val) {
                        if (!angular.isDefined(val)) {
                            scope.showValues = defaults.showValues;
                        } else {
                            if (val === 'false') {
                                scope.showValues = false;
                            } else {
                                scope.showValues = true;
                            }
                        }
                    });

                    attrs.$observe('pinHandle', function(val) {
                        if (!angular.isDefined(val)) {
                            scope.pinHandle = null;
                        } else {
                            if (val === 'min' || val === 'max') {
                                scope.pinHandle = val;
                            } else {
                                scope.pinHandle = null;
                            }
                        }

                        scope.$watch('pinHandle', setPinHandle);
                    });

                    attrs.$observe('preventEqualMinMax', function(val) {
                        if (!angular.isDefined(val)) {
                            scope.preventEqualMinMax = defaults.preventEqualMinMax;
                        } else {
                            if (val === 'false') {
                                scope.preventEqualMinMax = false;
                            } else {
                                scope.preventEqualMinMax = true;
                            }
                        }
                    });

                    attrs.$observe('attachHandleValues', function(val) {
                        if (!angular.isDefined(val)) {
                            scope.attachHandleValues = defaults.attachHandleValues;
                        } else {
                            if (val === 'true' || val === '') {
                                // flag as true
                                scope.attachHandleValues = true;
                                // add class to runner
                                element.find('.ngrs-value-runner').addClass('ngrs-attached-handles');
                            } else {
                                scope.attachHandleValues = false;
                            }
                        }
                    });

                    // GetterSetters for model values

                    function modelMin(newValue) {
                        if(scope.getterSetter) {
                            return arguments.length ? scope.modelMin(newValue) : scope.modelMin();
                        } else {
                            return arguments.length ? (scope.modelMin = newValue) : scope.modelMin;
                        }
                    }

                    function modelMax(newValue) {
                        if(scope.getterSetter) {
                            return arguments.length ? scope.modelMax(newValue) : scope.modelMax();
                        } else {
                            return arguments.length ? (scope.modelMax = newValue) : scope.modelMax;
                        }
                    }

                    // listen for changes to values
                    scope.$watch('min', setMinMax);
                    scope.$watch('max', setMinMax);

                    scope.$watch(function () {
                        return modelMin();
                    }, setModelMinMax);
                    scope.$watch(function () {
                        return modelMax();
                    }, setModelMinMax);

                    /**
                     * HANDLE CHANGES
                     */

                    function setPinHandle(status) {
                        if (status === "min") {
                            angular.element(handles[0]).css('display', 'none');
                            angular.element(handles[1]).css('display', 'block');
                        } else if (status === "max") {
                            angular.element(handles[0]).css('display', 'block');
                            angular.element(handles[1]).css('display', 'none');
                        } else {
                            angular.element(handles[0]).css('display', 'block');
                            angular.element(handles[1]).css('display', 'block');
                        }
                    }

                    function setDisabledStatus(status) {
                        if (status) {
                            $slider.addClass('ngrs-disabled');
                        } else {
                            $slider.removeClass('ngrs-disabled');
                        }
                    }

                    function setMinMax() {

                        if (scope.min > scope.max) {
                            throwError('min must be less than or equal to max');
                        }

                        // only do stuff when both values are ready
                        if (angular.isDefined(scope.min) && angular.isDefined(scope.max)) {

                            // make sure they are numbers
                            if (!isNumber(scope.min)) {
                                throwError('min must be a number');
                            }

                            if (!isNumber(scope.max)) {
                                throwError('max must be a number');
                            }

                            range = scope.max - scope.min;
                            allowedRange = [scope.min, scope.max];

                            // update models too
                            setModelMinMax();

                        }
                    }

                    function setModelMinMax() {

                        if (modelMin() > modelMax()) {
                            throwWarning('modelMin must be less than or equal to modelMax');
                            // reset values to correct
                            modelMin(modelMax());
                        }

                        // only do stuff when both values are ready
                        if (
                            (angular.isDefined(modelMin()) || scope.pinHandle === 'min') &&
                            (angular.isDefined(modelMax()) || scope.pinHandle === 'max')
                        ) {

                            // make sure they are numbers
                            if (!isNumber(modelMin())) {
                                if (scope.pinHandle !== 'min') {
                                    throwWarning('modelMin must be a number');
                                }
                                modelMin(scope.min);
                            }

                            if (!isNumber(modelMax())) {
                                if (scope.pinHandle !== 'max') {
                                    throwWarning('modelMax must be a number');
                                }
                                modelMax(scope.max);
                            }

                            var handle1pos = restrict(((modelMin() - scope.min) / range) * 100),
                                handle2pos = restrict(((modelMax() - scope.min) / range) * 100),
                                value1pos,
                                value2pos;

                            if (scope.attachHandleValues) {
                                value1pos = handle1pos;
                                value2pos = handle2pos;
                            }

                            // make sure the model values are within the allowed range
                            modelMin(Math.max(scope.min, modelMin()));
                            modelMax(Math.min(scope.max, modelMax()));

                            if (scope.filter && scope.filterOptions) {
                                scope.filteredModelMin = $filter(scope.filter)(modelMin(), scope.filterOptions);
                                scope.filteredModelMax = $filter(scope.filter)(modelMax(), scope.filterOptions);
                            } else if (scope.filter) {

                                var filterTokens = scope.filter.split(':'),
                                    filterName = scope.filter.split(':')[0],
                                    filterOptions = filterTokens.slice().slice(1),
                                    modelMinOptions,
                                    modelMaxOptions;

                                // properly parse string and number args
                                filterOptions = filterOptions.map(function (arg) {
                                    if (isNumber(arg)) {
                                        return +arg;
                                    } else if ((arg[0] == "\"" && arg[arg.length-1] == "\"") || (arg[0] == "\'" && arg[arg.length-1] == "\'")) {
                                        return arg.slice(1, -1);
                                    }
                                });

                                modelMinOptions = filterOptions.slice();
                                modelMaxOptions = filterOptions.slice();
                                modelMinOptions.unshift(modelMin());
                                modelMaxOptions.unshift(modelMax());

                                scope.filteredModelMin = $filter(filterName).apply(null, modelMinOptions);
                                scope.filteredModelMax = $filter(filterName).apply(null, modelMaxOptions);
                            } else {
                                scope.filteredModelMin = modelMin();
                                scope.filteredModelMax = modelMax();
                            }

                            // check for no range
                            if (scope.min === scope.max && modelMin() == modelMax()) {

                                // reposition handles
                                angular.element(handles[0]).css(pos, '0%');
                                angular.element(handles[1]).css(pos, '100%');

                                if (scope.attachHandleValues) {
                                    // reposition values
                                    angular.element(values[0]).css(pos, '0%');
                                    angular.element(values[1]).css(pos, '100%');
                                }

                                // reposition join
                                angular.element(join).css(pos, '0%').css(posOpp, '0%');

                            } else {

                                // reposition handles
                                angular.element(handles[0]).css(pos, handle1pos + '%');
                                angular.element(handles[1]).css(pos, handle2pos + '%');

                                if (scope.attachHandleValues) {
                                    // reposition values
                                    angular.element(values[0]).css(pos, value1pos + '%');
                                    angular.element(values[1]).css(pos, value2pos + '%');
                                    angular.element(values[1]).css(posOpp, 'auto');
                                }

                                // reposition join
                                angular.element(join).css(pos, handle1pos + '%').css(posOpp, (100 - handle2pos) + '%');

                                // ensure min handle can't be hidden behind max handle
                                if (handle1pos > 95) {
                                    angular.element(handles[0]).css('z-index', 3);
                                }
                            }

                        }

                    }

                    function handleMove(index) {

                        var $handle = handles[index];

                        // on mousedown / touchstart
                        $handle.bind(onEvent + 'X', function(event) {

                            var handleDownClass = (index === 0 ? 'ngrs-handle-min' : 'ngrs-handle-max') + '-down',
                                //unbind = $handle.add($document).add('body'),
                                modelValue = (index === 0 ? modelMin() : modelMax()) - scope.min,
                                originalPosition = (modelValue / range) * 100,
                                originalClick = client(event),
                                previousClick = originalClick,
                                previousProposal = false;

                            if (angular.isFunction(scope.onHandleDown)) {
                                scope.onHandleDown();
                            }

                            // stop user accidentally selecting stuff
                            angular.element('body').bind('selectstart' + eventNamespace, function() {
                                return false;
                            });

                            // only do stuff if we are disabled
                            if (!scope.disabled) {

                                // flag as down
                                down = true;

                                // add down class
                                $handle.addClass('ngrs-down');

                                $slider.addClass('ngrs-focus ' + handleDownClass);

                                // add touch class for MS styling
                                angular.element('body').addClass('ngrs-touching');

                                // listen for mousemove / touchmove document events
                                $document.bind(moveEvent, function(e) {
                                    // prevent default
                                    e.preventDefault();

                                    var currentClick = client(e),
                                        movement,
                                        proposal,
                                        other,
                                        per = (scope.step / range) * 100,
                                        otherModelPosition = (((index === 0 ? modelMax() : modelMin()) - scope.min) / range) * 100;

                                    if (currentClick[0] === "x") {
                                        return;
                                    }

                                    // calculate deltas
                                    currentClick[0] -= originalClick[0];
                                    currentClick[1] -= originalClick[1];

                                    // has movement occurred on either axis?
                                    movement = [
                                        (previousClick[0] !== currentClick[0]), (previousClick[1] !== currentClick[1])
                                    ];

                                    // propose a movement
                                    proposal = originalPosition + ((currentClick[orientation] * 100) / (orientation ? $slider.height() : $slider.width()));

                                    // normalize so it can't move out of bounds
                                    proposal = restrict(proposal);

                                    if (scope.preventEqualMinMax) {

                                        if (per === 0) {
                                            per = (1 / range) * 100; // restrict to 1
                                        }

                                        if (index === 0) {
                                            otherModelPosition = otherModelPosition - per;
                                        } else if (index === 1) {
                                            otherModelPosition = otherModelPosition + per;
                                        }
                                    }

                                    // check which handle is being moved and add / remove margin
                                    if (index === 0) {
                                        proposal = proposal > otherModelPosition ? otherModelPosition : proposal;
                                    } else if (index === 1) {
                                        proposal = proposal < otherModelPosition ? otherModelPosition : proposal;
                                    }

                                    if (scope.step > 0) {
                                        // only change if we are within the extremes, otherwise we get strange rounding
                                        if (proposal < 100 && proposal > 0) {
                                            proposal = Math.round(proposal / per) * per;
                                        }
                                    }

                                    if (proposal > 95 && index === 0) {
                                        $handle.css('z-index', 3);
                                    } else {
                                        $handle.css('z-index', '');
                                    }

                                    if (movement[orientation] && proposal != previousProposal) {

                                        if (index === 0) {

                                            // update model as we slide
                                            modelMin(parseFloat(parseFloat((((proposal * range) / 100) + scope.min)).toFixed(scope.decimalPlaces)));

                                        } else if (index === 1) {

                                            modelMax(parseFloat(parseFloat((((proposal * range) / 100) + scope.min)).toFixed(scope.decimalPlaces)));
                                        }

                                        // update angular
                                        scope.$apply();

                                        previousProposal = proposal;

                                    }

                                    previousClick = currentClick;

                                }).bind(offEvent, function() {

                                    if (angular.isFunction(scope.onHandleUp)) {
                                        scope.onHandleUp();
                                    }

                                    // unbind listeners
                                    $document.off(moveEvent);
                                    $document.off(offEvent);

                                    angular.element('body').removeClass('ngrs-touching');

                                    // cancel down flag
                                    down = false;

                                    // remove down and over class
                                    $handle.removeClass('ngrs-down');
                                    $handle.removeClass('ngrs-over');

                                    // remove active class
                                    $slider.removeClass('ngrs-focus ' + handleDownClass);

                                });
                            }

                        }).on(overEvent, function () {
                            $handle.addClass('ngrs-over');
                        }).on(outEvent, function () {
                            if (!down) {
                                $handle.removeClass('ngrs-over');
                            }
                        });
                    }

                    function throwError(message) {
                        scope.disabled = true;
                        throw new Error('RangeSlider: ' + message);
                    }

                    function throwWarning(message) {
                        $log.warn(message);
                    }

                    /**
                     * DESTROY
                     */

                    scope.$on('$destroy', function() {

                        // unbind event from slider
                        $slider.off(eventNamespace);

                        // unbind from body
                        angular.element('body').off(eventNamespace);

                        // unbind from document
                        $document.off(eventNamespace);

                        // unbind from handles
                        for (var i = 0, l = handles.length; i < l; i++) {
                            handles[i].off(eventNamespace);
                            handles[i].off(eventNamespace + 'X');
                        }

                    });

                    /**
                     * INIT
                     */

                    $slider
                    // disable selection
                        .bind('selectstart' + eventNamespace, function(event) {
                            return false;
                        })
                        // stop propagation
                        .bind('click', function(event) {
                            event.stopPropagation();
                        });

                    // bind events to each handle
                    handleMove(0);
                    handleMove(1);

                }
            };
        }]);

    // requestAnimationFramePolyFill
    // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
}());

mainApp.controller('cart', function ($scope,$uibModalInstance) {
	//$scope.cartdetails = cartdetails;
 $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
  

});
mainApp.controller('CheckoutCtrl', function ($scope, totalAmount,getImage,$uibModal,$uibModalInstance) {
		$scope.totalAmount = totalAmount;
	

	        $scope.counter = 0;
            $scope.count =1;
        $scope.checkout = function() {
          $uibModal.open({
                templateUrl: 'cart.html',
                 controller: 'cart',
                size: 'lg'
              
            });
        };


    $scope.cart = [];
      $scope.detailProduct = [];

$scope.removeToCart = function (x) 
{
  $scope.count--;

       $scope.cart.forEach(function (item) {
                if (item.id === x.id) {
                    item.quantity--;
                    $scope.count =item.quantity;
                    found = true;
                }
            });

}

$scope.checkout = function () {

     $uibModal.open({
                templateUrl: 'cart.html',
                controller: 'cart',
                size: 'lg',
                
            });

}

$scope.ContinueShopping = function () 
{
    
}


$scope.addToCart = function (x) {



console.log($scope.cart);
            var found = false;
            $scope.cart.forEach(function (item) {
                if (item.id === x.id) {
                    item.quantity++;
                    $scope.count =item.quantity;
                    found = true;
                }
            });
            if (!found) {
                $scope.cart.push(angular.extend({quantity: 1}, x));
               
            }
        };


        $scope.getCartPrice = function () {
            var total = 0;
            $scope.cart.forEach(function (x) {            		
                total += x.effectivePrice * x.quantity;
            });
            return total;
        };
		 
$scope.remove = function(item) { 
  var index = $scope.cart.indexOf(item);
  $scope.cart.splice(index, 1);     
}

		$scope.detailProduct = getImage;


 $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
  
	
		$scope.onSubmit = function () {
			$scope.processing = true;
		};

		$scope.stripeCallback = function (code, result) {
			$scope.processing = false;
			$scope.hideAlerts();
			if (result.error) {
				$scope.stripeError = result.error.message;
			} else {
				$scope.stripeToken = result.id;
			}
		};

		$scope.hideAlerts = function () {
			$scope.stripeError = null;
			$scope.stripeToken = null;
		};
	});


mainApp.controller('MainCtrldeal', function($scope, $http, $routeParams,toaster) {
    $scope.loading = true;
    var paramValue = $routeParams.test;
    $scope.totalDisplayed = 6
    $scope.users = [];
    var urlval = "";
    $scope.data = [];
    $scope.productBaseInfo = [];
    $scope.filter = {};
    var url = paramValue;

     toaster.pop({
                type: 'info',        
                body: 'Please Wait ...',
                timeout: 9000

            });

    Parse.Cloud.run('hellofk', {
        methodname: url
    }, {
        success: function(result) {
            setTimeout(function() {
                if (result.data.dotdList != null) {
                    $scope.data = result.data.dotdList;
                    $scope.$apply();
                };
            }, 500);
            $scope.loading = false;
        },
        error: function(error) {            
               toaster.pop({
                type: 'error',        
                body: 'Unable to connect service, Please Reload page!',
                timeout: 4000

            });
            $scope.loading = false;
        }
    });
    $scope.getCategories = function() {
        return ($scope.data || []).map(function(w) {
            return w.productBrand;
        }).filter(function(w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };
    $scope.getMoreData = function() {
        $scope.totalDisplayed += 3;
    }
    $scope.filterByCategory = function(data) {
        return $scope.filter[data.productBrand] || noFilter($scope.filter);
    };

    function noFilter(filterObj) {
        for (var key in filterObj) {
            if (filterObj[key]) {
                return false;
            }
        }
        return true;
    }
}).run(['$rootScope', function($scope) {
    $scope.scenario = 'Sign up';
    $scope.currentUser = Parse.User.current();
    $scope.signUp = function(form) {
        var user = new Parse.User();
        user.set("email", form.email);
        user.set("username", form.username);
        user.set("password", form.password);
        user.signUp(null, {
            success: function(user) {
                $scope.currentUser = user;
                $scope.$apply();
            },
            error: function(user, error) {
                alert("Unable to sign up:  " + error.code + " " + error.message);
            }
        });
    };
    $scope.logIn = function(form) {
        Parse.User.logIn(form.username, form.password, {
            success: function(user) {
                $scope.currentUser = user;
                $scope.$apply();
            },
            error: function(user, error) {
                alert("Unable to log in: " + error.code + " " + error.message);
            }
        });
    };
    $scope.logOut = function(form) {
        Parse.User.logOut();
        $scope.currentUser = null;
    };
}]);
mainApp.controller('DetailCtrl', function ($scope, totalAmount,getImage) {
		$scope.totalAmount = totalAmount;
		$scope.getImage = getImage;

		$scope.onSubmit = function () {
			$scope.processing = true;
		};

		$scope.stripeCallback = function (code, result) {
			$scope.processing = false;
			$scope.hideAlerts();
			if (result.error) {
				$scope.stripeError = result.error.message;
			} else {
				$scope.stripeToken = result.id;
			}
		};

		$scope.hideAlerts = function () {
			$scope.stripeError = null;
			$scope.stripeToken = null;
		};
	});

mainApp.controller('MainCtrlfk',function($scope,$http,$routeParams){$scope.loading=true;var paramValue=$routeParams.test;$scope.totalDisplayed=6
$scope.users=[];var urlval="";$scope.data=[];$scope.productBaseInfo=[];$scope.filter={};var url=paramValue;Parse.Cloud.run('hellofk',{methodname:url},{success:function(result){setTimeout(function(){if(result.data.productInfoList!=null){for(var i=result.data.productInfoList.length-1;i>=0;i--){$scope.productBaseInfo.push(result.data.productInfoList[i].productBaseInfo);};};if($scope.productBaseInfo!=null){for(var i=$scope.productBaseInfo.length-1;i>=0;i--){$scope.data.push($scope.productBaseInfo[i].productAttributes);};$scope.$apply();console.log($scope.data);$scope.loading=false;};},1000);$scope.loading=false;},error:function(error){console.log("Oops! Couldn't POST from Cloud Code successfully..  :"+error)
$scope.loading=false;}});$scope.getCategories=function(){return($scope.data||[]).map(function(w){return w.productBrand;}).filter(function(w,idx,arr){return arr.indexOf(w)===idx;});};$scope.getMoreData=function(){$scope.totalDisplayed+=3;}
$scope.filterByCategory=function(data){return $scope.filter[data.productBrand]||noFilter($scope.filter);};function noFilter(filterObj){for(var key in filterObj){if(filterObj[key]){return false;}}return true;}}).run(['$rootScope',function($scope){$scope.scenario='Sign up';$scope.currentUser=Parse.User.current();$scope.signUp=function(form){var user=new Parse.User();user.set("email",form.email);user.set("username",form.username);user.set("password",form.password);user.signUp(null,{success:function(user){$scope.currentUser=user;$scope.$apply();},error:function(user,error){alert("Unable to sign up:  "+error.code+" "+error.message);}});};$scope.logIn=function(form){Parse.User.logIn(form.username,form.password,{success:function(user){$scope.currentUser=user;$scope.$apply();},error:function(user,error){alert("Unable to log in: "+error.code+" "+error.message);}});};$scope.logOut=function(form){Parse.User.logOut();$scope.currentUser=null;};}]);
mainApp.controller('MainCtrlfkg',function($scope,$http,$routeParams){$scope.loading=true;var paramValue=$routeParams.test;$scope.totalDisplayed=6
$scope.users=[];var urlval="";$scope.data=[];$scope.productBaseInfo=[];$scope.filter={};var url=paramValue;Parse.Cloud.run('hellog',{methodname:url},{success:function(result){console.log(result);setTimeout(function(){if(result.data.productInfoList!=null){for(var i=result.data.productInfoList.length-1;i>=0;i--){$scope.productBaseInfo.push(result.data.productInfoList[i].productBaseInfoV1);};};if($scope.productBaseInfo!=null){for(var i=$scope.productBaseInfo.length-1;i>=0;i--){$scope.data.push($scope.productBaseInfo[i]);};$scope.$apply();console.log($scope.data);$scope.loading=false;};},1000);$scope.loading=false;},error:function(error){console.log("Oops! Couldn't POST from Cloud Code successfully..  :"+error)
$scope.loading=false;}});$scope.getCategories=function(){return($scope.data||[]).map(function(w){return w.productBrand;}).filter(function(w,idx,arr){return arr.indexOf(w)===idx;});};$scope.getMoreData=function(){$scope.totalDisplayed+=3;}
$scope.filterByCategory=function(data){return $scope.filter[data.productBrand]||noFilter($scope.filter);};function noFilter(filterObj){for(var key in filterObj){if(filterObj[key]){return false;}}return true;}}).run(['$rootScope',function($scope){$scope.scenario='Sign up';$scope.currentUser=Parse.User.current();$scope.signUp=function(form){var user=new Parse.User();user.set("email",form.email);user.set("username",form.username);user.set("password",form.password);user.signUp(null,{success:function(user){$scope.currentUser=user;$scope.$apply();},error:function(user,error){alert("Unable to sign up:  "+error.code+" "+error.message);}});};$scope.logIn=function(form){Parse.User.logIn(form.username,form.password,{success:function(user){$scope.currentUser=user;$scope.$apply();},error:function(user,error){alert("Unable to log in: "+error.code+" "+error.message);}});};$scope.logOut=function(form){Parse.User.logOut();$scope.currentUser=null;};}]);
mainApp.controller('MainCtrl', function($scope, $http, $routeParams,$uibModal,toaster) {
    $scope.loading = true;
    var paramValue = $routeParams.test;;
    $scope.totalDisplayed = 6
    $scope.users = [];
    $scope.filter = [];
    $scope.filter1 = [];
       $scope.filter2 = [];

    $scope.data = [];
    var urlval = "";


     toaster.pop({
                type: 'info',        
                body: 'Please Wait ...',
                timeout: 9000              
            });

        $scope.demo1 = {
                    min: 20,
                    max: 80
                };



    $scope.cart = [];
$scope.addToCart = function (x) {
            var found = false;
            $scope.cart.forEach(function (item) {
                if (item.id === x.id) {
                    item.quantity++;
                    found = true;
                }
            });
            if (!found) {
                $scope.cart.push(angular.extend({quantity: 1}, x));
               
            }
        };

        $scope.viewProduct = function (x) {

              var found = false;
            $scope.cart.forEach(function (item) {
                if (item.id === x.id) {
                    item.quantity++;
                    found = true;
                }
            });
            if (!found) {
                $scope.cart=[];
                $scope.cart.push(angular.extend({quantity: 1}, x));
               
            }


          $uibModal.open({
                templateUrl: 'checkout.html',
                controller: 'CheckoutCtrl',
                size: 'lg',
                resolve: {
                    totalAmount: $scope.getCartPrice,
                    getImage: $scope.getImage
                    
                }
            });
        };

          $scope.viewFilter = function () {

           


          $uibModal.open({
                templateUrl: 'viewFilter.html',
                controller: 'viewFilterCtrl',
                size: 'lg'
               
            });
        };

        $scope.getCartPrice = function () {
            var total = 0;
            $scope.cart.forEach(function (x) {
                total += x.mrp * x.quantity;
            });
            return total;
        };


 $scope.getImage = function () {
            var Image =[];
            $scope.cart.forEach(function (x) {
                Image.push(x);
            });
            return Image;
        };


        $scope.checkout = function () {
            $uibModal.open({
                templateUrl: 'checkout.html',
                controller: 'CheckoutCtrl',
                size: 'lg',
                resolve: {
                    totalAmount: $scope.getCartPrice,
                    getImage: $scope.getImage
                    
                }
            });
        };




    Parse.Cloud.run('hello', {
        methodname: $routeParams.test
    }, {
        success: function(result) {
            $scope.data = result.data.products;
            $scope.loading = false;
            $scope.$apply();
        },
        error: function(error) {
                     toaster.pop({
                type: 'error',        
                body: 'Unable to connect service, Please Reload page!',
                timeout: 4000

            });
            $scope.loading = false;
        }
    });
    $scope.getCategories = function() {
        return ($scope.data || []).map(function(w) {
            return w.subCategoryName;
        }).filter(function(w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };
     $scope.getbrand = function() {
        return ($scope.data || []).map(function(w) {
            return w.brand;
        }).filter(function(w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };

      $scope.getmrp = function() {
        return ($scope.data || []).map(function(w) {
            return w.mrp;
        }).filter(function(w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };
    

    $scope.getMoreData = function() {
        $scope.totalDisplayed += 3;
    }
    $scope.filterByCategory = function(data) {
        return $scope.filter[data.subCategoryName] || noFilter($scope.filter);
    };

  $scope.filterBybrand = function(data) {
        return $scope.filter1[data.brand] || noFilter($scope.filter1);
    };

  $scope.getmrp = function(data) {
        return $scope.filter2[data.mrp] || noFilter($scope.filter2);
    };




    function noFilter(filterObj) {
        for (var key in filterObj) {
            if (filterObj[key]) {
                return false;
            }
        }
        return true;
    }
}).run(['$rootScope', function($scope) {
    $scope.scenario = 'Sign up';
    $scope.currentUser = Parse.User.current();
    $scope.signUp = function(form) {
        var user = new Parse.User();
        user.set("email", form.email);
        user.set("username", form.username);
        user.set("password", form.password);
        user.signUp(null, {
            success: function(user) {
                $scope.currentUser = user;
                $scope.$apply();
            },
            error: function(user, error) {
                alert("Unable to sign up:  " + error.code + " " + error.message);
            }
        });
    };
    $scope.logIn = function(form) {
        Parse.User.logIn(form.username, form.password, {
            success: function(user) {
                $scope.currentUser = user;
                $scope.$apply();
            },
            error: function(user, error) {
                alert("Unable to log in: " + error.code + " " + error.message);
            }
        });
    };
    $scope.logOut = function(form) {
        Parse.User.logOut();
        $scope.currentUser = null;
    };
}]);
'use strict';


angular.module('ngCart', ['ngCart.directives'])

    .config([function () {

    }])

    .provider('$ngCart', function () {
        this.$get = function () {
        };
    })

    .run(['$rootScope', 'ngCart','ngCartItem', 'store', function ($rootScope, ngCart, ngCartItem, store) {

        $rootScope.$on('ngCart:change', function(){
            ngCart.$save();
        });

        if (angular.isObject(store.get('cart'))) {
            ngCart.$restore(store.get('cart'));

        } else {
            ngCart.init();
        }

    }])

    .service('ngCart', ['$rootScope', '$window', 'ngCartItem', 'store', function ($rootScope, $window, ngCartItem, store) {

        this.init = function(){
            this.$cart = {
                shipping : null,
                taxRate : null,
                tax : null,
                items : []
            };
        };

        this.addItem = function (id, name, price, quantity, data) {

            var inCart = this.getItemById(id);

            if (typeof inCart === 'object'){
                //Update quantity of an item if it's already in the cart
                inCart.setQuantity(quantity, false);
                $rootScope.$broadcast('ngCart:itemUpdated', inCart);
            } else {
                var newItem = new ngCartItem(id, name, price, quantity, data);
                this.$cart.items.push(newItem);
                $rootScope.$broadcast('ngCart:itemAdded', newItem);
            }

            $rootScope.$broadcast('ngCart:change', {});
        };

        this.getItemById = function (itemId) {
            var items = this.getCart().items;
            var build = false;

            angular.forEach(items, function (item) {
                if  (item.getId() === itemId) {
                    build = item;
                }
            });
            return build;
        };

        this.setShipping = function(shipping){
            this.$cart.shipping = shipping;
            return this.getShipping();
        };

        this.getShipping = function(){
            if (this.getCart().items.length == 0) return 0;
            return  this.getCart().shipping;
        };

        this.setTaxRate = function(taxRate){
            this.$cart.taxRate = +parseFloat(taxRate).toFixed(2);
            return this.getTaxRate();
        };

        this.getTaxRate = function(){
            return this.$cart.taxRate
        };

        this.getTax = function(){
            return +parseFloat(((this.getSubTotal()/100) * this.getCart().taxRate )).toFixed(2);
        };

        this.setCart = function (cart) {
            this.$cart = cart;
            return this.getCart();
        };

        this.getCart = function(){
            return this.$cart;
        };

        this.getItems = function(){
            return this.getCart().items;
        };

        this.getTotalItems = function () {
            var count = 0;
            var items = this.getItems();
            angular.forEach(items, function (item) {
                count += item.getQuantity();
            });
            return count;
        };

        this.getTotalUniqueItems = function () {
            return this.getCart().items.length;
        };

        this.getSubTotal = function(){
            var total = 0;
            angular.forEach(this.getCart().items, function (item) {
                total += item.getTotal();
            });
            return +parseFloat(total).toFixed(2);
        };

        this.totalCost = function () {
            return +parseFloat(this.getSubTotal() + this.getShipping() + this.getTax()).toFixed(2);
        };

        this.removeItem = function (index) {
            var item = this.$cart.items.splice(index, 1)[0] || {};
            $rootScope.$broadcast('ngCart:itemRemoved', item);
            $rootScope.$broadcast('ngCart:change', {});

        };

        this.removeItemById = function (id) {
            var item;
            var cart = this.getCart();
            angular.forEach(cart.items, function (item, index) {
                if(item.getId() === id) {
                    item = cart.items.splice(index, 1)[0] || {};
                }
            });
            this.setCart(cart);
            $rootScope.$broadcast('ngCart:itemRemoved', item);
            $rootScope.$broadcast('ngCart:change', {});
        };

        this.empty = function () {
            
            $rootScope.$broadcast('ngCart:change', {});
            this.$cart.items = [];
            $window.localStorage.removeItem('cart');
        };
        
        this.isEmpty = function () {
            
            return (this.$cart.items.length > 0 ? false : true);
            
        };

        this.toObject = function() {

            if (this.getItems().length === 0) return false;

            var items = [];
            angular.forEach(this.getItems(), function(item){
                items.push (item.toObject());
            });

            return {
                shipping: this.getShipping(),
                tax: this.getTax(),
                taxRate: this.getTaxRate(),
                subTotal: this.getSubTotal(),
                totalCost: this.totalCost(),
                items:items
            }
        };


        this.$restore = function(storedCart){
            var _self = this;
            _self.init();
            _self.$cart.shipping = storedCart.shipping;
            _self.$cart.tax = storedCart.tax;

            angular.forEach(storedCart.items, function (item) {
                _self.$cart.items.push(new ngCartItem(item._id,  item._name, item._price, item._quantity, item._data));
            });
            this.$save();
        };

        this.$save = function () {
            return store.set('cart', JSON.stringify(this.getCart()));
        }

    }])

    .factory('ngCartItem', ['$rootScope', '$log', function ($rootScope, $log) {

        var item = function (id, name, price, quantity, data) {
            this.setId(id);
            this.setName(name);
            this.setPrice(price);
            this.setQuantity(quantity);
            this.setData(data);
        };


        item.prototype.setId = function(id){
            if (id)  this._id = id;
            else {
                $log.error('An ID must be provided');
            }
        };

        item.prototype.getId = function(){
            return this._id;
        };


        item.prototype.setName = function(name){
            if (name)  this._name = name;
            else {
                $log.error('A name must be provided');
            }
        };
        item.prototype.getName = function(){
            return this._name;
        };

        item.prototype.setPrice = function(price){
            var priceFloat = parseFloat(price);
            if (priceFloat) {
                if (priceFloat <= 0) {
                    $log.error('A price must be over 0');
                } else {
                    this._price = (priceFloat);
                }
            } else {
                $log.error('A price must be provided');
            }
        };
        item.prototype.getPrice = function(){
            return this._price;
        };


        item.prototype.setQuantity = function(quantity, relative){


            var quantityInt = parseInt(quantity);
            if (quantityInt % 1 === 0){
                if (relative === true){
                    this._quantity  += quantityInt;
                } else {
                    this._quantity = quantityInt;
                }
                if (this._quantity < 1) this._quantity = 1;

            } else {
                this._quantity = 1;
                $log.info('Quantity must be an integer and was defaulted to 1');
            }


        };

        item.prototype.getQuantity = function(){
            return this._quantity;
        };

        item.prototype.setData = function(data){
            if (data) this._data = data;
        };

        item.prototype.getData = function(){
            if (this._data) return this._data;
            else $log.info('This item has no data');
        };


        item.prototype.getTotal = function(){
            return +parseFloat(this.getQuantity() * this.getPrice()).toFixed(2);
        };

        item.prototype.toObject = function() {
            return {
                id: this.getId(),
                name: this.getName(),
                price: this.getPrice(),
                quantity: this.getQuantity(),
                data: this.getData(),
                total: this.getTotal()
            }
        };

        return item;

    }])

    .service('store', ['$window', function ($window) {

        return {

            get: function (key) {
                if ( $window.localStorage.getItem(key) )  {
                    var cart = angular.fromJson( $window.localStorage.getItem(key) ) ;
                    return JSON.parse(cart);
                }
                return false;

            },


            set: function (key, val) {

                if (val === undefined) {
                    $window.localStorage.removeItem(key);
                } else {
                    $window.localStorage.setItem( key, angular.toJson(val) );
                }
                return $window.localStorage.getItem(key);
            }
        }
    }])

    .controller('CartController',['$scope', 'ngCart', function($scope, ngCart) {
        $scope.ngCart = ngCart;

    }])

    .value('version', '1.0.0');
;'use strict';


angular.module('ngCart.directives', ['ngCart.fulfilment'])

    .controller('CartController',['$scope', 'ngCart', function($scope, ngCart) {
        $scope.ngCart = ngCart;
    }])

    .directive('ngcartAddtocart', ['ngCart', function(ngCart){
        return {
            restrict : 'E',
            controller : 'CartController',
            scope: {
                id:'@',
                name:'@',
                quantity:'@',
                quantityMax:'@',
                price:'@',
                data:'='
            },
            transclude: true,
            templateUrl: function(element, attrs) {
                if ( typeof attrs.templateUrl == 'undefined' ) {
                    return 'template/ngCart/addtocart.html';
                } else {
                    return attrs.templateUrl;
                }
            },
            link:function(scope, element, attrs){
                scope.attrs = attrs;
                scope.inCart = function(){
                    return  ngCart.getItemById(attrs.id);
                };

                if (scope.inCart()){
                    scope.q = ngCart.getItemById(attrs.id).getQuantity();
                } else {
                    scope.q = parseInt(scope.quantity);
                }

                scope.qtyOpt =  [];
                for (var i = 1; i <= scope.quantityMax; i++) {
                    scope.qtyOpt.push(i);
                }

            }

        };
    }])

    .directive('ngcartCart', [function(){
        return {
            restrict : 'E',
            controller : 'CartController',
            scope: {},
            templateUrl: function(element, attrs) {
                if ( typeof attrs.templateUrl == 'undefined' ) {
                    return 'template/ngCart/cart.html';
                } else {
                    return attrs.templateUrl;
                }
            },
            link:function(scope, element, attrs){

            }
        };
    }])

    .directive('ngcartSummary', [function(){
        return {
            restrict : 'E',
            controller : 'CartController',
            scope: {},
            transclude: true,
            templateUrl: function(element, attrs) {
                if ( typeof attrs.templateUrl == 'undefined' ) {
                    return 'template/ngCart/summary.html';
                } else {
                    return attrs.templateUrl;
                }
            }
        };
    }])

    .directive('ngcartCheckout', [function(){
        return {
            restrict : 'E',
            controller : ('CartController', ['$rootScope', '$scope', 'ngCart', 'fulfilmentProvider', function($rootScope, $scope, ngCart, fulfilmentProvider) {
                $scope.ngCart = ngCart;

                $scope.checkout = function () {
                    fulfilmentProvider.setService($scope.service);
                    fulfilmentProvider.setSettings($scope.settings);
                    fulfilmentProvider.checkout()
                        .success(function (data, status, headers, config) {
                            $rootScope.$broadcast('ngCart:checkout_succeeded', data);
                        })
                        .error(function (data, status, headers, config) {
                            $rootScope.$broadcast('ngCart:checkout_failed', {
                                statusCode: status,
                                error: data
                            });
                        });
                }
            }]),
            scope: {
                service:'@',
                settings:'='
            },
            transclude: true,
            templateUrl: function(element, attrs) {
                if ( typeof attrs.templateUrl == 'undefined' ) {
                    return 'template/ngCart/checkout.html';
                } else {
                    return attrs.templateUrl;
                }
            }
        };
    }]);
;
angular.module('ngCart.fulfilment', [])
    .service('fulfilmentProvider', ['$injector', function($injector){

        this._obj = {
            service : undefined,
            settings : undefined
        };

        this.setService = function(service){
            this._obj.service = service;
        };

        this.setSettings = function(settings){
            this._obj.settings = settings;
        };

        this.checkout = function(){
            var provider = $injector.get('ngCart.fulfilment.' + this._obj.service);
              return provider.checkout(this._obj.settings);

        }

    }])


.service('ngCart.fulfilment.log', ['$q', '$log', 'ngCart', function($q, $log, ngCart){

        this.checkout = function(){

            var deferred = $q.defer();

            $log.info(ngCart.toObject());
            deferred.resolve({
                cart:ngCart.toObject()
            });

            return deferred.promise;

        }

 }])

.service('ngCart.fulfilment.http', ['$http', 'ngCart', function($http, ngCart){

        this.checkout = function(settings){
            return $http.post(settings.url,
                { data: ngCart.toObject(), options: settings.options});
        }
 }])


.service('ngCart.fulfilment.paypal', ['$http', 'ngCart', function($http, ngCart){


}]);

mainApp.controller('viewFilterCtrl', function ($scope,$uibModal,$uibModalInstance) {

$scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
	});