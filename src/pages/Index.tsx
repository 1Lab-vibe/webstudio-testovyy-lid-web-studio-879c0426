import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Star, MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare, FileText, CreditCard, ShieldCheck } from "lucide-react";

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", task: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Заполните имя и телефон", variant: "destructive" });
      return;
    }
    toast({ title: "Заявка принята", description: "Перезвоним в течение 15 минут в рабочее время." });
    setForm({ name: "", phone: "", task: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">ТЛ</div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold leading-tight">Тестовый лид</div>
              <div className="text-xs text-muted-foreground leading-tight">Web Studio · Москва</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="tel:+74951234567" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-accent">
              <Phone className="h-4 w-4" /> +7 (495) 123-45-67
            </a>
            <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#request">Оставить заявку</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="container grid gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--success))]" /> Принимаем заявки · Москва
            </div>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Проверка полного клиентского сценария через Telegram-бота
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Тестовый проект для отработки потока: заявка в боте → подтверждение по email → согласование ТЗ → approve → оплата через A1. Без лишних шагов и звонков.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#request"><Send className="mr-2 h-4 w-4" /> Начать в Telegram</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#process">Как устроен процесс</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                </div>
                <span className="font-semibold">4.9</span>
                <span className="text-muted-foreground">· 87 отзывов на Яндекс Картах</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                <span className="font-semibold">@webstudio_test_bot</span>
              </div>
              <span className="text-xs text-muted-foreground">в сети</span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="max-w-[85%] rounded-lg bg-secondary p-3">Здравствуйте! Опишите задачу — соберу ТЗ за 10 минут.</div>
              <div className="ml-auto max-w-[85%] rounded-lg bg-primary p-3 text-primary-foreground">Нужен лендинг для автосервиса, бюджет до 80 000 ₽</div>
              <div className="max-w-[85%] rounded-lg bg-secondary p-3">Принял. Отправил черновик ТЗ на email. Подтвердите — вышлю счёт через A1.</div>
              <div className="max-w-[85%] rounded-lg bg-[hsl(var(--success))]/10 p-3 text-sm">
                <CheckCircle2 className="mr-2 inline h-4 w-4 text-[hsl(var(--success))]" />
                ТЗ согласовано · оплата через A1
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container px-4 py-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Отзывы клиентов</h2>
              <p className="mt-1 text-sm text-muted-foreground">Подтверждённые отзывы с Яндекс Карт</p>
            </div>
            <a href="#" className="text-sm font-medium text-primary hover:underline">Открыть на Картах →</a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: "Алексей М.", text: "Сделали ТЗ за вечер. Оплата через A1 без сюрпризов. Сайт запустили за 6 дней.", date: "12 апреля 2026" },
              { name: "Ирина К.", text: "Удобно, что весь процесс в Telegram. Не пришлось созваниваться, всё письменно и по делу.", date: "3 апреля 2026" },
              { name: "Дмитрий С.", text: "Чёткие сроки, прозрачная смета. Подтверждение по email пришло сразу, никакого подвешенного состояния.", date: "27 марта 2026" },
            ].map((r, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-5">
                <div className="mb-2 flex">
                  {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-accent text-accent" />)}
                </div>
                <p className="text-sm leading-relaxed">{r.text}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{r.name}</span>
                  <span>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border">
        <div className="container px-4 py-14">
          <h2 className="text-2xl font-bold md:text-3xl">Что делаем</h2>
          <p className="mt-1 text-sm text-muted-foreground">Только то, что входит в тестовый сценарий</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { t: "Лендинг под локальный бизнес", d: "Один экран оффера, отзывы, форма. Готов за 5–7 рабочих дней." },
              { t: "Telegram-бот для заявок", d: "Сбор брифа, отправка ТЗ на email, фиксация approve." },
              { t: "Подключение оплаты A1", d: "Счёт прямо в боте, подтверждение оплаты, чек на email." },
            ].map((s, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container px-4 py-14">
          <h2 className="text-2xl font-bold md:text-3xl">Последние работы</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { name: "Автосервис «Кузовной-77»", meta: "Лендинг + бот · 6 дней · 72 000 ₽" },
              { name: "Барбершоп «Линия»", meta: "Сайт записи · 4 дня · 55 000 ₽" },
              { name: "Стоматология «Дентум»", meta: "Лендинг + CRM-бот · 9 дней · 110 000 ₽" },
              { name: "Кофейня «Пар»", meta: "Меню + предзаказ · 5 дней · 48 000 ₽" },
            ].map((p, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-border bg-card p-5">
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.meta}</div>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary md:flex">
                  <FileText className="h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-b border-border">
        <div className="container px-4 py-14">
          <h2 className="text-2xl font-bold md:text-3xl">Как проходит работа</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { i: <MessageSquare className="h-5 w-5" />, t: "1. Заявка в боте", d: "Опишите задачу — бот соберёт бриф." },
              { i: <Mail className="h-5 w-5" />, t: "2. Email-подтверждение", d: "Получаете ТЗ и смету на почту." },
              { i: <ShieldCheck className="h-5 w-5" />, t: "3. Approve", d: "Подтверждаете в боте одной кнопкой." },
              { i: <CreditCard className="h-5 w-5" />, t: "4. Оплата A1", d: "Счёт и чек приходят автоматически." },
            ].map((s, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">{s.i}</div>
                <div className="font-semibold">{s.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="border-b border-border bg-primary text-primary-foreground">
        <div className="container grid gap-10 px-4 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Оставьте заявку</h2>
            <p className="mt-3 text-primary-foreground/80">
              Перезвоним в течение 15 минут в рабочее время (пн–пт, 10:00–19:00 МСК). Или напишите сразу в Telegram — ответим письменно.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4" /> +7 (495) 123-45-67</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4" /> hello@webstudio-test.ru</div>
              <div className="flex items-center gap-3"><Send className="h-4 w-4" /> @webstudio_test_bot</div>
            </div>
            <div className="mt-6 rounded-lg bg-primary-foreground/10 p-4 text-sm">
              <div className="font-semibold">Ориентир по бюджету</div>
              <div className="mt-2 text-primary-foreground/80">Лендинг — от 50 000 ₽ · Лендинг + бот — от 80 000 ₽ · Под ключ — от 120 000 ₽</div>
            </div>
          </div>
          <form onSubmit={submit} className="rounded-xl bg-card p-6 text-card-foreground">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input id="name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Как к вам обращаться" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+7 (___) ___-__-__" />
              </div>
              <div>
                <Label htmlFor="task">Задача (необязательно)</Label>
                <Textarea id="task" value={form.task} onChange={e => setForm({...form, task: e.target.value})} placeholder="Коротко: что нужно и к какому сроку" rows={4} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
            </div>
          </form>
        </div>
      </section>

      {/* Contacts */}
      <section className="border-b border-border">
        <div className="container grid gap-6 px-4 py-12 md:grid-cols-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Адрес</div>
            <div className="mt-2 flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <div className="text-sm">Москва, ул. Тестовая, 1<br/>офис 42, 4 этаж</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Часы работы</div>
            <div className="mt-2 text-sm">Пн–Пт: 10:00 — 19:00<br/>Сб–Вс: только Telegram</div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Контакты</div>
            <div className="mt-2 space-y-1 text-sm">
              <div>+7 (495) 123-45-67</div>
              <div>hello@webstudio-test.ru</div>
              <div>@webstudio_test_bot</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary/40">
        <div className="container flex flex-col gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© 2026 Тестовый лид Web Studio · Москва</div>
          <div>ИП Тестовый · ИНН 7700000000</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
