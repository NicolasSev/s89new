export const formatPartnerCardTableData = (data) => {
  return data.map((item, index) => {
    return {
      key: `${item.PartnerID.S}-${index}`,
      name: item.PartnerName.S,
      id: item.PartnerID.S,
      qrcodeId: item.QRCodeID.S,
      create_date: item.CreateDate.S,
    };
  });
};
export const filterPartnerCardTableData = (data, searchPayload) => {
  if (!searchPayload.date && !searchPayload.searchValue) return data;

  if (searchPayload.date || searchPayload.searchValue) {
    return data.filter((item) => {
      if (searchPayload.date) {
        return item.create_date === searchPayload.date;
      }
      return item.name.includes(searchPayload.searchValue);
    });
  }

  if (searchPayload.date && searchPayload.searchValue) {
    return data.filter((item) => {
      return (
        item.create_date === searchPayload.date &&
        item.name.includes(searchPayload.searchValue)
      );
    });
  }
};
