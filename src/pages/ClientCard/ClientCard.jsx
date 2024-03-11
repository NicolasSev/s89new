import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import ClientCardSearch from '../../components/ClientCard/ClientCardSearch/ClientCardSearch.jsx';
import ClientCardTable from '../../components/ClientCard/ClientCardTable/ClientCardTable.jsx';
import {
  $clientCardTableStartData,
  getClientCardTableDataFx,
} from '../../models/clientCardModel/index.js';

export default function ClientCard() {
  const getClientCardTableData = useUnit(getClientCardTableDataFx);
  const clientCardTableData = useUnit($clientCardTableStartData);
  // FIXME Here repsone for Clients list
  // fetch(
  //   'https://rkxijcc8j2.execute-api.eu-west-1.amazonaws.com/Phase4/ClientsPortrait',
  //   {
  //     method: 'POST',
  //   }
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log('clients list data: - ', data);
  //   });

  useEffect(() => {
    if (clientCardTableData.length === 0) {
      getClientCardTableData();
    }
  }, []);

  return (
    <div>
      <ClientCardSearch />
      <ClientCardTable />
    </div>
  );
}
