import axios from 'axios';
import { useEffect } from 'react';
import { useUnit } from 'effector-react';
import StatisticsSearch from '../../components/Statistics/StatisticsSearch/StatisticsSearch.jsx';
import StatisticsTable from '../../components/Statistics/StatisticsTable/StatisticsTable.jsx';
import {
  $statisticsTableStartData,
  getStatisticsTableDataFx,
} from '../../models/statisticsModel/index.js';

export default function Statistics() {
  const getStatisticsTableData = useUnit(getStatisticsTableDataFx);
  const statisticsTableData = useUnit($statisticsTableStartData);
  // fetch(
  //   'https://hjfu6inrbe.execute-api.eu-west-1.amazonaws.com/Phase3/ScanVisitDatabase',
  //   {
  //     method: 'POST', // or 'PUT'
  //   }
  // )
  //   .then((response) => response.json())
  //   .then((response) => {
  //     console.log('response: - ', response);
  //   });

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ title: 'React POST Request Example' })
  };
  // fetch('https://hjfu6inrbe.execute-api.eu-west-1.amazonaws.com/Phase3/ScanVisitDatabase', requestOptions)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('data: - ', data)
  //     debugger
  //   })

  // fetch("https://hjfu6inrbe.execute-api.eu-west-1.amazonaws.com/Phase3/ScanVisitDatabase", requestOptions
  // ).then((response) => {
  //   if (!response.ok) {
  //     debugger
  //   }
  //   return response}
  // )

  // const url = 'https://hjfu6inrbe.execute-api.eu-west-1.amazonaws.com/Phase3/ScanVisitDatabase'
  // const data = {
  //   a: 10,
  //   b: 20,
  // };
  // axios
  //   .post(url, data, {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json;charset=UTF-8",
  //     },
  //   })
  //   .then(({data}) => {
  //     console.log(data);
  //     debugger
  //   });

  useEffect(() => {
    if (statisticsTableData.length === 0) {
      getStatisticsTableData();
    }
  }, []);

  return (
    <div>
      <StatisticsSearch />
      <StatisticsTable />
    </div>
  );
}
