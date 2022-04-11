import { Composer, Context } from "../deps.ts";
import isReply from "../hooks/isReply.ts";

const composer = new Composer();

composer.command("off", isReply, async (ctx: Context): Promise<void> => {
  if (ctx?.message?.reply_to_message) {
    if (ctx?.message?.reply_to_message?.from?.id === ctx.me.id) {
      await ctx.reply(`Ha-ha... yaxshi urinish!`, {
        parse_mode: "HTML",
      });
    } else {
      await ctx.reply(
        `<b>Hurmatli <a href="tg://user?id=${ctx?.message?.reply_to_message
          ?.from?.id}">${ctx?.message?.reply_to_message?.from
          ?.first_name}</a>,</b>` +
          `\n` +
          `\n` +
          `Chunishim bo'yicha siz mavzudan chetlayashayabsiz. Iltimos, ` +
          `quyidagi tugmachani bosish orqali bizning offtop guruhga o'tib oling! ` +
          `Offtopic guruhimizda istalgan mavzuda suhbatlashish ruxsat etiladi. Boshqalarga halaqit qilmayliga 😉` +
          `\n` +
          `\n` +
          `<b>Hurmat ila, Xeonitte (Kseyonita)</b>`,
      );
    }
  }
});

composer.command("doc", isReply, async (ctx: Context): Promise<void> => {
  if (ctx?.message?.reply_to_message) {
    if (ctx?.message?.reply_to_message?.from?.id === ctx.me.id) {
      await ctx.reply(`Ha-ha... yaxshi urinish!`, {
        parse_mode: "HTML",
      });
    } else {
      await ctx.reply(
        `<b>Demak, <a href="tg://user?id=${ctx?.message?.reply_to_message
          ?.from?.id}">${ctx?.message?.reply_to_message?.from
          ?.first_name}</a>,</b>` +
          `\n` +
          `\n` +
          `<i>Bir bor ekan, bir yo'q ekan... Qadim o'tgan zamonlarda dokumentatsiya ` +
          `bo'lgan ekan. Aytishlariga qaraganda, undan deyarli hamma savollarga ` +
          `javob olsa bo'larkanda. Yanachi, unga avtorlar shunchalik ko'p vaqt ajratishar ` +
          `ekanu, lekin uni sanoqligina odam o'qisharkan. Attang...</i>`,
      );
    }
  }
});

export default composer;
