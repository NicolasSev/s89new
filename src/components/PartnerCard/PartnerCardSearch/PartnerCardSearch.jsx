import { useUnit } from 'effector-react';
import SearchBar from '../../SearchBar/SearchBar.jsx';
import { filterPartnerTableDataEv } from '../../../models/partnerCardModel/index.js';

export default function PartnerCardSearch() {
  const filterPartnerTableData = useUnit(filterPartnerTableDataEv);

  return <SearchBar placeHolder="Поиск" action={filterPartnerTableData} />;
}
