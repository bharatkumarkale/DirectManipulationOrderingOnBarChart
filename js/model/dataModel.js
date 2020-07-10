"use strict"

var App = App || {};

let DataModel = function() {
    let self = {
        simpleBarData: [],
    };

    function loadSimpleBarChartData() {
        return d3.csv("./data/cars.csv", {credentials: 'same-origin'})
            .then(l => {
                self.simpleBarData = Array.from(new Set(l.map(a => a.Model)))
                                    .map(id => {
                                        return l.find(a => a.Model === id)
                                    })
                self.simpleBarData = self.simpleBarData.filter(d => d.Model!="");
            })
    }

    // Method that returns the dataset to caller
    function getSimpleBarChartData() {
        return deepCopy(self.simpleBarData);
    }

    function deepCopy(obj) {
        var output, v, key;
        output = Array.isArray(obj) ? [] : {};
        for (key in obj) {
            v = obj[key];
            output[key] = (typeof v === "object") ? deepCopy(v) : v;
        }
        return output;
    }

    return {
        loadSimpleBarChartData,
        getSimpleBarChartData,
    };
}