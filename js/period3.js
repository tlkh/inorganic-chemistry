var rdC = document.getElementById("radiiChart");
var fieC = document.getElementById("fieChart");
var ieC = document.getElementById("ieChart");
var enC = document.getElementById("enChart");
var mbpC = document.getElementById("mbpChart");

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

var data_enC = {
    labels: ["Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon"],
    datasets: [
        {
            type: 'line',
            label: "Electronegativity",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(183, 192, 75, 0.4)",
            borderColor: "rgb(183, 192, 75)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(183, 192, 75,1)",
            pointBackgroundColor: "rgba(183, 192, 75,0.4)",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(183, 192, 75,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 5,
            data: [0.93, 1.31, 1.61, 1.90, 2.19, 2.58, 3.16],
            spanGaps: false
        }
    ]
};

var data_mbpC = {
    labels: ["Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon"],
    datasets: [
        {
            type: 'line',
            label: "Melting Point (K)",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(75, 84, 192,0.4)",
            borderColor: "rgb(75, 84, 192)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75, 84, 192,1)",
            pointBackgroundColor: "rgba(75, 84, 192,0.4)",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75, 84, 192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 5,
            data: [370.944, 923, 933.47, 1687, 317.3, 388.36, 171.6, 83.81],
            spanGaps: false
        },
        {
            type: 'line',
            label: "Boiling Point (K)",
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
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(192, 75, 75,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 5,
            data: [1156.090, 1363, 2743, 3538, 553.7, 717.8, 239.11, 87.302],
            spanGaps: false
        }
    ]
};

var radiiChart = new Chart(rdC, {
    type: 'line',
    data: data_rdC,
    options: {
        responsive: true,
        maintainAspectRatio: false,
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
		            }]
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
        maintainAspectRatio: false,
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
        maintainAspectRatio: false,
        tooltips: {
            mode: 'x-axis'
        },
        hover: {
            mode: 'x-axis'
        }
    }
});

var enChart = new Chart(enC, {
    type: 'line',
    data: data_enC,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'x-axis'
        },
        hover: {
            mode: 'x-axis'
        }
    }
});

var mbpChart = new Chart(mbpC, {
    type: 'line',
    data: data_mbpC,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: "left"
		            }]
        },
        tooltips: {
            mode: 'x-axis'
        },
        hover: {
            mode: 'x-axis'
        }
    }
});