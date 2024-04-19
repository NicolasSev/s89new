export const formatClientCardTableData = (data) => {
  return data.map((item, index) => {
    return {
      key: `${index}-${item.ClientID.S}`,
      name: `${item.ClientSurname.S} ${item.ClientName.S}`,
      phone: item.ClientPhoneNumber.S.replace('.0', ''),
      card_id: item.FCID?.S || '',
      sub_name: item.FCName?.S || '',
      activation_date: item.ActivationDate?.S || '',
      expiration_date: item.ExpirationDate?.S || '',
    };
  });
};

export const filterClientCardTableData = (data, searchPayload) => {
  if (!searchPayload.date && !searchPayload.searchValue) return data;

  if (searchPayload.date && searchPayload.searchValue) {
    return data.filter((item) => {
      return (
        item.activation_date === searchPayload.date &&
        item.name.toLowerCase().includes(searchPayload.searchValue)
      );
    });
  }

  if (searchPayload.date || searchPayload.searchValue) {
    return data.filter((item) => {
      if (searchPayload.date) {
        return item.activation_date === searchPayload.date;
      }
      return item.name.toLowerCase().includes(searchPayload.searchValue);
    });
  }
};
