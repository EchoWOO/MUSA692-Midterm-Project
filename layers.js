var slide1 = function() {
  $(document).ready(function() {
     $.ajax(dataset).done(function(data) {
       var parsedData = JSON.parse(data);
  layerone=L.geoJson(parsedData, {
                   style: myStyle_all,
                 }).addTo(map);
  layerone.eachLayer(eachFeatureFunction);
  });
  });
};

var slide2 = function(feature) {
  var myFilter = function(feature) {
  if(feature.properties.primary_county_=="Hennepin"){
    return true;
  }
    };
   $(document).ready(function() {
      $.ajax(dataset).done(function(data) {
        var parsedData = JSON.parse(data);
   layertwo=L.geoJson(parsedData, {
                    style: myStyle,
                  }).addTo(map);
   layertwo.eachLayer(eachFeatureFunction);
 });
});
};

var slide3 = function(feature) {
  var myFilter = function(feature) {
  if(feature.properties.pct_ebll_cat_label == 'Significantly higher (3+ times)'){
    return true;
  }
    };
   $(document).ready(function() {
      $.ajax(dataset).done(function(data) {
        var parsedData = JSON.parse(data);
   layerthree=L.geoJson(parsedData, {
                    style: myStyle,
                  }).addTo(map);
   layerthree.eachLayer(eachFeatureFunction);
 });
});
};

var slide4 = function(feature) {
  var myFilter = function(feature) {
  if(feature.properties.pct_ebll_cat_label == 'Significantly higher (1-2 times)'){
    return true;
  }
    };
   $(document).ready(function() {
      $.ajax(dataset).done(function(data) {
        var parsedData = JSON.parse(data);
   layerfour=L.geoJson(parsedData, {
                    style: myStyle,
                  }).addTo(map);
   layerfour.eachLayer(eachFeatureFunction);
 });
});
};

var slide5 = function(feature) {
  var myFilter = function(feature) {
  if(feature.properties.pct_ebll_cat_label == 'Significantly lower (<1.1%)'){
    return true;
  }
    };
   $(document).ready(function() {
      $.ajax(dataset).done(function(data) {
        var parsedData = JSON.parse(data);
   layerfive=L.geoJson(parsedData, {
                    style: myStyle,
                  }).addTo(map);
   layerfive.eachLayer(eachFeatureFunction);
 });
});
};
