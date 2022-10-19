const { Client, Message, MessageButton, MessageActionRow, MessageEmbed, Interaction } = require('discord.js');
const config = require('../config');

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {String[]} args 
 */

module.exports.exec = (client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply({ content: `Sem permissão.` })

    let _btns = new MessageActionRow().addComponents(
        new MessageButton()
            .setEmoji("📨")
            .setURL(`https://discord.com/channels/@me/${message.member.user.id}`)
            .setLabel(`${message.member.user.tag}`)
            .setStyle("LINK")
    )

    let aNota = args[0];
    let aMsg = args.slice(1).join(" ");

    if (!aNota || !aMsg) {
        return message.channel.send({
            content: `Utilize. \`!avaliar <1-10> <avaliação>\``
        })
    } else {
        try {
            client.guilds.cache.get("893167654527975464").channels.cache.get("1032368281702629458").send({
                embeds: [
                    new MessageEmbed()
                    .setColor(`#2F3136`)
                    .setThumbnail('https://media.discordapp.net/attachments/1027630046564864020/1032371327845269514/logo.gif')
                    .setAuthor({name:`${message.member.user.tag}`, iconURL: `${message.member.displayAvatarURL({dynamic:true})}`})
                    .setTitle(`:heart: Nova Avaliação de nossa Loja.`)
                    .setDescription(`+1 Membro avaliou o nosso serviço.`)
                    .addField(`Nota da Avaliação.`, `**${aNota}/10**`, true)
                    .addField(`Membro que Avaliou.`, `<@${message.member.user.id}>`, true)
                    .addField(`Mensagem da Avaliação`, `*${aMsg}*`, false)
                    .setFooter({text:`Musa™ Shop ©️ Todos os direitos reservados.`, iconURL: `${message.guild.iconURL({dynamic:true})}`})
                ],
                components: [_btns]
            })
        } catch (error) {
            console.log(error)
        }
    }

    

}

module.exports.config = {
    name: "avaliar",
    aliases: ["feed"]
}