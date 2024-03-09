import { useUnit } from 'effector-react';
import style from './StatisticsSearch.module.css';
import SearchBar from '../../SearchBar/SearchBar.jsx';
import { getStatisticsTableDataFx } from '../../../models/statisticsModel/index.js';

export default function StatisticsSearch() {
  const getStatisticsTableData = useUnit(getStatisticsTableDataFx);

  return (
    <SearchBar
      placeHolder="ID Партнера/ФИО Клиента"
      action={getStatisticsTableData}
    />
  );
}
