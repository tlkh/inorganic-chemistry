var myApp = new Framework7();
var $$ = Dom7;
var leftView = myApp.addView('.view-left', {
    dynamicNavbar: true
});
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

myApp.onPageAfterAnimation('period3', function (page) {
    console.log('Period 3 page initialized');
    var rdC = document.getElementById("radiiChart");
    var fieC = document.getElementById("fieChart");
    var ieC = document.getElementById("ieChart");

    var data_rdC = {
        labels: ["Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon"],
        datasets: [
            {
                type: 'line',
                label: "Atomic Radius (nm)",
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "rgba(75,192,192,0.4)",
                pointBorderWidth: 1,
                pointHoverRadius: [18, 16, 14, 12, 11, 10, 9, 19],
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: [18, 16, 14, 12, 11, 10, 9, 19],
                pointHitRadius: [18, 16, 14, 12, 11, 10, 9, 19],
                data: [0.186, 0.160, 0.143, 0.117, 0.110, 0.104, 0.099, 0.192],
                spanGaps: false
        },
            {
                type: 'line',
                label: "Ionic Radius (nm)",
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(192, 75, 165,0.4)",
                borderColor: "rgb(192, 75, 165)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(192, 75, 165,1)",
                pointBackgroundColor: "rgba(192, 75, 165,0.4)",
                pointBorderWidth: 1,
                pointHoverRadius: [9, 6, 5, 4, 21, 18, 18],
                pointHoverBackgroundColor: "rgba(192, 75, 165,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: [9, 6, 5, 4, 21, 18, 18],
                pointHitRadius: [9, 6, 5, 4, 21, 18, 18],
                data: [0.095, 0.065, 0.050, 0.041, 0.212, 0.184, 0.181],
                spanGaps: false
        }
    ]
    };

    var data_ieC = {
        labels: ["Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon"],
        datasets: [
            {
                type: 'line',
                label: "1st ionisation energy (kJ/mol)",
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(192, 75, 75,0.4)",
                borderColor: "rgb(192, 75, 75)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(192, 75, 75,1)",
                pointBackgroundColor: "rgba(192, 75, 75,0.4)",
                pointBorderWidth: 1,
                pointHoverRadius: 2,
                pointHoverBackgroundColor: "rgba(192, 75, 75,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 2,
                pointHitRadius: 2,
                data: [494, 736, 577, 786, 1060, 1000, 1260, 1520],
                spanGaps: false
        },
            {
                type: 'line',
                label: "2nd ionisation energy (kJ/mol)",
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(75, 89, 192,0.4)",
                borderColor: "rgb(75, 89, 192)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75, 89, 192,1)",
                pointBackgroundColor: "rgba(75, 89, 192,0.4)",
                pointBorderWidth: 1,
                pointHoverRadius: 2,
                pointHoverBackgroundColor: "rgba(75, 89, 192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 2,
                pointHitRadius: 2,
                data: [4560, 1450, 1820, 1580, 1900, 2260, 2300, 2660],
                spanGaps: false
        },
            {
                type: 'line',
                label: "3rd ionisation energy (kJ/mol)",
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(75, 192, 125,0.4)",
                borderColor: "rgb(75, 192, 125)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75, 192, 125,1)",
                pointBackgroundColor: "rgba(75, 192, 125,0.4)",
                pointBorderWidth: 1,
                pointHoverRadius: 2,
                pointHoverBackgroundColor: "rgba(75, 192, 125,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 2,
                pointHitRadius: 2,
                data: [6940, 7740, 2740, 3230, 2920, 3390, 3850, 3950],
                spanGaps: false
        },
            {
                type: 'line',
                label: "4th ionisation energy (kJ/mol)",
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(192, 178, 75,0.4)",
                borderColor: "rgb(192, 178, 75)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(192, 178, 75,1)",
                pointBackgroundColor: "rgba(192, 178, 75,0.4)",
                pointBorderWidth: 1,
                pointHoverRadius: 2,
                pointHoverBackgroundColor: "rgba(192, 178, 75,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 2,
                pointHitRadius: 2,
                data: [9540, 10500, 11600, 4360, 4960, 4540, 5150, 5770],
                spanGaps: false
        }
    ]
    };

    var data_fieC = {
        labels: ["Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon"],
        datasets: [
            {
                type: 'line',
                label: "1st ionisation energy (kJ/mol)",
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(192, 75, 75,0.4)",
                borderColor: "rgb(192, 75, 75)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(192, 75, 75,1)",
                pointBackgroundColor: "rgba(192, 75, 75,0.4)",
                pointBorderWidth: 1,
                pointHoverRadius: 2,
                pointHoverBackgroundColor: "rgba(192, 75, 75,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 2,
                pointHitRadius: 2,
                data: [494, 736, 577, 786, 1060, 1000, 1260, 1520],
                spanGaps: false
        }
    ]
    };

    var radiiChart = new Chart(rdC, {
        type: 'line',
        data: data_rdC,
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    /*scaleLabel: {
                        display: true,
                        labelString: "radius (nm)"
                    },*/
                    ticks: {
                        max: 0.25,
                        min: 0,
                        stepSize: 0.1
                    },
                    position: "left"
		            }],
            },
            tooltips: {
                mode: 'x-axis'
            },
            hover: {
                mode: 'x-axis'
            }
        }
    });

    var fieChart = new Chart(fieC, {
        type: 'line',
        data: data_fieC,
        options: {
            responsive: true,
            tooltips: {
                mode: 'x-axis'
            },
            hover: {
                mode: 'x-axis'
            }
        }
    });

    var ieChart = new Chart(ieC, {
        type: 'line',
        data: data_ieC,
        options: {
            responsive: true,
            tooltips: {
                mode: 'x-axis'
            },
            hover: {
                mode: 'x-axis'
            }
        }
    });
});