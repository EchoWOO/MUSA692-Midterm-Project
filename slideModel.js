/* ================================
Week 6 Assignment: slide Model
================================ */
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
                    filter: myFilter
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
                    filter: myFilter
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
                    filter: myFilter
                  }).addTo(map);
   layerfive.eachLayer(eachFeatureFunction);
 });
});
};


var featureGroup = L.featureGroup();

var resetMap = function() {
   map.removeLayer(featureGroup);
   featureGroup = L.featureGroup();
};
/*
var remove=function(data){
  _.each(data, function(layer){
      map.removeLayer(layer);
  });
};

var remove=function(data){
  _.each(map.layers, function(layer){
      map.removeLayer(layer);
  });
};*/

var slideNum = function(Number) {
  if (Number==1){
    $('#slide1').show();
    $('#results').hide();
    $('#slide2').hide();
    $('#slide3').hide();
    $('#slide4').hide();
    $('#slide5').hide();
    $('.legend').hide();
    $('#buttonPre').hide();
    $('#buttonNext').show();
  }
  else if(Number==2){
    $('#slide1').hide();
    $('#results').hide();
    $('#slide2').show();
    $('#slide3').hide();
    $('#slide4').hide();
    $('#slide5').hide();
    $('.legend').show();
    $('#buttonPre').show();
    $('#buttonNext').show();
  }
  else if(Number==3){
    $('#slide1').hide();
    $('#results').hide();
    $('#slide2').hide();
    $('#slide3').show();
    $('#slide4').hide();
    $('#slide5').hide();
    $('.legend').show();
    $('#buttonPre').show();
    $('#buttonNext').show();
  }
  else if(Number==4){
    $('#slide1').hide();
    $('#results').hide();
    $('#slide2').hide();
    $('#slide3').hide();
    $('#slide4').show();
    $('#slide5').hide();
    $('.legend').show();
    $('#buttonPre').show();
    $('#buttonNext').show();
  }
  else if(Number==5){
    $('#slide1').hide();
    $('#results').hide();
    $('#slide2').hide();
    $('#slide3').hide();
    $('#slide4').hide();
    $('#slide5').show();
    $('.legend').show();
    $('#buttonPre').show();
    $('#buttonNext').hide();
  }
};
var PageNum=1;

$(document).ready(function(){
  slideNum(PageNum);
$('#buttonNext').click(function() {
  resetMap();
  PageNum++;
  slideNum(PageNum);
  console.log(PageNum);
  if(PageNum==2){
  resetMap();
  slide2();
  }
  else if(PageNum==3){
  resetMap();
  slide3();
  }
  else if(PageNum==4){
  resetMap();
  slide4();
  }
  else if(PageNum==5){
  resetMap();
  slide5();
    }
  return PageNum;
});

$('#buttonPre').click(function() {
  resetMap();
  PageNum--;
  slideNum(PageNum);
  console.log(PageNum);
  if(PageNum==4){
  resetMap();
  slide4();
  }
  else if(PageNum==3){
  resetMap();
  slide3();
  }
  else if(PageNum==2){
  resetMap();
  slide2();
  }
  else if(PageNum==1){
  resetMap();
  }
  return PageNum;
});
});
