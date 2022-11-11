export default defineEventHandler(async (event) => {
  const config = {
    headers: {
      authority: "apim.canadiantire.ca",
      accept: "application/json",
      text: "plain",
      "accept-language": "en-US",
      bannerid: "CTR",
      basesiteid: "CTR",
      "ocp-apim-subscription-key": "c01ef3612328420c9f5cd9277e815a0e",
      origin: "https://www.canadiantire.ca",
      referer: "https://www.canadiantire.ca/",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "sec-gpc": "1",
      "service-client": "ctr/web",
      "service-version": "ctc-dev2",
      "user-agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTMLlike Gecko) Chrome/103.0.5060.114 Safari/537.36",
      "x-web-host": "www.canadiantire.ca",
    },
  };

  async function get_ip() {
    try {
      const response = await fetch("https://apim.canadiantire.ca/v1/store/store/601?lang=en_CA", {
        method: "GET",
        headers: config.headers,
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  }
  let mehrdad = await get_ip();
  return {
    mehrdad,
  };
});
