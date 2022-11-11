export default defineEventHandler(async (event) => {
  async function get_ip() {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
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
