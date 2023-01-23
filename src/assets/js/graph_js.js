   var Mapato = [];
   var Matumizi = [];
   var Mwez = [];

$.post("mapato_matumizi_json.php",
    function (data)
    {

        for (var i in data) {
           Mapato.push(data[i].mapatoMwezi);
           Matumizi.push(data[i].matumiziMwezi);
           Mwez.push(data[i].Mwezi);
    }
    var kiasi_mapato = Mapato.map(i=>Number(i));
    var kiasi_matumizi = Matumizi.map(i=>Number(i));

Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Mapato na Matumizi kwa Kila Mwezi'
    },
    subtitle: {
      text: '----------------------------------'
    },
    xAxis: {
      categories: Mwez,
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Kiasi (TSH)'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} Tsh</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Mapato',
      data: kiasi_mapato

    }, {
      name: 'Matumizi',
      data:kiasi_matumizi
    }]
  });
});
