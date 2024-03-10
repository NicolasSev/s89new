export function formatStatisticsTableData(data) {
  return data.map((item, index) => {
    return {
      id: item.PartnerID.S,
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

  if (searchPayload.date || searchPayload.searchValue) {
    return data.filter((item) => {
      if (searchPayload.date) {
        return item.date === searchPayload.date;
      }
      return (
        item.name.includes(searchPayload.searchValue) ||
        item.id.includes(searchPayload.searchValue)
      );
    });
  }

  if (searchPayload.date && searchPayload.searchValue) {
    return data.filter((item) => {
      return (
        item.date === searchPayload.date &&
        (item.name.includes(searchPayload.searchValue) ||
          item.id.includes(searchPayload.searchValue))
      );
    });
  }

  return data;
}
