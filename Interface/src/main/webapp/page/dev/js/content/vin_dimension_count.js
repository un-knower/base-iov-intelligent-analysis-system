var chartVar;


$(function(){
    initHighcharts();

});


function initHighcharts() {
    chartVar = new Highcharts.Chart({
        chart: {
            renderTo:'container',
            type: 'column'
        },
        title: {
            text: '基于不同省份车辆VIN码的各维度统计'
        },
        subtitle: {
            text: '从生产年份，生产国家以及品牌等多个维度进行统计分析'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'

            ]
                //data.columns[0]
            ,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '车 辆 数'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
            name: 'pv',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            //data: data.column[1]
        }, {
            name: 'uv_country',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
            //data: data.column[2]
        }, {
            name: 'uv_oem',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
            //data: data.column[3]
        }, {
            name: 'uv_year',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
            //data: data.column[4]
        }]
    });
}

function setHighchartsData(data){
    var info = data.rows;
}