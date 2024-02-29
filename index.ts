// @ts-ignore
import TelegramBot, {Message} from "node-telegram-bot-api";
import {commandsEnum} from "./commandEnum";

const token = "7167918829:AAF_FJNP944GfOQZOHDWOKxRx3oHkKQ98LI"

const bot = new TelegramBot(token, {
    polling: true
});

const commands = [
    {
        command: "start",
        description: "Запуск бота"
    },
    {
        command: commandsEnum.changeUser,
        description: "Изменить имя пользователя бд"
    },
    {
        command: commandsEnum.help,
        description: "Раздел помощи"
    },
    {
        command: commandsEnum.changePass,
        description: "Изменить пароль пользователя бд"
    }
]
bot.setMyCommands(commands).then()


bot.on('message', async (msg: Message) => {
    if(msg.text === "/start") {
        await bot.sendMessage(msg.chat.id, "Имя пользователя базы данных: ");
    }
    else if(msg.text == commandsEnum.changeUser) {
        await bot.sendMessage(msg.chat.id, `start=${msg.text}`);
    }
    else if(msg.text == commandsEnum.changePass) {
        await bot.sendMessage(msg.chat.id, `start=${msg.text}`);
    }
    else if(msg.text == commandsEnum.help) {
        await bot.sendMessage(msg.chat.id, `start=${msg.text}`);
    }
})




