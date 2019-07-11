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
          var MauLast30DaysActual;
          var MauLast30DaysGrowthPercent;
          var DownloadsLastCalMonthActual;
          var DownloadsLastCalMonthGrowthPercent;

          // repeat for each country :(

          if (appJSON.metrics_by_country.AR != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.AR.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.AR.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.AR.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.AR.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "AR",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          /*if (appJSON.metrics_by_country.AU != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.AU.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.AU.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.AU.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.AU.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "AU",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.AT != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.AT.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.AT.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.AT.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.AT.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "AT",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.BE != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.BE.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.BE.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.BE.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.BE.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "BE",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.BR != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.BR.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.BR.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.BR.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.BR.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "BR",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.CA != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.CA.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.CA.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.CA.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.CA.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "CA",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.CL != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.CL.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.CL.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.CL.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.CL.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "CL",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.CN != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.CN.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.CN.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.CN.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.CN.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "CN",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.CO != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.CO.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.CO.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.CO.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.CO.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "CO",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.DZ != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.DZ.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.DZ.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.DZ.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.DZ.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "DZ",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.EC != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.EC.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.EC.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.EC.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.EC.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "EC",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.PK != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.PK.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.PK.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.PK.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.PK.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "PK",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.SN != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.SN.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.SN.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.SN.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.SN.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "SN",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.GT != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.GT.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.GT.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.GT.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.GT.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "GT",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.UY != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.UY.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.UY.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.UY.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.UY.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "UY",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.VE != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.VE.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.VE.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.VE.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.VE.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "VE",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.LK != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.LK.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.LK.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.LK.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.LK.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "LK",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.NG != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.NG.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.NG.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.NG.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.NG.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "NG",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.PE != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.PE.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.PE.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.PE.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.PE.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "PE",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.CZ != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.CZ.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.CZ.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.CZ.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.CZ.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "CZ",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.DK != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.DK.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.DK.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.DK.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.DK.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "DK",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.EG != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.EG.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.EG.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.EG.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.EG.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "EG",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.FI != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.FI.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.FI.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.FI.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.FI.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "FI",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.FR != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.FR.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.FR.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.FR.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.FR.downloads_last_cal_month_growth_percent;
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
          }
          if (appJSON.metrics_by_country.DE != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.DE.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.DE.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.DE.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.DE.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "DE",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.HK != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.HK.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.HK.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.HK.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.HK.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "HK",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.HU != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.HU.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.HU.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.HU.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.HU.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "HU",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.IN != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.IN.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.IN.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.IN.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.IN.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "IN",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.ID != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.ID.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.ID.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.ID.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.ID.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "ID",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.IE != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.IE.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.IE.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.IE.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.IE.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "IE",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.IL != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.IL.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.IL.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.IL.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.IL.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "IL",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.IT != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.IT.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.IT.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.IT.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.IT.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "IT",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.JP != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.JP.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.JP.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.JP.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.JP.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "JP",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.KE != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.KE.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.KE.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.KE.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.KE.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "KE",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.MY != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.MY.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.MY.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.MY.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.MY.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "MY",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.MX != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.MX.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.MX.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.MX.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.MX.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "MX",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.NL != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.NL.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.NL.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.NL.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.NL.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "NL",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.NZ != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.NZ.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.NZ.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.NZ.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.NZ.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "NZ",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.NO != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.NO.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.NO.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.NO.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.NO.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "NO",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.PH != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.PH.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.PH.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.PH.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.PH.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "PH",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.PL != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.PL.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.PL.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.PL.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.PL.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "PL",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.PT != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.PT.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.PT.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.PT.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.PT.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "PT",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.RO != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.RO.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.RO.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.RO.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.RO.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "RO",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.RU != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.RU.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.RU.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.RU.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.RU.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "RU",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.SA != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.SA.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.SA.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.SA.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.SA.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "SA",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.SG != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.SG.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.SG.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.SG.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.SG.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "SG",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.ZA != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.ZA.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.ZA.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.ZA.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.ZA.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "ZA",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.KR != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.KR.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.KR.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.KR.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.KR.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "KR",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.ES != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.ES.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.ES.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.ES.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.ES.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "ES",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.SE != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.SE.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.SE.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.SE.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.SE.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "SE",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.CH != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.CH.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.CH.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.CH.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.CH.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "CH",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.TW != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.TW.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.TW.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.TW.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.TW.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "TW",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.TH != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.TH.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.TH.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.TH.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.TH.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "TH",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.TR != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.TR.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.TR.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.TR.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.TR.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "TR",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.AE != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.AE.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.AE.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.AE.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.AE.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "AE",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.GB != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.GB.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.GB.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.GB.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.GB.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "GB",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.US != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.US.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.US.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.US.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.US.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "US",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }
          if (appJSON.metrics_by_country.VN != null) {
            MauLast30DaysActual = appJSON.metrics_by_country.VN.mau_last_30_days_actual;
            MauLast30DaysGrowthPercent = appJSON.metrics_by_country.VN.mau_last_30_days_growth_percent;
            DownloadsLastCalMonthActual = appJSON.metrics_by_country.VN.downloads_last_cal_month_actual;
            DownloadsLastCalMonthGrowthPercent = appJSON.metrics_by_country.VN.downloads_last_cal_month_growth_percent;
            appTableData.push({
              "app_id": AppID,
              "app_name": AppName,
              "publisher_name": PublisherName,
              "platform": Platform,
              "country_code": "VN",
              "mau_last_30_days_actual": MauLast30DaysActual,
              "mau_last_30_days_growth_percent": MauLast30DaysGrowthPercent,
              "downloads_last_cal_month_actual": DownloadsLastCalMonthActual,
              "downloads_last_cal_month_growth_percent": DownloadsLastCalMonthGrowthPercent,
              "total_rating": TotalRating
            });
          }*/


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
        alias: "AVG Global Rating",
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

    var appList = [
"com.ubercab",
"com.grabtaxi.passenger",
"368677368",
"com.tranzmate",
"647268330",
"529379082",
"com.limebike",
"1199780189",
"me.lyft.android",
"ee.mtakso.client",
"498477945",
"675033630",
"1436140272",
"com.tier.app",
"469463298",
"com.citymapper.app.release",
"504597178",
"com.ridehive.app",
"fr.chauffeurprive",
"1439420370",
"514921710",
"com.heetch",
"com.car2go",
"693137280",
"657777015",
"435719709",
"com.dn.drivenow",
"1373271535",
"io.moia.neptune",
"803227884",
"com.ghm.carjump",
"via.rider",
"com.classco.marcel",
"es.zitycar.carsharing",
"1337082334",
"bvg.berlkonig",
"1316126020",
"632718723",
"com.vulog.carshare.kia",
"1407339605",
"1182404712",
"1189566096",
"516627231",
"com.vulog.carshare.eysa",
"de.cambio.app",
"1417229204",
"1435462279",
"com.rcimobility.renaultmobility.b2c",
"com.ufo.app",
"1440512722",
"com.ada.moovinparis.prod",
"com.free2moveparis",
"com.moovel.na.mint",
"1069029389",
"1134449799",
"com.generalmotors.urbanactive.cityone"

    ];

    getAppStats(appList, table);

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
