const { Client, Message, MessageButton, MessageActionRow, MessageEmbed, Interaction, MessageSelectMenu } = require('discord.js');
const config = require('../config');

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {String[]} args 
 */

module.exports.exec = (client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply({ content: `Sem permissão.` })

    /*let _opts = new MessageActionRow().addComponents(
        new MessageSelectMenu()
        .setCustomId('values-setupticket')
        .setPlaceholder(`Selecione o atendimento.`)
        .addOptions(
            { value: 0, name: "compra-servico", label: "Comprar um Serviço.", description: "Selecione para comprar um serviço de nossa Hospedagem.", emoji: "🛒" },
            { value: 1, name: "ajuda-atendimento", label: "Tire Dúvidas com gente.", description: "Selecione para você tirar algumas dúvidas sobre nois.", emoji: "🖐️" },
            { value: 2, name: "aplica-se", label: "Aplica-se.", description: "Selecione para fazer o forumalario para a nossa equipe.", emoji: "👮‍♂️" }
        )
    )*/

    let _opts = new MessageActionRow().addComponents(
        new MessageButton()
        .setCustomId("compra-servico")
        .setEmoji("🛒")
        .setLabel("Comprar um Serviço.")
        .setStyle("PRIMARY"),
        new MessageButton()
        .setCustomId("ajuda-atendimento")
        .setEmoji("🖐️")
        .setLabel("Tire Dúvidas com gente.")
        .setStyle("PRIMARY"),
        new MessageButton()
        .setCustomId("aplica-se")
        .setEmoji("👮‍♂️")
        .setLabel("Aplica-se para equipe.")
        .setStyle("PRIMARY")
    )

    message.channel.send({
        components:[_opts],
        embeds: [
            new MessageEmbed().setColor("#2F3136")
            .setThumbnail('https://media.discordapp.net/attachments/1027630046564864020/1032371327845269514/logo.gif')
            .setTitle(`🪧 Menu de Seleção para o Atendimento.`)
            .setDescription(`📢 Para iniciar o atendimento selecione qual atendimento você queira, após a iniciação do atendimento a nossa equipe tem até 24h para responder você então sempre fique atendo pois a gente não irar menciona-lô ou algo assim.`)
            .addField(`🕐 Hora(s) & Dia(s)`, `Segunda á Sexta - 07:30 até 22:00\nSábado e Domingo - 07:30 até 19:00`, false)
            .addField(`💁🏽 Atendente(s)`, `<@&1027407321892130860>`, true)
            .addField(`💁🏽 Atendente(s) 24hr`, `<@&1027407321892130860>`, true)
            .setFooter({text:`Musa™ Shop ©️ Todos os direitos reservados.`, iconURL: 'https://media.discordapp.net/attachments/1027630046564864020/1032371327845269514/logo.gif'})
        ]
    })    

}

module.exports.config = {
    name: "abrirticket",
    aliases: ["a-t"]
}