export const formatClientCardTableData = (data) => {
  return data.map((item, index) => {
    return {
      key: `${index}-${item.ClientID}`,
      name: `${item.ClientSurname} ${item.ClientName}`,
      phone: item.ClientPhoneNumber.replace('.0', ''),
      card_id: item.FCID || '',
      sub_name: item.FCName || '',
      activation_date: item.ActivationDate || '',
      expiration_date: item.ExpirationDate || '',
    };
  });
};

export const filterClientCardTableData = (data, searchPayload) => {
  if (!searchPayload.date && !searchPayload.searchValue) return data;

  if (searchPayload.date && searchPayload.searchValue) {
    return data.filter((item) => {
      return (
        item.activation_date === searchPayload.date &&
        item.name
          .toLowerCase()
          .includes(searchPayload.searchValue.toLowerCase())
      );
    });
  }

  if (searchPayload.date || searchPayload.searchValue) {
    return data.filter((item) => {
      if (searchPayload.date) {
        return item.activation_date === searchPayload.date;
      }
      return item.name
        .toLowerCase()
        .includes(searchPayload.searchValue.toLowerCase());
    });
  }
};
