import React from "react";
import Chart from "react-apexcharts";
import ".././style.css";

class RadialChart extends React.Component {
  render() {
    const { title, value, color } = this.props;

    const options = {
      chart: {
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            total: {
              show: true,
              label: title,
              formatter: (w) => `${value}%`,
            },
          },
        },
      },
      labels: [title],
      colors: [color],
      style: {
        fontFamily: 'Arial',
        colors: ['#FFFFFF'], // Set the text color to white
      },
    };

    const series = [value];

    return (
      <div style={{ width: "200px" }}>
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height={200}
        />
      </div>
    );
  }
}

export default RadialChart;
