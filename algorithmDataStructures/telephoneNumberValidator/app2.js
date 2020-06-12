function telephoneCheck(str) {
    // let regex = /^(1\s)?(\({1}\d{3}\){1})|(\d{3})-?\s?(\d{4})/;
    // let regex = /^(1\s)?(\({1}\d{3}\){1})|(\d{3})-?|\s?(\d{3})-?|\s?(\d{4})/;
    // let regex = /^(1\s)?(\(\d{3}\)\s?)|(\d{3}-?|\s?)(\d{3})-?|\s?(\d{4})/;
    let regex = /^(1\s?)?(\(\d{3}\)\s?|\d{3})[-\s]?(\d{3})[-\s]?\d{4}$/;
    console.log(regex.test(str));
    return regex.test(str);
  }
  
  telephoneCheck("555-555-5555");
  telephoneCheck("1 (555) 555-5555")
  telephoneCheck("1 555)555-5555")