(function() {

  /***************************************************************************************************/
  /**************************** PREPARATION CODE *****************************************************/
  /***************************************************************************************************/

  // Get Apps statistics for a list of apps set as parameter (app ID)
  function getAppStats(p_appList, p_table) {
    for (var i = 0, len = p_appList.length; i < len; i++) {
      var AppID = p_appList[i];
      $.ajax({
        url: "http://api.prioridata.com/api/v1/app/metadata.json?api_key=iM1g1a_1pIM2oCx0KG-9aA&app_id=" + AppID,
        async: false,
        success: function(response) { // response is a custom name
          var appJSON = response.result; // result is the Priori API JSON Structure

          var AppName = appJSON.app_name;
          var PublisherName = appJSON.publisher_name;
          var Platform = appJSON.platform;
          var TotalRating = appJSON.total_rating;

          var appTableData = [];
          var countryList = appJSON.country_codes;
          //for (var iC = 0, lenC = countryList.length; iC < lenC; iC++) {
          //  var CountryCode = countryList[iC];
            var MauLast30DaysActual = appJSON.metrics_by_country.FR.mau_last_30_days_actual;
            var MauLast30DaysGrowthPercent = appJSON.metrics_by_country.FR.mau_last_30_days_growth_percent;
            var DownloadsLastCalMonthActual = appJSON.metrics_by_country.FR.downloads_last_cal_month_actual;
            var DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.FR.downloads_last_cal_month_growth_percent;

            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "FR",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          //}
          p_table.appendRows(appTableData);
        }
      });
    }
  }

  /***************************************************************************************************/
  /******************************** RUNNING CODE *****************************************************/
  /***************************************************************************************************/

  var myConnector = tableau.makeConnector();

  // When you create multiple table schemas, the WDC API calls the getData function once for each schema.
  myConnector.getSchema = function(schemaCallback) {

    // Companies
    var AppsStats_cols = [
      {
        id: "app_id",
        alias: "App ID",
        dataType: tableau.dataTypeEnum.string
      },
      {
        id: "app_name",
        alias: "App Name",
        dataType: tableau.dataTypeEnum.string
      },
      {
        id: "publisher_name",
        alias: "Publisher's Name",
        dataType: tableau.dataTypeEnum.string
      },
      {
        id: "platform",
        alias: "Platform",
        dataType: tableau.dataTypeEnum.string
      },
      {
        id: "country_code",
        alias: "Country Code",
        dataType: tableau.dataTypeEnum.string
      },
      {
        id: "mau_last_30_days_actual",
        alias: "MAU last 30 days",
        dataType: tableau.dataTypeEnum.int
      },
      {
        id: "mau_last_30_days_growth_percent",
        alias: "MAU last 30 days growth percent",
        dataType: tableau.dataTypeEnum.float
      },
      {
        id: "downloads_last_cal_month_actual",
        alias: "Downloads last cal month",
        dataType: tableau.dataTypeEnum.int
      },
      {
        id: "downloads_last_cal_month_growth_percent",
        alias: "Downloads last cal month growth percent",
        dataType: tableau.dataTypeEnum.float
      },
      {
        id: "total_rating",
        alias: "AVG Rating",
        dataType: tableau.dataTypeEnum.float
      }
    ];
    var AppsStats_Schema = {
      id: "Apps", // table.tableInfo.id
      alias: "Apps",
      columns: AppsStats_cols
    };

    // It's only when several schemas are passed to this function that the getData function is called several times
    schemaCallback([AppsStats_Schema]);
  };

  // When you create multiple table schemas, the WDC API calls the getData function once for each schema.
  // As a result, you need a way to change the call to the API for each table. The easiest way to do this is to use the table.tableInfo.id value that we set in the table schemas.
  myConnector.getData = function(table, doneCallback) {

    var appList = ["com.ubercab"];
    for (var i = 0, len = appList.length; i < len; i++) {
      getAppStats(appList, table);
    }
    doneCallback();
  };

  tableau.registerConnector(myConnector);

  $(document).ready(function() {
    $("#submitButton").click(function() {
      tableau.connectionName = "Priori Feed";
      tableau.submit();
    });
  });
})();
