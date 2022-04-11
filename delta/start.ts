import { Composer, Context, InlineKeyboard } from "../deps.ts";

const composer = new Composer();

export const message: string =
  `<b>Assalomu alaykum, hurmatli administrator!</b> \n` +
  `\n` +
  `Sizni ko'rib turganimdan bag'oyatda hursandman. ` +
  `Men Xinux Jamiyati tomonidan yaratilgan bot hisoblanib, ` +
  `Xinux Jamiyati foydalanuvchilari uchun foydali resurslarni yetkazish, saqlash va ` +
  `ularni saralash uchun xizmat qilaman.`;

export const keyboard = new InlineKeyboard()
  .url("Jamiyat", "https://t.me/xinuxuz")
  .url("Web Sahifa", "https://xinux.uz");

composer.command("start", async (ctx: Context): Promise<void> => {
  await ctx.reply(message, {
    parse_mode: "HTML",
    reply_markup: keyboard,
  });
});

export default composer;