export function formatStatisticsTableData(data) {
  return data.map((item, index) => {
    return {
      id: item.PartnerID.S,
      partner_name: item.PartnerName.S,
      name: item.ClientFullName.S,
      date: item.VisitDate.S,
      key: `${index}-${item.PartnerID.S}`,
    };
  });
}

export function filterStatisticsTableData(data, searchPayload) {
  if (!searchPayload.date && !searchPayload.searchValue) {
    return data;
  }

  if (searchPayload.date && searchPayload.searchValue) {
    return data.filter((item) => {
      return (
        item.date === searchPayload.date &&
        (item.name.toLowerCase().includes(searchPayload.searchValue) ||
          item.partner_name.toLowerCase().includes(searchPayload.searchValue))
      );
    });
  }

  if (searchPayload.date || searchPayload.searchValue) {
    return data.filter((item) => {
      if (searchPayload.date) {
        return item.date === searchPayload.date;
      }
      return (
        item.name.toLowerCase().includes(searchPayload.searchValue) ||
        item.partner_name.toLowerCase().includes(searchPayload.searchValue)
      );
    });
  }

  return data;
}
