const express = require('express');
const app = express();
let cmd = '';

app.get('/send', (req, res) => {
    const c = req.query.c;
    if (c) { cmd = c; res.send('OK: ' + c); }
    else res.send('需要?c=指令');
});

app.get('/get', (req, res) => {
    const tmp = cmd;
    cmd = '';
    res.send(tmp);
});

app.listen(3000, () => console.log('已启动'));
// redeploy
