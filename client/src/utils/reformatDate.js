function reformatDate(dateStr) {
  if (dateStr?.length === 10) {
    const dArr = dateStr.split("-"); 
    return dArr[2] + "/" + dArr[1] + "/" + dArr[0];
  }
  return dateStr;
}

export default reformatDate;
