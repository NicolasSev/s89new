import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import PartnerCardSearch from '../../components/PartnerCard/PartnerCardSearch/PartnerCardSearch.jsx';
import PartnerCardTable from '../../components/PartnerCard/PartnerCardTable/PartnerCardTable.jsx';
import {
  $partnerCardTableData,
  getPartnerCardTableDataFx,
} from '../../models/partnerCardModel/index.js';

export default function PartnerCard() {
  const getPartnerCardTableData = useUnit(getPartnerCardTableDataFx);
  const partnerCardTableData = useUnit($partnerCardTableData);

  // async function postJSON(data) {
  //   try {
  //     const response = await fetch(
  //       'https://hjfu6inrbe.execute-api.eu-west-1.amazonaws.com/Phase3/RegisterPartner',
  //       {
  //         method: 'POST', // or 'PUT'
  //         // body: JSON.stringify(data),
  //         body: JSON.stringify(data),
  //       }
  //     );
  //
  //     const result = await response.json();
  //     console.log('Success:', result);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

  // fetch("https://hjfu6inrbe.execute-api.eu-west-1.amazonaws.com/Phase3/RegisterPartner",
  //   {
  //   method: "POST", // or 'PUT'
  // }
  //
  // {
  //   "partner_name": "Boxing Club"
  // }

  useEffect(() => {
    if (partnerCardTableData.length === 0) {
      getPartnerCardTableData();
    }
  }, []);

  return (
    <div>
      <PartnerCardSearch />
      <PartnerCardTable />
    </div>
  );
}
