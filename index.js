const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const ContactInfo = require('./ContactInfo.json')
const client = new Client({
    puppeteer: {
      executablePath: '/usr/bin/brave-browser-stable',
    },
    authStrategy: new LocalAuth({
      clientId: "client-one"
    }),
    puppeteer: {
      headless: false,
    }
  });
  
  client.initialize();
  
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });
  
  const isNumberOnWhatsapp = async (number) => {
    return await client.isRegisteredUser(number)
    // .then ((res)=>{
    //     console.log(`${number} : ${res}`);
    // })
  }  

  client.on('authenticated', (session) => {
    console.log('WHATSAPP WEB => Authenticated');
  });
  
  client.on("ready", async () => {
    console.log("WHATSAPP WEB => Perfectly ready");
    // client.getChats().then((chats)=>{
    //     const trio = chats.find(
    //         (chat) => chat.name === "????? Trio"
    //     );
    //     console.log(trio)
    // client.sendMessage(trio.id._serialized, "This is an automated msg")
    // console.log("message sent");
    // })
  });
  ContactDemo = [{
    Code: 400916,
    PAN: 'BDBPS0279Q',
    PhoneNumber: '917668073035',
    Date: 45104
  },
  {
    Code: 21211200,
    PAN: 'AKRPC5547P',
    PhoneNumber: '919548899429',
    Date: 45104
  },
  {
    Code: 105672,
    PAN: 'BFAPD9415C',
    PhoneNumber: '918630822921',
    Date: 45104
  },
  {
    Code: 10567200,
    PAN: 'BFAPD9415C',
    PhoneNumber: '916396755990',
    Date: 45104
  },
  ]
client.on("ready", async () => {
    console.log("Listo")
    // isNumberOnWhatsapp("9456790295").then((res) => console.log(res));
    // isNumberOnWhatsapp("9548899429").then((res) => console.log(res));
    console.log("Disto")
    ContactInfo.map( async (con) => {
      con.chatId = `91${con.PhoneNumber}@c.us`
      con.message = `Dear Sir/Ma'am,\nYour ITR is still pending. Please contact us to file your ITR immediately.\nThe last date of filling is 31 July 2023.\nName: ${con.Name}\nPAN: ${con.PAN}\n   -Varundeep Associates`;
      { await (client.isRegisteredUser(con.PhoneNumber))? client.sendMessage(con.chatId,con.message): console.log(con.Code)}

})

    //     send_message.map(value => {
//         const chatId = value +"@c.us"
//         message = "Prueba 2"
//         client.sendMessage(chatId,message);
// })
})
