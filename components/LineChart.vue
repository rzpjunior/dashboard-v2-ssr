<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      transactionColorGradient: null,
      totalChargeColorGradient: null,
      itemSoldColorGradient: null,
    };
  },
  mounted() {
      // plugin untuk gambar vertical line saat hover
      Chart.plugins.register({
      afterDatasetsDraw: function(chart) {
          if (chart.tooltip._active && chart.tooltip._active.length) {
            var activePoint = chart.tooltip._active[0],
                ctx = chart.ctx,
                y_axis = chart.scales['y-axis-0'],
                x = activePoint.tooltipPosition().x,
                topY = y_axis.top,
                bottomY = y_axis.bottom;

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x, topY);
            ctx.lineTo(x, bottomY);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#07C';
            ctx.stroke();
            ctx.restore();
          }
      },

      beforeDraw: function (chart) {
        chart.config.data.datasets.forEach((dataset,i)=>{
          if(dataset.legendBackgroundColor){
            chart.legend.legendItems[i].fillStyle = dataset.legendBackgroundColor;
            chart.legend.legendItems[i].strokeStyle = dataset.legendBorderColor ? dataset.legendBorderColor : dataset.legendBackgroundColor;
          }
        });
      }
    });

    this.transactionColorGradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.totalChargeColorGradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.itemSoldColorGradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450); 
      
    // rgba color

    this.transactionColorGradient.addColorStop(0, "rgba(0, 193, 210, 1)");
    // this.gradient2.addColorStop(0.5, 'rgba(0, 193, 210, 0.35)'); <-- gradient warna ke 3
    this.transactionColorGradient.addColorStop(1, "rgba(0, 193, 210, 0)");

    this.totalChargeColorGradient.addColorStop(0, "rgba(143, 199, 62, 1)");
    // this.gradient.addColorStop(0.5, 'rgba(143, 199, 62, 0.35)'); <-- gradient warna ke 3
    this.totalChargeColorGradient.addColorStop(1, "rgba(143, 199, 62, 0)");

    this.itemSoldColorGradient.addColorStop(0, "rgba(252, 146, 48, 1)");
    // this.gradient3.addColorStop(0.5, 'rgba(252, 146, 48, 0)'); <-- gradient warna ke 3
    this.itemSoldColorGradient.addColorStop(1, "rgba(252, 146, 48, 0)");

    // RENDER CHART

    this.renderChart(
      {
        
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        datasets: [
          {
            label: "Transaction",
            backgroundColor: this.transactionColorGradient,
            borderColor: '#00C1D2',
            borderWidth: 2,
            data: [
              750000000,
              500000000,
              400000000,
              280000000,
              300000000,
              100000000,
              500000000,
              300000000,
              400000000,
              400000000,
              300000000,
              800000000,
            ],
          },
          {
            label: "Total Charge",
            backgroundColor: this.totalChargeColorGradient,
            borderColor: '#8DC53F',
            borderWidth: 2,
            data: [
              150000000,
              300000000,
              350000000,
              100000000,
              350000000,
              400000000,
              550000000,
              750000000,
              950000000,
              550000000,
              350000000,
              550000000,
            ],
          },
          {
            label: "Item Sold",
            backgroundColor: this.itemSoldColorGradient,
            borderColor: '#FC9230',
            borderWidth: 2,
            data: [
              750000000,
              500000000,
              850000000,
              200000000,
              350000000,
              500000000,
              450000000,
              650000000,
              650000000,
              350000000,
              450000000,
              150000000,
            ],
          },
        ],
      },
      {
        scales: {
          yAxes: [
            {
              ticks: {
                fontFamily: 'Helvetica',
                fontSize: 12,
                fontColor: '#768F9C',
                callback: function (value, index, values) {
                  if (parseInt(value) >= 1000) {
                    return (
                      value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                    );
                  }
                },
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                fontFamily: 'Helvetica',
                fontSize: 12,
                fontColor: '#768F9C',
              },
            },
          ],
        },
        legend: {
          labels: {
              boxWidth: 40,
          },
          display: true,
          position: "bottom",
          align: "start",
          fillStyle: {
            color: "#8DC53F",
          },
        },
        tooltips: {
          fontFamily: 'Helvetica',
          mode: 'index',
          enabled: true,
          intersect: false,
          bodyFontFamily: 'Helvetica',
          bodySpacing: 12,
          bodyFontColor: '768F9C',
          titleFontColor: '#768F9C',
          backgroundColor: '#FCFCFC',
          borderColor: '#8DC53F',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          callbacks: {
              labelTextColor: function(tooltipItem, chart) {
                return '#768F9C';
              },
              label: function(tooltipItems, data) { 
                var label = data.datasets[tooltipItems.datasetIndex].label;
                return label + " : " + tooltipItems.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              },
              title: function(tooltipItem, data) {
                return;
              }
            },
        },
        elements: {
          point: {
            radius: 0
          }
      },
        responsive: true,
        maintainAspectRatio: false,
      }
    );
  },
};
</script>
