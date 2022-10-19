const { Client, Message, MessageButton, MessageActionRow, MessageEmbed, Interaction, MessageSelectMenu } = require('discord.js');
const config = require('../config');

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {String[]} args 
 */

module.exports.exec = (client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply({ content: `Sem permissão.` })

    let _opts = new MessageActionRow().addComponents(
        new MessageButton()
        .setCustomId("financero")
        .setEmoji("💳")
        .setLabel("Fazer orçamento.")
        .setStyle("PRIMARY")
    )


    message.channel.send({
        components:[_opts],
        embeds: [
            new MessageEmbed().setColor("#2F3136")
            .setThumbnail('https://media.discordapp.net/attachments/1027630046564864020/1032371327845269514/logo.gif')
            .setTitle(`🎀 **Tabela de Preços dos Serviços - Musa™ Shop** 🎀`)
            .setDescription(`  👶🏻 - **Fivem**\n
                            ➥ Skins Baby: **1** : *R$ 50,00*\n
                            ➥ Skins Baby: **1** : *R$ 50,00*\n
                            ➥ Skins Baby: **1** : *R$ 50,00*\n
                                
                            👗 - **The Sims 4**\n
                            ➥ Roupas Personalizadas: **1** : *R$ 50,00*\n
                            ➥ Roupas Personalizadas: **1** : *R$ 50,00*\n
                            ➥ Roupas Personalizadas: **1** : *R$ 50,00*`)
            .setFooter({text:`Musa™ Shop ©️ Todos os direitos reservados.`, iconURL: 'https://media.discordapp.net/attachments/1027630046564864020/1032371327845269514/logo.gif'})
        ]
    })
}   

module.exports.config = {
    name: "mods",
    aliases: ["mods"]
}