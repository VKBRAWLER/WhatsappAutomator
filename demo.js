ContactDemo = [{
  Code: 400916,
  PAN: 'BDBPS0279Q',
  PhoneNumber: '+919520315158',
  Date: 45104
},
{
  Code: 212112,
  PAN: 'AKRPC5547P',
  PhoneNumber: '+917668073035',
  Date: 45104
},
{
  Code: 105672,
  PAN: 'BFAPD9415C',
  PhoneNumber: '+918630822921',
  Date: 45104
},
{
  Code: 105672,
  PAN: 'BFAPD9415C',
  PhoneNumber: '+919897730685',
  Date: 45104
},
{
  Code: 105672,
  PAN: 'BFAPD9415C',
  PhoneNumber: '+918630722820',
  Date: 45104
},
{
  Code: 105672,
  PAN: 'BFAPD9415C',
  PhoneNumber: '+918126604715',
  Date: 45104
}
]

    ContactDemo.map( async (con) => {
        const chatId = con.PhoneNumber +"@c.us"
        message = `Dear Sir/Ma'am,\nYour ITR is still pending. Please contact us to file your ITR immediately.\nThe last date of filling is 31 July 2023\nName: ${con.Name}\nPAN: ${con.PAN}\n~ Varundeep Associates`;
        { await (client.isRegisteredUser(con.PhoneNumber))? client.sendMessage(chatId,message): console.log(con.Code)}
})