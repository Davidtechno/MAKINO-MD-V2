const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 
global.ANTI_BOT = false;
global.PM_BLOCKER = false;
global.CHATBOT = false;


global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "MAKINO-MD-V2";                             //Do not change.
global.author = "TAIRA MAKINO";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"sGdjh5FcbV/XoBJ1osBfci+2PcGQ5a2z49mN1ohi1Vs="},"public":{"type":"Buffer","data":"R1USPotMeFWfQJ1ENrb26YQk09/O67jFGLOryPAKA18="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"QPAARuad/AEiXrosszHTa0J3DE8W0dbZVqNZbP/213g="},"public":{"type":"Buffer","data":"FlxngfSx9FwOunrsPxBGyzAjSJRWwD0drqX+3trAAkk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"oIbwc7QL7sE/x45BdKiGE74Rn5AXq4qSWR+nEJ03S18="},"public":{"type":"Buffer","data":"VkTaBZdxKdfI253szsqdXJbL6vnXottVJ6kP7v8dxl8="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"UM01viR5L57OU+699sQiR+T1muoWZ3fEiBatLgcA20g="},"public":{"type":"Buffer","data":"ErPN1Wy1/0DQrgzXf8mJryO2yXMwknFXfRy09pZu1SE="}},"signature":{"type":"Buffer","data":"6IlnJ/KnyemFQh4hVlVTV1ZPR0pPw60tXQVz+Q7af+MhAPdKQ0svZVoBnqhz9eQdONdYyU5kzlH8MHT7/z5YiA=="},"keyId":1},"registrationId":82,"advSecretKey":"HXOjFG1IJkOqAaV8MlmdhDlIpNWWq2Y92CLyZPPd60A=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"em_IXxA3TSKN1e9LHbx83g","phoneId":"672f56b2-2fc0-454a-98ba-f2a5412ea2b0","identityId":{"type":"Buffer","data":"vBuIDNsZ9ql2n8rgqhsjPtaoupY="},"registered":true,"backupToken":{"type":"Buffer","data":"NoNBVorgPRybxlscsuHTO4yuDrs="},"registration":{},"pairingCode":"H1PE1AT1","me":{"id":"237657992109:6@s.whatsapp.net"},"account":{"details":"CM+atagFEOTC8rUGGAEgACgA","accountSignatureKey":"FdC7KXtc5X/AA7XYWuZ8KXSewN2cLpIgxlcFmdpVih4=","accountSignature":"tIOw449cFIqeMYN3jTyQtHUAdB5oo2LNgXUKjaWgzrhATxnn3OOaAoS1r8RKCD5ueIhuMDROKMS3WDJT1QvvAg==","deviceSignature":"v9L31C4fqcTVdCFqb+LvH/r5KEUqh2TlOtIq48WsMLNlI9qJ22np6aHivgem2Iv/DzPq4RjKF7yPSfNy1GtAig=="},"signalIdentities":[{"identifier":{"name":"237657992109:6@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRXQuyl7XOV/wAO12FrmfCl0nsDdnC6SIMZXBZnaVYoe"}}],"platform":"android","lastAccountSyncTimestamp":1723638130,"myAppStateKeyId":"AAAAAMuX"}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
