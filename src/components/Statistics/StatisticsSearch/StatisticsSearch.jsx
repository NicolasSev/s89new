import { useUnit } from 'effector-react';
import style from './StatisticsSearch.module.css';
import SearchBar from '../../SearchBar/SearchBar.jsx';
import { filterTableDataEv } from '../../../models/statisticsModel/index.js';

export default function StatisticsSearch() {
  const filterTableData = useUnit(filterTableDataEv);

  return (
    <SearchBar placeHolder="ID Партнера/ФИО Клиента" action={filterTableData} />
  );
}
