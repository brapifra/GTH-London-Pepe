module.exports = async function(context, req) {
    const axios = require('axios');
  context.log("JavaScript HTTP trigger function processed a request.");
  const { from = 'LON', to = 'PRG', dateFrom = '05%2F12%2F2019', dateTo = '25%2F12%2F2019&', return_from = '20%2F12%2F2019' , return_to = '25%2F12%2F2019', adults = '1' } = req.body || {};
  const {data} = await axios.get('https://kiwicom-prod.apigee.net/v2/search?fly_from=LCY&fly_to=PRG&date_from=05%2F12%2F2019&date_to=25%2F12%2F2019&return_from=20%2F12%2F2019&return_to=25%2F12%2F2019&adults=1&vehicle_type=aircraft',
  {
      headers: {
          // Lol
          apikey: '',
          accept: 'application/json'
      }
  });
  const d = data.data[0] || {};
  const stopsSpeech = d.route && d.route.length === 2 ? 'And it is direct, you do not need to stop anywhere!' : 'Cheap, but you have to stop somewhere else';
  const res = {
      speech: `What do you think about spending ${data.data[0].price} pounds? ${stopsSpeech}`,
      data
  }
  context.res = {
    status: 400,
    body: res
  };
};
