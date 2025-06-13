//Audience Chart
var options = {
  series: [{
      name: 'Male',
      data: [44, 55, 41, 67, 22, 43, 26]
  }, {
      name: 'Female',
      data: [13, 23, 20, 8, 13, 27, 41]
  }],
  chart: {
      type: 'bar',
      height: 390,
      stacked: true,
      toolbar: {
          show: false
      },
      zoom: {
          enabled: true
      },
      title: {
        text: 'audiance',
        align: 'left'
      },
  },
  plotOptions: {
      bar: {
          horizontal: false,
          borderRadius: 6,
          columnWidth: '44%',
          dataLabels: {
              total: {    
                  enabled: true,
                  style: {
                      fontSize: '13px',
                      fontWeight: 600
                  }
              }
          }
      },
  },
  xaxis: {
      type: 'datetime',
      categories: ['01/01/2023 GMT', '01/02/2023 GMT', '01/03/2023 GMT', '01/04/2023 GMT',
          '01/05/2023 GMT', '01/06/2023 GMT', '01/07/2023 GMT'
      ],
  },
  legend: {
      position: 'top',
      horizontalAlign: 'right',
  },
  fill: {
      opacity: 1
  }
};

var chart = new ApexCharts(document.querySelector("#audienceChart"), options);
chart.render();

//Sales This Month Chart
var options = {
    series: [
        {
            type: 'rangeArea',
            name: 'Profit Range',

            data: [
                {
                    x: 'Mar',
                    y: [900, 2900]
                },
                {
                    x: 'Apr',
                    y: [1400, 2700]
                },
                {
                    x: 'May',
                    y: [2600, 3900]
                },
                {
                    x: 'Jun',
                    y: [500, 1700]
                },
                {
                    x: 'Jul',
                    y: [1900, 2300]
                },
                {
                    x: 'Aug',
                    y: [1000, 1500]
                }
            ]
        },

        {
            type: 'rangeArea',
            name: 'Expense Range',
            data: [
                {
                    x: 'Mar',
                    y: [3900, 4900]
                },
                {
                    x: 'Apr',
                    y: [3400, 3900]
                },
                {
                    x: 'May',
                    y: [5100, 5900]
                },
                {
                    x: 'Jun',
                    y: [5400, 6700]
                },
                {
                    x: 'Jul',
                    y: [4300, 4600]
                },
                {
                    x: 'Aug',
                    y: [2100, 2900]
                }
            ]
        },

        {
            type: 'line',
            name: 'Profit Median',
            data: [
                {
                    x: 'Mar',
                    y: 1900
                },
                {
                    x: 'Apr',
                    y: 2200
                },
                {
                    x: 'May',
                    y: 3000
                },
                {
                    x: 'Jun',
                    y: 1000
                },
                {
                    x: 'Jul',
                    y: 2100
                },
                {
                    x: 'Aug',
                    y: 1200
                },
                {
                    x: 'Sep',
                    y: 2250
                },
                {
                    x: 'Oct',
                    y: 2900
                }
            ]
        },
        {
            type: 'line',
            name: 'Expense Median',
            data: [
                {
                    x: 'Mar',
                    y: 4300
                },
                {
                    x: 'Apr',
                    y: 3700
                },
                {
                    x: 'May',
                    y: 5500
                },
                {
                    x: 'Jun',
                    y: 5900
                },
                {
                    x: 'Jul',
                    y: 4500
                },
                {
                    x: 'Aug',
                    y: 3500
                },
                {
                    x: 'Sep',
                    y: 2000
                },
                {
                    x: 'Oct',
                    y: 1800
                }
            ]
        }
    ],
    chart: {
        height: 285,
        type: 'rangeArea',
        animations: {
            speed: 500
        },
        toolbar: {
            show: false,
        },
    },
   
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: [0.24, 0.24, 1, 1]
    },
    forecastDataPoints: {
        count: 2
    },
    yaxis: {
        show: false,
    },
    stroke: {
        curve: 'straight',
        width: [0, 0, 2, 2]
    },
    grid: {
        show: true,
        padding: {
            top: -8,
            left: 10,
            right: 0,
        }
    },
    legend: {
        show: true,
        customLegendItems: ['Team B', 'Team A'],
        inverseOrder: true
    },
    markers: {
        hover: {
            sizeOffset: 5
        }
    }
};

var chart = new ApexCharts(document.querySelector("#salesThisMonthChart"), options);
chart.render();

//  sales
var options = {
    series: [{
    name: 'Total Sales',
    data: [44, 55, 41, 67, 22, 43, 21, 49, 20, 41, 67, 22,]
  }, {
    name: 'Total Profit',
    data: [11, 17, 15, 15, 21, 14, 15, 13, 5, 15, 15, 21,]
  }],
    chart: {
    type: 'bar',
    height: 350,
    with : '100%',
    stacked: true,
    stackType: '100%',
    toolbar: {
        show: false,
    },
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'right',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
  },
  fill: {
    opacity: 1,
    colors: ['#3b82f6','#0ea5e9']
  },
  legend: {
    position: 'bottom',
    offsetX: 0,
    offsetY: 50
  },
  };

  var chart = new ApexCharts(document.querySelector("#sales"), options);
  chart.render();

 // order
 var options = {
    series: [{
      name: "Pending",
      data: [17, 16, 19, 22, 24, 29, 25, 20, 25, 31, 28, 35]
  },{
      name: "New order",
      data: [30, 24, 32, 27, 16, 22, 32, 21, 24, 20, 38, 28]
  }
],
    chart: {
    height: 310,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar:{
      show: false,
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2,
    colors: ['#a855f7','#3b82f6']
  },
  title: {
    text: '',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0,
    },
    padding: {
        top: -20,
        right: 0,
    }
  },
  xaxis: {
    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  }
  
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();


  // t-resource chart
  var options = {
    series: [44, 34, 22],
    chart: {
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 875
          }
        }
      }
    }         
  },
  labels: ['Direct', 'Referral', 'Search Engine'],
  };

  var chart = new ApexCharts(document.querySelector("#t-resource"), options);
  chart.render();

  $(document).ready(function(){
    
    $('.h-icon iconify-icon').click(function () {
    $('aside').toggleClass('w-60');
    $('header').toggleClass('m-60');
    $('.contant').toggleClass('m-60');
    
    });
    $('.profile').click(function () {
        $('.user-setting').toggle();
    });
    $('.a-board').click(function () {
        $('.a-dash').toggle();
    });
    $('.a-lan').click(function(){
        $('.a-land').toggle();
    });
    $('.a-cal').click(function(){
        $('.a-ca').toggle();
    });
    $('.a-eco').click(function(){
        $('.a-ecom').toggle();
    });
    $('.a-ment').click(function(){
        $('.a-mana').toggle();
    });
    $('.a-soc').click(function(){
        $('.a-ial').toggle();
    });
    $('.a-in').click(function(){
        $('.a-ice').toggle();
    });
    $('.a-us').click(function(){
        $('.a-rs').toggle();
    });
    $('.a-cation').click(function(){
        $('.a-auto').toggle();
    });
    $('.a-page').click(function(){
        $('.a-es').toggle();
    });
    $('.a-ui').click(function(){
        $('.a-ele').toggle();
    });
    $('.a-plug').click(function(){
        $('.a-ins').toggle();
    });
    $('.a-nav').click(function(){
        $('.a-tion').toggle();
    });
    $('.a-for').click(function(){
        $('.a-ms').toggle();
    });
    $('.a-apex').click(function(){
        $('.a-charts').toggle();
    });
    $('.a-ico').click(function(){
        $('.a-ns').toggle();
    });
    $('.a-ma').click(function(){
        $('.a-ps').toggle();
    });
    $('.a-mul').click(function(){
        $('.a-vel').toggle();
    });
});
const toggleBtn = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        toggleBtn.classList.toggle('rotated');
    });