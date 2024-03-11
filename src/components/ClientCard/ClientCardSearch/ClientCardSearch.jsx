import { useUnit } from 'effector-react';
import SearchBar from '../../SearchBar/SearchBar.jsx';
import { filterClientTableDataEv } from '../../../models/clientCardModel/index.js';

export default function ClientCardSearch() {
  const filterClientTableData = useUnit(filterClientTableDataEv);

  return <SearchBar placeHolder="Поиск" action={filterClientTableData} />;
}
