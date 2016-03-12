(function() {
  'use strict';
  app.factory('FoodService', ['$http', function($http) {
    var baseUrl = "/api/v1/foods/";
    return {
      getFoodsBySection: function(section_id) {
        var apiUrl = baseUrl;
        return $http({
          method: 'GET',
          params: {
            section_id: section_id
          },
          url: apiUrl
        });
      },
      searchFoods: function(sectionId, sortMode) {
        var apiUrl = baseUrl;
        return $http({
          method: 'GET',
          params: {
            section_id: sectionId,
            sort_mode: sortMode
          },
          url: apiUrl
        });
      }
    };
  }]);
})();