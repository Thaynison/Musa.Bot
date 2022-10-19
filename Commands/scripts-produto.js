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
            .setDescription(`➥ Musa Hud: **1** : *R$ 500,00*\n
                            ➥ Musa Phone: **1** : *R$ 500,00*\n
                            ➥ Musa PedShop: **1** : *R$ 500,00*\n
                            ➥ Musa SkinShop: **1** : *R$ 500,00*`)
            .setFooter({text:`Musa™ Shop ©️ Todos os direitos reservados.`, iconURL: 'https://media.discordapp.net/attachments/1027630046564864020/1032371327845269514/logo.gif'})
    ]
})    

}

module.exports.config = {
    name: "scripts",
    aliases: ["scripts"]
}
