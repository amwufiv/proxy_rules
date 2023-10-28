pass = $persistentStore.read("pass")
body = {
  pass: pass
}
req = {
  url: 'https://sms.ufiv.org/get',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body),
  timeout: 5
}

$httpClient.post(req, function (error, response, data) {
  if (error) {
    //$notification.post("SMS", "查询失败", error);
  }
  else if (response.status == 200) {
    const msglist = JSON.parse(data);
    msglist.forEach(msg => {
      // keep last msg
      $persistentStore.write(JSON.stringify(msg),'last_msg')
      $notification.post(msg.sender, msg.time, msg.msg);
    });
  } else {
    $notification.post("SMS", "查询失败:" + response.status, data);
  }
})
$done();
