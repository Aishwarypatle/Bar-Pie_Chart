import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';


const dataset = [
    { items: 21, range: '0 to 100' },
    {  items: 28, range: '100 to 200' },
    {  items: 48, range: '200 to 300' },
    {  items: 25, range: '400 to 500' },
    {  items: 90, range: '500 to 600' },
    { items: 30, range: '600 to 700' },
    { items: 50, range: '700 to 800' },
    { items: 10, range: '900  & above' },
   
   
  ];
  

const valueFormatter = (value) => `${value}mm`;

const chartSetting = {
  yAxis: [
    // {
    //   label: '',
    // },
  ],
  series: [{ dataKey: 'items', label: 'Transactions Bar Charts', valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export default function Dashboard() {
  const tickPlacement='middle';
  const tickLabelPlacement ='middle'

  return (
    <div style={{ width: '100%' }}>
      
      <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'range', tickPlacement, tickLabelPlacement },
        ]}
        {...chartSetting}
      />
    </div>
  );
}