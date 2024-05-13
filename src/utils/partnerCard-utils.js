export const formatPartnerCardTableData = (data) => {
  return data.map((item, index) => {
    return {
      key: `${item.PartnerID}-${index}`,
      name: item.PartnerName,
      id: item.PartnerID,
      qrcodeId: item.QRCodeID,
      create_date: item.CreateDate,
    };
  });
};
export const filterPartnerCardTableData = (data, searchPayload) => {
  if (!searchPayload.date && !searchPayload.searchValue) return data;

  if (searchPayload.date && searchPayload.searchValue) {
    return data.filter((item) => {
      return (
        item.create_date === searchPayload.date &&
        item.name
          .toLowerCase()
          .includes(searchPayload.searchValue.toLowerCase())
      );
    });
  }

  if (searchPayload.date || searchPayload.searchValue) {
    return data.filter((item) => {
      if (searchPayload.date) {
        return item.create_date === searchPayload.date;
      }
      return item.name
        .toLowerCase()
        .includes(searchPayload.searchValue.toLowerCase());
    });
  }
};
