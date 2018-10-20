//=============================== - [ Consts ] - ===================================


const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();
const ms = require("ms");
const fs = require('fs');
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');
const r1 = require('snekfetch');
const jimp = require('jimp')
const math = require('math-expression-evaluator'); 
const child_process = require("child_process");
const developers = ['429972030092476437'];
const admin = ".";
const prefix = ".";


//=============================== - [ Bot ] - ===================================


client.on('ready', () => {
  console.log(`Logged in as : ${client.user.tag}!`);
  console.log(`Servers : [ " ${client.guilds.size} " ]`);
  console.log(`Users : [ " ${client.users.size} " ]`);
  console.log(`Channels : [ " ${client.channels.size} " ]`);
});




client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
 
  if (message.content.startsWith(admin + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Watching ${argresult} \` `)
  } else 
  if (message.content.startsWith(admin + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Listening ${argresult} \` `)
  } else 
  if (message.content.startsWith(admin + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
     message.channel.send(` ☑ Client Activity Now Is : \`Streaming ${argresult} \` `)
  }
  if (message.content.startsWith(admin + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(` Client UserName Changed To : \` ${argresult}\` `)
} else
if (message.content.startsWith(admin + 'setavatar')) {
  client.user.setAvatar(argresult);
      message.channel.send(` Client Avatar Changed To : \` ${argresult}\` `)
}
});



   client.on('message', message => {
        let guild = '468519385552650240';
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return;
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return;
    }
}
});



client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle(' New Dm Mesage ')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\`${message.content}\``)
            .setFooter(`From : ${message.author.tag}`)
        client.channels.get("482813431196418049").send({ embed: iiMo });
    }
});



      client.on('message', message => {
                if (!developers.includes(message.author.id)) return;
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('.allbc')){
message.channel.sendMessage(':white_check_mark:')
client.users.forEach(m =>{
    m.send(`${m}`)
    m.send(args)
})
}
});



client.on('message', message => {
        if (message.content.toLowerCase() === prefix + "inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setTitle(`:small_orange_diamond: Click Here To Invite Premium. `)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
     message.channel.sendEmbed(embed);
       }
   });
   


client.on('message', message => {
    if (!developers.includes(message.author.id)) return;
     if (message.content.toLowerCase() === prefix + "bot") {
message.channel.send(`

__Servers : ${client.guilds.size}__
__Users : ${client.users.size}__
__Channels : ${client.channels.size}__

`);
    }
});

client.on('message', message => {
if(message.content.startsWith('#mute')) {
return;

}})
client.on('message', message => {
  if(message.content.startsWith('&mute')) {
  return;
  
  }})
  client.on('message', message => {
    if(message.content.startsWith('%mute')) {
    return;
    
    }})
    client.on('message', message => {
      if(message.content.startsWith('@mute')) {
      return;
      
      }})
      client.on('message', message => {
        if(message.content.startsWith('!mute')) {
        return;
        
        }})
        client.on('message', message => {
          if(message.content.startsWith('*mute')) {
          return;
          
          }})
          client.on('message', message => {
            if(message.content.startsWith('&mute')) {
            return;
            
            }})
            client.on('message', message => {
              if(message.content.startsWith('^mute')) {
              return;
              
              }})
              client.on('message', message => {
                if(message.content.startsWith('$mute')) {
                return;
                
                }})
client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(!message.channel.guild) return;
if(message.content.toLowerCase() === prefix + "ping") {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
                  .setColor('#36393e')
.setTitle(' Time Taken : '+msg + " ms")
.setAuthor(' Discord Api : '+api + " ms")
message.channel.send({embed:embed}).then(message => message.delete(5000));
}
});
//=============================== - [ Help ] - ===================================



      client.on("message", message => {
    if (message.content.toLowerCase() === prefix + "help") {
        message.delete(5000)
        if(!message.channel.guild) return;
        const e = new Discord.RichEmbed()
        .setColor('#36393e')
        .setTitle('Check Your DM’s')
     const embed = new Discord.RichEmbed()
         .setColor('#36393e')
         .setTitle('Click To Join Support Server')
         .setURL('https://discord.gg/YMtPWz')
         .setDescription(`
         \`\`\`Main Commands  :\`\`\`         
         
         - ${prefix}guild
         
         - ${prefix}myinv
         
         - ${prefix}topinvites
         
         - ${prefix}channelinfo
    
         - ${prefix}id
         
         - ${prefix}stats
         
         - ${prefix}avatar
         
         - ${prefix}icon
         \`\`\`Admin Commands :\`\`\` 
         
         \`Text Commands : \`
         
         - ${prefix}tempban

         - ${prefix}warn
         
         - ${prefix}ban
         
         - ${prefix}kick
         
         - ${prefix}bc
         
         - ${prefix}mute
         
         - ${prefix}unmute
         
         - ${prefix}mc
         
         - ${prefix}umc
         
         - ${prefix}role
         
         - ${prefix}role all
         
         - ${prefix}role humans
         
         - ${prefix}role bots 
         
         - ${prefix}createcolors
         
         - ${prefix}setwelcomer

         - ${prefix}clear
         
         \`Voice Commands : \`
         
        - ${prefix}Move all

        - ${prefix}setVoice

        - ${prefix}setCount

        - ${prefix}setDate

        - ${prefix}setTime

        - ${prefix}setDays

        \`\`\`Games Commands :\`\`\` 
         
        - ${prefix}xo

        - ${prefix}mariam 

        - ${prefix}cuttweet 

        - ${prefix}sarahah 

        - ${prefix}cat 

        - ${prefix}roll 
`)
   message.channel.send(e).then(m => m.delete(5000))
   message.author.sendEmbed(embed).catch(error => message.reply('Your DM’s is CLosed'))
   
   }
   });

//=============================== - [ Welcome ] - ===================================

   const sWlc = {}
const premium = ['396958215377780747', '', '', '']
client.on('message', message => {
var prefix = ".";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
});
 


client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
         
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
      const w = ['w.png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 540, 230);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = '21px kathen';
                              ctx.fontSize = '25px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 240, 150);
                              
                              //NAMEً
                              ctx.font = '21px kathen';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To ${member.guild.name}`, 240, 90);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();
                   
                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
      })
      })
      
      }
      });


  
 
//=============================== - [ Setrooms ] - ===================================



client.on('message',async message => {
    if(message.content.startsWith(prefix + "setVoice")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
      console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
      },1000);
    });
    }
  });

  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setCount")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
      console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`Members Count : [ ${message.guild.members.size} ]`)
      },1000);
    });
    }
  });

    
  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setTime")) {
    if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermission(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel("🕐 - Time  00", 'voice').then((c) => {
      console.log(`Time channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
          setInterval(function() {

        var currentTime = new Date(),
        hours = currentTime.getHours() + 3 ,
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth(),
        day = currentTime.getDate(),
        week = currentTime.getDay();

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var suffix = "AM";
        if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
        }
        if (hours == 0) {
            hours = 12;
        }

        c.setName("🕐 - Time   「" + hours + ":" + minutes  +" " + suffix + "」");
      },1000);
    });
    }
  });


  
  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setDate")) {
        var currentTime = new Date(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth() + 1,
        day = currentTime.getDate(),
        week = currentTime.getDay();
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel("📅 - Date " + "「" + day + "-" + month + "-" + years + "」" , 'voice').then(c => {
      console.log(`Date channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName("📅 - Date " + "「" + day + "-" + month + "-" + years + "」")
      },1000);
    });
    }
  });



//=============================== - [ Games Commands ] - ===================================

 client.on('message' , message => {
  var prefix = ".";
  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:'] 
  var grid_message;

  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1); 
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    let player1_id = array_of_mentions[random1].id;
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_( playing this game with yourself :joy:)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('Loading... Please wait for the :ok: reaction.')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listener initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.reply(` :anger: \`Use : ${prefix}xo @player1 @player2\``)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });


 const x5bz4 = [ //mariam
    '*** انا اسمي مريم ***',
    '*** مرحباَ ماهو اسمك ؟ ***',
    `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
    '*** هل تود مساعدتي ؟ ***',
    '*** لماذا هل انت قاسي القلب ؟ ***',
    '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
    '*** ابتعد عني قليل انني متعبة ***',
    '*** هل انت نادم على ماقلت ؟ ***',
    '*** ابتعد عني قليل انني متعبة ***',
    '*** هل انت نادم على ماقلت ؟ ***',
    '*** هل تود مساعدتي ؟ ***',
    '*** واو اشكرك انك شخصاَ رائع ! ***',
    '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
    '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
    '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
    '*** هيا اذاَ ***',
    '*** اود ان اسئلك سؤال ونحن في الطريق ***',
    '*** هل تراني فتاة لطيفة ام مخيفة ***',
    '*** اشكرك !  ***',
    '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
    '*** هل انت جاهز ؟ ***',
    '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
    '*** هل تود ان تراهم الان ***',
    '*** انا لست الحوت الازرق كما يدعون ***',
    '*** انا لست كاذبة صدقني***',
    '*** لماذا ارى في عينيك الخوف ؟ ***',
    '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
    '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
    '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
    '*** لماذا لم تدخل الغرفة ؟ ***',
    '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
    '*** لن تخرج حتى اعود لك بعد قليل ***',
    '*** المفتاح معك ! اكتب .مريم  ***',
    '*** مفتاح احمر , هل حصلت عليه ؟ ***',
    '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
    '*** مفتاح اسود . هل حصلت عليه ؟ ***',
    '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
    '*** لقد عادت من جديد الى المنزل ***',
    '*** لا تصدر اي صوت ! ***',
    '*** مريم : لقد عدت ***',
    '*** مريم : يا ايها المخادع اين انت ***',
    '*** مريم : اعلم انك هنا في المنزل ***',
    '*** مريم : ماذا تريد ان تسمع ***',
    '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
    '*** احد ما خرج من المنزل ***',
    '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدنا في نشر البوت وادخل هذا السيرفر https://discord.gg/q7X8hCD ***'
 ]
  client.on('message', message => {//mariam2
  if (message.content.startsWith('.mariam')) {
   var mariam= new Discord.RichEmbed()
   .setTitle("لعبة مريم ..")
   .setColor('RANDOM')
   .setDescription(`${x5bz4[Math.floor(Math.random() * x5bz4.length)]}`)
   .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
    message.channel.sendEmbed(mariam);
    message.react("??")
     }
 });


 var cats = [//cat

    "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
    "https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
    "http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
    "https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
    "https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
    "https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
    "http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
    ]
        client.on('message', message => {//cat
            var args = message.content.split(" ").slice(1);
        if(message.content.startsWith(prefix + 'cat')) {
             var cat = new Discord.RichEmbed()
    .setImage(cats[Math.floor(Math.random() * cats.length)])
    message.channel.sendEmbed(cat);
        }
    });

    client.on('message', function(message) {//roll
        if(message.content.startsWith(prefix + 'roll')) {
            let args = message.content.split(" ").slice(1);
            if (!args[0]) {
                message.channel.send('**ضع رقم معين ليتم السحب منه**');
                return;
                }
        message.channel.send(Math.floor(Math.random() * args.join(' ')));
                if (!args[0]) {
              message.edit('1')
              return;
            }
        }
    });

    const Sra7a = [ //saraha
        'صراحه  |  صوتك حلوة؟',
        'صراحه  |  التقيت الناس مع وجوهين؟',
        'صراحه  |  شيء وكنت تحقق اللسان؟',
        'صراحه  |  أنا شخص ضعيف عندما؟',
        'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
        'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
        'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
        'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
        'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
        'صراحه  |  أشجع شيء حلو في حياتك؟',
        'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
        'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
        'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
        'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
        'صراحه  |  نظرة و يفسد الصداقة؟',
        'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
        'صراحه  |  شخص معك بالحلوه والمُره؟',
        'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
        'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
        'صراحه  |  وش تتمنى الناس تعرف عليك؟',
        'صراحه  |  ابيع المجرة عشان؟',
        'صراحه  |  أحيانا احس ان الناس ، كمل؟',
        'صراحه  |  مع مين ودك تنام اليوم؟',
        'صراحه  |  صدفة العمر الحلوة هي اني؟',
        'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
        'صراحه  |  صفة تحبها في نفسك؟',
        'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
        'صراحه  |  تصلي صلواتك الخمس كلها؟',
        'صراحه  |  ‏تجامل أحد على راحتك؟',
        'صراحه  |  اشجع شيء سويتة بحياتك؟',
        'صراحه  |  وش ناوي تسوي اليوم؟',
        'صراحه  |  وش شعورك لما تشوف المطر؟',
        'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
        'صراحه  |  ما اكثر شي ندمن عليه؟',
        'صراحه  |  اي الدول تتمنى ان تزورها؟',
        'صراحه  |  متى اخر مره بكيت؟',
        'صراحه  |  تقيم حظك ؟ من عشره؟',
        'صراحه  |  هل تعتقد ان حظك سيئ؟',
        'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
        'صراحه  |  كلمة تود سماعها كل يوم؟',
        'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
        'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
        'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
        'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
        '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
        'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
        '‏صراحه | هل تحب عائلتك ام تكرههم؟',
        '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
        '‏صراحه  |  هل خجلت من نفسك من قبل؟',
        '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
        '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
        '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
         '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
        '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
        '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
        'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
        '‏صراحه  |  ما هو عمرك الحقيقي؟',
        '‏صراحه  |  ما اكثر شي ندمن عليه؟',
        'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
    ]
      client.on('message', message => {//saraahaaah
    if (message.content.startsWith('.sarahah')) {
        if(!message.channel.guild) return message.reply('** هذا الامر فقط للسيرفرات **');
     var Rocket = new Discord.RichEmbed()
     .setTitle("لعبة صراحة ..")
     .setColor('RANDOM')
     .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
     .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                     .setTimestamp()
    
      message.channel.sendEmbed(client);
      message.react("??")
    }
    });

    const cuttweet = [//cuttweet
        'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
        'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
        'كت تويت | الحرية لـ ... ؟',
        'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
        'كت تويت ‏| كلمة للصُداع؟',
        'كت تويت ‏| ما الشيء الذي يُفارقك؟',
        'كت تويت ‏| ما الشيء الذي يُفارقك؟',
        'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
        'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
        'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
        'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
        '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
        'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
        '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
        '‏كت تويت | وش يفسد الصداقة؟',
        '‏كت تويت | شخص لاترفض له طلبا ؟',
        '‏كت تويت | كم مره خسرت شخص تحبه؟.',
        '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
        '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
        '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
        '‏كت تويت |أقوى كذبة مشت عليك ؟',
        '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
        'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
        '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
        '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
        '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
        '‏كت تويت | مطلبك الوحيد الحين ؟',
        '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
   ]
   
    client.on('message', message => {//cuttweet
      if (message.content.startsWith(".cuttweet")) {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
     var embed = new Discord.RichEmbed()
     .setColor('RANDOM')
      .setThumbnail(message.author.avatarURL)
    .addField('Premium BOT' ,
     `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
     message.channel.sendEmbed(embed);
     console.log('[id] Send By: ' + message.author.username)
       }
   });




//=============================== - [ Main Commands ] - ===================================


client.on('message', message => {
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
    if(message.content.split(' ')[0].toLowerCase() == prefix + 'guild') {
         let i = 1;
       const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
            const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    var heg = message.guild;

        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .addField('GuidlOwner',message.guild.owner,true)
        .addField('Guild ID', message.guild.id,true)
        .addField('Guild MemberCount', `${message.guild.memberCount}`+` [Online : ${message.guild.members.filter(m=>m.presence.status == 'online').size + message.guild.members.filter(m=>m.presence.status == 'idle').size + message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]`)
        .addField('Guild BotCount',` ${message.guild.members.filter(m=>m.user.bot).size} `)
        .addField('Guild Channels',`\`🔊\` ${message.guild.channels.filter(m => m.type === 'voice').size} | `+`\`#\`${message.guild.channels.filter(m => m.type === 'text').size} `)
        .addField('Guild RolesCount',` ${message.guild.roles.size} `,true)
        .addField('Created',`\`منذ  ${createdAt.toFixed(0)}  يوم\`  ` ,true)
        .addField('Guild Region',message.guild.region,true)
                  .setColor('#36393e')
        
        message.channel.send(embed)
    }
})



  client.on('message',message =>{
      var prefix = "#";
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'myinv') {
let guild = message.guild
var codes = [""]
 var nul = 0
      
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
    nul+=invite.uses
codes.push(`discord.gg/${invite.code}`)
}
 
})
  if (nul > 0) {
      const e = new Discord.RichEmbed()
      .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
      .setColor('#36393e')
      message.channel.send(e)
  }else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.channel.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes :\n${codes.join("\n")}`)
.setColor('#36393e')
message.channel.send({ embed: embed });
return;
}
})
}

});




        const arraySort = require('array-sort'),
          table = require('table');

client.on('message' , async (message) => {

 if(message.content.split(' ')[0].toLowerCase() == prefix + 'topinvites') {
                 if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');

  var invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
            
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
    
     
    })
    
    const embed = new Discord.RichEmbed()
 .setColor('#36393e')
    .addField("Top Invites." ,`${(possibleInvites)}`)

    message.channel.send(embed)
    }
});



client.on('message', message => {
var prefix = "."
const args = message.content.slice(prefix.length).trim().split(/ +/g);
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'channelinfo') {
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
  var kakchannel = args.slice(1).join(' ');
  if(!kakchannel) return message.reply('please, specify a channel to get info...');

  var achannel = message.guild.channels.find('name', kakchannel);
  if(!achannel) return message.reply("i didn't find no channel with tha name! Try again later 👎");

  var channelCreated = achannel.createdAt.toString().split(' ');
       const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
  const embed = new Discord.RichEmbed()
  .setColor(0xFF8DFD)
  .setImage()
  .setThumbnail('http://cdn.onlinewebfonts.com/svg/img_323299.png')
  .setURL('')
  .addField(`Channel Name`, `${achannel.name}`, true)
  .addField(`Channel ID`, `${achannel.id}`, true)
  .addField(`Channel Position`, `${achannel.position}`, true)
  .addField(`Channel Members`, `${achannel.members.size} have acess`, true)
  .addField(`Channel Type`, `${achannel.type}`, true)
  .addField(`Channel Topic`, `${achannel.topic}`, true)
  .addField(`Channel Created At`, `${createdAt.toFixed(0)} Days ago `)

  message.channel.send({embed})
}
});



client.on('message' , message => {
    var prefix = '.';
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'id') {
     const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
    let user = message.mentions.users.first() || message.author;
    message.delete();
   
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }

    let game;
    if (user.presence.game === null) {
        game = 'None.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'None.';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = 'Online';
    } else if (user.presence.status === 'dnd') {
        status = 'DND';
    } else if (user.presence.status === 'idle') {
        status = 'Idle';
    } else if (user.presence.status === 'offline') {
        status = 'Offline';
    }
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    moment.locale('En-ly');
                    message.guild.fetchInvites().then(invs => {
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let Invites = invs.filter(i => i.inviter.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    const embed = new Discord.RichEmbed()

  
  .addField('Discord Info : ', `Name : ${user.username}\n Discriminator: #${user.discriminator}\nID : ${user.id} \nJoinedDiscord : ${moment(heg.createdTimestamp).fromNow()}\nBot :  ${user.bot}\nPlaying : ${game}\nStatus : ${status}`,true)
  .addField('Server Info :', `LastMessage : ${messag}\nJoined :  ${moment(h.joinedAt).fromNow()} \n Invites :  ${inviteCount} Invite(s) \nRoles : `+message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(', '))
  .setAuthor(`${user.username}`, user.displayAvatarURL)
  .setColor('#36393e')
    .setThumbnail(user.displayAvatarURL)
    message.channel.send({embed})
  .catch(e => logger.error(e));
 })
}
 });
 


client.on('message', message => {
    if(message.content.split(' ')[0].toLowerCase() == prefix + 'stats') {
               if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setColor('BLACK')
            .addField('Ping' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('RAM Usage', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('ID' , `[ ${client.user.id} ]` , true)
            .addField('Prefix' , `[ ${prefix} ]` , true)
             .setColor('#36393e')
    })
}
});



client.on('message', message => {
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'avatar') {
     if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      
        const embed = new Discord.RichEmbed()
.setColor('#36393e')
        .setImage(`${x5bzm.avatarURL}`)
        .addField('Requested By:', message.author.tag)
      message.channel.sendEmbed(embed);
      }
    }
});
client.on('message', message => {
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'avatar') {
     if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
        var mentionned = message.mentions.users.first();

 if (mentionned) return;
          var x5bzm = message.author;
      
        const embed = new Discord.RichEmbed()
        .setColor('#36393e')
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

      client.on("message", message => {
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
       if(message.content.split(' ')[0].toLowerCase() == prefix + 'icon') {
          if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Icon !`)

.setColor('#36393e')
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
//=============================== - [ Main Commands ] - ===================================




//=============================== - [ Admin Commands ] - ===================================

// ------------ = [Text Commands] = ------------


client.on('message', message => {
  
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0].toLowerCase() == prefix + 'bc') {
        if(!message.channel.guild) return;
        if (!args[1]) {
    message.channel.send(`\`${prefix}bc <message>\``).then(m => m.delete(5000));
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                
                m.send(`${m}`);
                m.send(args);
              
            });
             message.channel.send('\`BroadCast Sent To '+message.guild.memberCount+' User\`');
        }
        } else {
            return;
        }
    });



    client.on('message', async message => {
        var moment = require('moment');
        let date = moment().format('Do MMMM YYYY , hh:mm');
        let User = message.mentions.users.first();
        let Reason = message.content.split(" ").slice(3).join(" ");
        let messageArray = message.content.split(" ");
        let time = messageArray[2];
        if(message.content.startsWith(prefix + "tempban")) {
           if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("**- ما معك برمشن**");
           if(!User) message.channel.send("**- منشن يلي تبي تبنده**");
           if(User.id === client.user.id) return message.channel.send("**- ماتقدر تبند البوت**");
           if(User.id === message.guild.owner.id) return message.channel.send("**- ماتقدر تبند الاونر**");
           if(!time) return message.channel.send("**- اكتب الوقت**");
           if(!time.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**- اكتب وقت حقيقي**');
           if(!Reason) message.channel.send("**- اكتب Reason**");
           let banEmbed = new Discord.RichEmbed()
           .setAuthor(`You have been banned from ${message.guild.name} !`)
           .setThumbnail(message.guild.iconURL || message.guild.avatarURL)
           .addField('- Banned By: ',message.author.tag,true)
           .addField('- Banned User:', `${User}`)
           .addField('- Reason:',Reason,true)
           .addField('- Time & Date:',date,true)
           .addField('- Duration:',time,true)
           .setFooter(message.author.tag,message.author.avatarURL);
           let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
    incidentchannel.send(banEmbed);
     message.channel.send(`**${tomute} has been banned ! **`).then(() => message.guild.member(User).ban({reason: Reason}))
           .then(() => message.channel.send(`**${User} has been banned ! :airplane:**`)).then(() => { setTimeout(() => {
               message.guild.unban(User);
           }, mmss(time));
        });
       }
    });


 client.on('message', message => {
 if(!message.channel.guild) return; 	 	
 
  if (message.author.bot) return;
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (message.content.split(" ")[0].toLowerCase() === prefix + "ban") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return;
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply('Mention a User').then(message => message.delete(4000))
  if (!message.guild.member(user)
  .bannable) return message.reply("I Can’t Ban This User").then(message => message.delete(4000))


  message.guild.member(user).ban(7, user);

message.channel.send(`** ${user.tag} banned from the server ! :airplane: **  `).then(message => message.delete(10000))

}
});



  client.on("message", message => {
 if(!message.channel.guild) return;  
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (message.content.split(" ")[0].toLowerCase() === prefix + "unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return;
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply(" I Can’t Find 'Muted' Role ").catch(console.error).then(message => message.delete(4000))
  if (message.mentions.users.size < 1) return message.reply(' Error : ``Mention a User``').catch(console.error).then(message => message.delete(4000))
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
 
  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
    });
  }
 
};
 
});




client.on('message', message => {

if (message.author.bot) return;
  if (message.content.split(" ")[0].toLowerCase() === prefix + "mc") {
                        if(!message.channel.guild) return;

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You Need MANAGE_MESSAGES Permission').then(message => message.delete(5000))
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
 const e = new Discord.RichEmbed()
               .setAuthor('Channel Disabled By : '+message.author.username)
                .setColor('#36393e')
               
               message.channel.send(e)
               });
             }
if (message.content.split(" ")[0].toLowerCase() === prefix + "umc") {
    if(!message.channel.guild) return;

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You Need MANAGE_MESSAGES Permission').then(message => message.delete(5000))
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               const e = new Discord.RichEmbed()
               .setAuthor('Channel Enabled By : '+message.author.username)
                        .setColor('#36393e')
               
               message.channel.send(e)
           });
             }



});


client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'role')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
const ee =new Discord.RichEmbed()
 .setDescription('I Cann’t Find This Role')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);                message.guild.member(member).removeRole(role1.id);
                
                     const e = new Discord.RichEmbed()
                     
                 .setDescription('** Changed Roles For **'+member+'**,** '+'**'+'-'+role1.name+'**')
                .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
                .setColor('BLACK')
                 message.channel.send(e)
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
const ee =new Discord.RichEmbed()
 .setDescription('I Cann’t Find This Role')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);                message.guild.member(member).addRole(role1);
                const e = new Discord.RichEmbed()
                
                .setDescription('** Changed Roles For **'+member+'**,** '+'**'+'+'+role1.name+'**')
                .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
                .setColor('BLACK')
                 message.channel.send(e)
            } else {
                message.reply(`يجب عليك كتابة اسم الرتبة`);
            } 
        }
 else if(args[0] == 'all') {
  if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`**  Done...\n**` +role1.name+`** Has Taken From __${message.guild.members.size}__ Member**`);
    });
  }
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return;
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`** Done...\n**` +  role1.name+`** Has Given To __${message.guild.members.size}__ Members **`);
    });
}
} else if(args[0] == 'humans') {
     if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`**  Done...\n**` +role1.name+`** Has Taken From __${message.guild.members.size}__ Member**`);
    });
  }

    if(role) {
        let role1 = message.guild.roles.find('name', role);

 const ee =new Discord.RichEmbed()
 .setDescription('I Cann’t Find This Role')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
        msg.edit(`** Done...**`);
        });
    }
} else if(args[0] == 'bots') {
     if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`**  Done...**`);
    });
  }
    if(role) {
        let role1 = message.guild.roles.find('name', role);
       const ee =new Discord.RichEmbed()
 .setDescription('I Cann’t Find This Role')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
        msg.edit('**'+role1.name+"**"+`** Has Given To __${message.guild.members.size}__ Member**`);
});
}
}
}
});


client.on('message', ra3d => {
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if (ra3d.content.split(" ")[0].toLowerCase() === prefix + "createcolors") {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return;
              ra3d.channel.send(`** Done ... \n __${args}__ Color Role Created **`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });



client.on('message', message => {
     var prefix = '.';
 if (message.content.split(" ")[0].toLowerCase() === prefix + "clear") {
        const word = message.content;
        const number = word.slice(7, word.length);
        const int = Number(number);
         if(!message.member.hasPermission("MANAGE_MESSAGES")){
            return message.channel.send("i need to be given Manage Messages permissions to use this command ");
}
         if(int >= 101){
            return message.channel.send("The max number of messages you can delete is 100");
}
         if(!message.member.hasPermission("MANAGE_MESSAGES")){
            return message.channel.send("Looks like you dont have the permissions to do that");
}
         if(int == ""){
            return message.channel.send("supply A Number to Delete");
        }else if (isNaN(int)){
            return message.reply('Must be a number')
        }
        message.channel.bulkDelete(int).then(() => {
            return message.channel.send(`Cleared ${int} messages.`).then(m => m.delete(5000))
    });
    }
})
// ------------ = [Voice Commands] = ------------

 client.on('message', message => {
 if (message.content.toLowerCase() === prefix + "move all") {
     message.delete(4000)
 if(!message.channel.guild) return;
 if (!message.member.hasPermission("MOVE_MEMBERS")) return;
 if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
if (message.member.voiceChannel == null) return;
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send('\`Moved All Voice Members To Your Channel\`').then(m => m.delete(4000))
 }
   });

//=============================== - [ log ] - ===================================


client.on("guildCreate", guild => {
var gimg;
var gname;
var gmemb;
var groles;

gname = guild.name;
gimg = guild.iconURL;
gmemb = guild.members.size;
groles = guild.roles.map(r=> {return r.name});
  let channel = client.channels.get('468522929932599316')
    if(!channel) return;
const e = new Discord.RichEmbed()
.setColor('#36393e')
.addField('Bot Joined Guild : ', `${guild.name}`)
.addField('Guild id : ', `${guild.id}`)
.addField('Guild UserCount : ',gmemb = guild.members.size)
.addField('Guild Owner : ', guild.owner)
.setThumbnail(gimg)
.setTimestamp()
 channel.send(e);

});


client.on("guildDelete", guild => {
var gimg;
var gname;
var gmemb;
var groles;

gname = guild.name;
gimg = guild.iconURL;
gmemb = guild.members.size;
groles = guild.roles.map(r=> {return r.name});
  let channel = client.channels.get('468522929932599316')
  if(!channel) return;
const e = new Discord.RichEmbed()
.setColor('#36393e')
.addField('Bot Left Guild : ', `${guild.name}`)
.addField('Guild id : ', `${guild.id}`)
.addField('Guild UserCount : ',gmemb = guild.members.size)
.addField('Guild Owner : ', guild.owner)
.setThumbnail(gimg)
.setTimestamp()
 channel.send(e);

});
 

client.on('voiceStateUpdate', (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;
  let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;

  let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;

    oldM.guild.fetchAuditLogs()
    .then(logs => {

      let user = logs.entries.first().executor.username

    if(m1 === false && m2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user} اخــذ مــيــوت صــوتــي بــواســطــه  ${newM} `)
       .setColor('#36393e')
        .setTimestamp()
       ch.send(embed)
    }
    if(m1 === true && m2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user} فــك عــنــه  مــيــوت صــوتــي بــواســطــه  ${newM} `)
       .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }
    if(d1 === false && d2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user}  اخــذ ديــفــن صــوتــي بــواســطــه   ${newM}`)
       .setColor('#36393e')
       .setTimestamp()

       ch.send(embed)
    }
    if(d1 === true && d2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user}  فــك عــنــه ديــفــن صــوتــي بــواســطــه   ${newM}`)
       .setColor('#36393e')
       .setTimestamp()

       ch.send(embed)
    }
  })
})


  client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
 
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
.setTitle(' تــعــديــل رســالــه  :  ')
.addField('قــبــل الــتــعــديــل',`${message.cleanContent}`)
.addField(' بــعــد  الــتــعــديــل ',`${newMessage.cleanContent}`)
.addField(' عــدلــت فــي  ',`<#${message.channel.id}>`)
.addField(' يــواســطــه  ', `<@${message.author.id}> `)
.setColor('#36393e')
       .setTimestamp();
     channel.send({embed:embed});
 
 
});
 
client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
   
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setColor('#36393e')
       .setDescription(` <@${member.user.id}>  انــضــم لــلــســيــرفــر `)
       .setTimestamp();
     channel.send({embed:embed});
});
 
client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
   
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setColor('#36393e')
       .setDescription(` <@${member.user.id}>  خــرج مــن الــســيــرفــر `)
       .setTimestamp();
     channel.send({embed:embed});
});
 
client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
 .setTitle('  مــســح رســالــه  :   ')
 .addField('  الــرســالــه  ',`${message.cleanContent}`)
 .addField('  مــســحــت فــي  ',`<#${message.channel.id}>`)
 .addField(' يــواســطــه  ', `<@${message.author.id}> `)
       .setColor('#36393e')
       .setTimestamp();
     channel.send({embed:embed});
 
});

     
      client.on("roleDelete", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('#36393e')          
            .setTitle('-  مــســح رتــبــه ')
            .addField(' اســم الــرتــبــه  ', role.name, true)
            .addField(' هــويــة الــرتــبــه ', role.id, true)
            .addField(' لــون الــرتــبــه ', role.hexColor, true)
            .addField(' بــواســطــه ', exec, true)
            .setColor('#36393e') 
            .setTimestamp()
            
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})


client.on('roleCreate', role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setTitle('+  انــشــاء رتــبــه ')
            .addField(' اســم الــرتــبــه  ', role.name, true)
            .addField(' هــويــة الــرتــبــه ', role.id, true)
            .addField(' لــون الــرتــبــه ', role.hexColor, true)
            .addField(' بــواســطــه ', exec, true)
            .setColor('#36393e') 
            .setTimestamp()
            
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})




  client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor("حــظــر عــضــو :  ")
        .setColor('#36393e') 
        .setThumbnail(myUser.avatarURL)
        .addField(' الــعــضــو  ',`**${myUser.username}**`,true)
        .addField('  بــواســطــه ',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});



    client.on("guildBanRemove", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor("  فــك حــظــر عــن عــضــو ")
        .setColor('#36393e') 
		 .setThumbnail(myUser.avatarURL)
        .addField(' الــعــضــو  ',`**${myUser.username}**`,true)
        .addField('  بــواســطــه ',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});

client.login(process.env.BOT_TOKEN)
