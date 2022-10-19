const { Client, Message, MessageButton, MessageActionRow, MessageEmbed } = require('discord.js');
const config = require('../config');

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {String[]} args 
 */

module.exports.exec = (client, message, args) => {

    let _btns = new MessageActionRow().addComponents(
        new MessageButton()
            .setEmoji("🔔")
            .setCustomId("notify_adverts")
            .setLabel("Ping Anúncios")
            .setStyle("PRIMARY"),
        new MessageButton()
            .setEmoji("🔄")
            .setCustomId("notify_updates")
            .setLabel("Ping Atualizações")
            .setStyle("PRIMARY"),
        new MessageButton()
            .setEmoji("🤝")
            .setCustomId("notify_parthers")
            .setLabel("Ping Parcerias")
            .setStyle("PRIMARY")
    )
	let _btns_2 = new MessageActionRow().addComponents(
        new MessageButton()
            .setEmoji("1000506523853787277")
            .setCustomId("add_all")
            .setLabel("Adicione todos os Ping's")
            .setStyle("SUCCESS"),
        new MessageButton()
            .setEmoji("⚠️")
            .setCustomId("remove_all")
            .setLabel("Remova todos os Ping's")
            .setStyle("DANGER")
    )

    message.channel.send({
        components:[_btns,_btns_2],
        embeds: [
            new MessageEmbed().setColor("#2F3136")
            .setThumbnail('https://media.discordapp.net/attachments/1027630046564864020/1032371327845269514/logo.gif')
            .setTitle(`🎀 **Cargos de Notificações** 🎀`)
            .setDescription(`➥ <@&1027609889289289849> - Para receber todos os anúncios de nossa loja\n
                             ➥ <@&1027409595355893764> - Para receber qualquer tipo de atualizações de nossa loja\n
                             ➥ <@&1027407321892130860> - Para receber todos os ping's de vossos parceiros de nossa loja`)
            .setFooter({text:`Musa™ Shop ©️ Todos os direitos reservados.`, iconURL: 'https://media.discordapp.net/attachments/1027630046564864020/1032371327845269514/logo.gif'})
    ]
})    
}

module.exports.config = {
    name: "cargos",
    aliases: ["roles"]
}