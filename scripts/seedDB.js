const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
//import questions from "./questions.json";

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/KisAppDatabase"
  );

const questions =
[
  {
    "objectID": 1,
    "topic": "sti",
    "question": "Will I get an STI if I don't use a condom?",
    "tags": "sti, condom",
    "answer": "It is definitely possible to contract an STI if you don't use a condom. But with a condom, you are 80% less likely to get an STI- so we strongly recommend using a condom!"
  },
  {
    "objectID": 2,
    "topic": "sex",
    "question": "Does sex feel good/pleasureable?",
    "tags": "sex, feel, pleasure, good",
    "answer": "It depends on the person. Most people have sex because it feels good and pleasureable. Some people also might expereince pain of discomfort during sex, which may be because of lack of lube, miscommunication between partners, or even a medical condition. To make sex feel good, it helps to experiment first with masturbation to find out what feels good for you!"
  },
  {
    "objectID": 3,
    "topic": "sex",
    "question": "What does sex feel like?",
    "tags": "sex, feel",
    "answer": "It depends on the person. Most people have sex because it feels good and pleasureable. Some people also might expereince pain of discomfort during sex, which may be because of lack of lube, miscommunication between partners, or even a medical condition. To make sex feel good, it helps to experiment first with masturbation to find out what feels good for you!"
  },
  {
    "objectID": 4,
    "topic": "sex",
    "question": "What kinds of sex positions are there?",
    "tags": "sex positions",
    "answer": "There are lots of sex positions for different kinds of sex! For anal and vaginal sex- missionary, cowgirl, and doggy style are common positions. For oral sex, \"69\" is another positionfew common ones."
  },
  {
    "objectID": 5,
    "topic": "health",
    "question": "What is a period?",
    "tags": "period",
    "answer": "TBD"
  },
  {
    "objectID": 6,
    "topic": "body",
    "question": "Is my penis too small?/Do women prefer bigger penises?",
    "tags": "penis, size, small",
    "answer": "Penises come in all shapes and sizes. Some people prefer bigger penises, and some smaller. It honestly just depends."
  },
  {
    "objectID": 7,
    "topic": "health",
    "question": "Is masturbation normal?",
    "tags": "masturbation, normal",
    "answer": "Yes! Masturbation is both normal and healthy for everyone. Masturbation is a great way to find out what feels good for your body."
  },
  {
    "objectID": 8,
    "topic": "sti",
    "question": "How likely am I to get an STI even if I use a condom?",
    "tags": "sti, condom, likely",
    "answer": "TBD"
  },
  {
    "objectID": 9,
    "topic": "sex",
    "question": "How do I know when I'm ready?/When's the right time to have sex?",
    "tags": "ready, first time, sex, right time",
    "answer": "We believe that people are ready to have sex when they know how to communicate with another person about sex."
  },
  {
    "objectID": 10,
    "topic": "lgbtq, sex",
    "question": "How do two women have sex?",
    "tags": "women, sex, lesbian",
    "answer": "There are lots of ways two women can have sex. For example, women can perform oral sex on each other, finger each others genitals, and have vaginal or anal sex with a penis or dildo."
  },
  {
    "objectID": 11,
    "topic": "sti",
    "question": "What are the most common STIs?",
    "tags": "common, sti",
    "answer": "The most common STI is HPV. In fact, 90% of people in the US will get HPV at some point in their lives. Other common STIs are chlamydia, gonorrhea, and herpes."
  },
  {
    "objectID": 12,
    "topic": "sex, sti",
    "question": "Can I get an STI from oral sex?",
    "tags": "sti, oral, sex",
    "answer": "Yes, you can get an STI from oral sex- whether you are using your mouth or genitals. Bacterial STIs like chlamydia and gonorrhea can be transferred from gentials to mouths/throats (and vice versa). Herpes is also commonly transferred between mouths and gentials. In fact, 50% of all new genital herpes infections come from oral herpes."
  },
  {
    "objectID": 13,
    "topic": "sex, lgbtq, sti",
    "question": "Can I get an STI from anal sex?",
    "tags": "sti, anal, sex",
    "answer": "Yes, you can get an STI from anal sex. Without using a condom, you are at high risk for STIs like chlamydia and gonorrhea. Anal sex also poses a high risk for HIV transmission."
  },
  {
    "objectID": 14,
    "topic": "sti, health",
    "question": "What if I have an STI but I don't get it checked?",
    "tags": "sti, looked at, check",
    "answer": "Most STIs actually show <u> no symptoms </u> so most people won't know if they have an STI unless they get checked for them. If you have an STI and don't get it checked, you run the risk of transferring the STI to others and some STIs, like syphilis, get worse over time."
  },
  {
    "objectID": 15,
    "topic": "sti, health",
    "question": "What happens during STI testing?",
    "tags": "sti, testing, exam, kinds",
    "answer": "Getting tested is actually a pretty easy process! A doctor will typically have you do a urine test to check for chalmydia and gonorrhea. If you have had anal or oral sex, you should also ask your doctor for a throat or rectal swab so they can check these places too. A provider may also draw some blood to check for other STIs."
  },
  {
    "objectID": 16,
    "topic": "sti, health",
    "question": "If I get tested, will they tell my parents?",
    "tags": "sti, parents, clinic, tell, test",
    "answer": "Every state has different laws. Use this tool to help you figure out what the consent laws are in your state."
  },
  {
    "objectID": 17,
    "topic": "sti",
    "question": "How can I tell if I have an STI?",
    "tags": "symptoms, sti",
    "answer": "If you have an STI, msot of the time, you won't know on your own because most people have no symptoms. The only way to know for sure is to get tested."
  },
  {
    "objectID": 18,
    "topic": "sti, health",
    "question": "What STIs can I get vaccinated for?",
    "tags": "sti, vaccine",
    "answer": "You can get vaccinated for HPV,"
  },
  {
    "objectID": 19,
    "topic": "sti, sex",
    "question": "Can I get an STI from a handjob or finger?",
    "tags": "sti, handjob, fingering",
    "answer": "Usually not, and handjobs/fingering is a great strategy for protecting your health when you don't have a condom on you!  STIs can be transferred through bodily fluids and some by close personal contact, so if you"
  },
  {
    "objectID": 20,
    "topic": "sti, health",
    "question": "How often should I get tested for STIs?",
    "tags": "sti, testing, frequency, often",
    "answer": "We recommend getting tested for STIs annually"
  },
  {
    "objectID": 21,
    "topic": "sti, testing",
    "question": "Who should get tested for STIs?",
    "tags": "sti, testing",
    "answer": "Anyone who has has sex should get tested for STIs. Some STIs, though, can get"
  },
  {
    "objectID": 22,
    "topic": "sti, sex",
    "question": "Can I still have sex if I get an STI?",
    "tags": "sex, sti",
    "answer": "Yes, you can still have sex. But you should also disclose this with a partner so you both know and can talk about how to stay safe during sex."
  },
  {
    "objectID": 23,
    "topic": "sti, relationships",
    "question": "If my partner has an STI does it mean they cheated on me?",
    "tags": "sti, relationship, cheat, partner, boyfriend, girlfriend",
    "answer": "No, it does not automatically mean they cheated on you. They might have gotten an STI from a previous partner"
  },
  {
    "objectID": 24,
    "topic": "sti, health",
    "question": "What do I do if my STI test is positive?",
    "tags": "sti, text, exam, positive",
    "answer": "That depends on the STI! Virtually all STIs are treatable and many are curable. If you test positive, ask your tester or doctor about the specific actions or medications you need to treat or cure your STI."
  },
  {
    "objectID": 25,
    "topic": "sti, health",
    "question": "Can I get STI tested for free?",
    "tags": "sti, testing, free",
    "answer": "Yes! Use this locator to find a clinic that does free STI testing."
  },
  {
    "objectID": 26,
    "topic": "sti, health",
    "question": "How much does it cost to get tested for STIs?",
    "tags": "sti, testing, cost",
    "answer": "Many places will do it for free! Use this clinic locaor to finda free testing site."
  },
  {
    "objectID": 27,
    "topic": "sti",
    "question": "Can I get an STI from kissing?",
    "tags": "sti, kissing",
    "answer": "Oral herpes (cold sores) is actually very common- about 2 our of 3 people have oral herpes. Oral herpes can be transfered by salivia (kissing, sharing drinks). You cannot transfer HIV by kissing."
  },
  {
    "objectID": 28,
    "topic": "sti",
    "question": "What's the difference between STI and STD?",
    "tags": "sti, std",
    "answer": "They mean the same thing. STI stands for \"sexually transmitted infection\" and STD for \"sexually transmitted disease\". They mean the same thing, but STI is the more medically accurate term (and is what we use on this site!)"
  },
  {
    "objectID": 29,
    "topic": "sti, hiv",
    "question": "How easy is it to get HIV or AIDS?",
    "tags": "easy, hiv, aids, transmission",
    "answer": "TBD"
  },
  {
    "objectID": 30,
    "topic": "sti",
    "question": "What is HPV?",
    "tags": "hpv",
    "answer": "HPV stands for “human papillomavirus.” HPV isn’t just one virus, but a group of viruses. Some of these viruses can cause serious health problems like cancer and warts. About 90% people will get infected with HPV. Most strands of HPV do go away on their own."
  },
  {
    "objectID": 31,
    "topic": "sti, sex",
    "question": "Can I get an STI if I've only been with one person?",
    "tags": "sti, partner, one, boyfriend, girlfriend",
    "answer": "Yes. You can even get an STI if you haven't had sex. For instance, genital warts can be transferred by \"close personal contact\"."
  },
  {
    "objectID": 32,
    "topic": "sti, sex",
    "question": "Can I get an STI if I don't have sex?",
    "tags": "sti, sex",
    "answer": "Usually not, but some STIs- like parasitic STIs and HPV- can be transferred by \"close personal contact\"."
  },
  {
    "objectID": 33,
    "topic": "sti",
    "question": "If I've had an STI, can I get it again?",
    "tags": "recur, sti, again",
    "answer": "Bacterial STIs (chlamydia and gonorrhea) can be cured, and it's possible to get it again if you have sex with someone who also has it and do not take precautions. Usually, viral STIs..."
  },
  {
    "objectID": 34,
    "topic": "sti, relationships",
    "question": "How can I tell if my partner has an STI?",
    "tags": "partner, sti, boyfirend, girlfriend",
    "answer": "Ask them. Most people who have an STI show no symptoms, so the only way to know if to get tested. It's important for you and your partner to communicate about testing"
  },
  {
    "objectID": 35,
    "topic": "sti",
    "question": "How can I prevent getting an STI?",
    "tags": "sti, prevent",
    "answer": "Using a barrier method, like condoms and dental dams, during sex are very effective at preventing STIs."
  },
  {
    "objectID": 36,
    "topic": "sti, health",
    "question": "Is there a vaccine for STIs?",
    "tags": "sti, vaccine",
    "answer": "Yes, some STIs like HPV and Hepatitis A/B have vaccines and are effective at preventing these STIs."
  },
  {
    "objectID": 37,
    "topic": "sti, health",
    "question": "Where can I get tested for STIs?",
    "tags": "where, testing, location, sti",
    "answer": "You can get tested for STIs at a testing clinic, a hospital, or at a doctor's appointment."
  },
  {
    "objectID": 38,
    "topic": "sti, health",
    "question": "Should I get tested for STIs?",
    "tags": "test, exam, screen, sti",
    "answer": "If you have had sex, you should get tested to know your own status. That will help you take control of your health and communicate effectively with your partners."
  },
  {
    "objectID": 39,
    "topic": "barrier method",
    "question": "What type of condom should I use?",
    "tags": "condom, use, type",
    "answer": "Most condoms are made out of latex, which is an effective material for preventing pregnancy and STIs. If you are allergic to latex, you can use other materials like iso"
  },
  {
    "objectID": 40,
    "topic": "barrier method",
    "question": "What types of condoms are there?",
    "tags": "condom, type",
    "answer": "Most male condoms are made of latex. Female condoms are typically made out of nitrile. Both of these are effective materials for preventing STIs and pregnancy. If you are allergic to latex, you can use non-latex condoms like polyurethane and polyisoprene male condoms."
  },
  {
    "objectID": 41,
    "topic": "barrier method, sti",
    "question": "Do condoms prevent STIs?",
    "tags": "condom, sti, prevent",
    "answer": "Yes! Condoms, both male and female condoms, are very effective at preventing STIs."
  },
  {
    "objectID": 42,
    "topic": "barrier method",
    "question": "What's the difference between a male and female condom?",
    "tags": "male, female, condom",
    "answer": "A male condom is worn on the outside of the body by the inserting partner, and an internal condom is worn on the inside of a vagina or anus during sex. Female condoms are also made out of nitrile, which means they can be used for latex-allergies. Male condoms are typically latex."
  },
  {
    "objectID": 43,
    "topic": "barrier method",
    "question": "Should I wear two condoms?",
    "tags": "two, multiple, more, condom",
    "answer": "No! Wearing two condoms (two male condoms, one female on male, two female) is a bad call because it makes the condoms more liekly to break. Wearing two condoms does NOT mean more protection. It actually means less."
  },
  {
    "objectID": 44,
    "topic": "barrier method, relationship",
    "question": "Do I have to use a condom if my partner is on birth control?",
    "tags": "condom, partner, girlfriend, birth control",
    "answer": "Birth control does not protect against STIs. So, if you and your partner are wanting protection from STIs, you should wear a condom during sex."
  },
  {
    "objectID": 45,
    "topic": "barrier method",
    "question": "If I don't have a condom, can I use a plastic bag or wrap?",
    "tags": "plastic, wrap, bag, condom",
    "answer": "No! Find a condom. A plastic bag or wrap will not protect against STIs and pregnancy and can even irritate gentials."
  },
  {
    "objectID": 46,
    "topic": "barrier method, lube",
    "question": "If I don't have lube, what can I use instead?",
    "tags": "lube",
    "answer": "TBD"
  },
  {
    "objectID": 47,
    "topic": "barrier method, sex",
    "question": "Do I need to use a condom for anal sex?",
    "tags": "condom, anal, sex",
    "answer": "Yes. While anal sex cannot cause pregnancy, you can transmit STIs by anal sex. Anal sex also poses a high risk for HIV."
  },
  {
    "objectID": 48,
    "topic": "barrier method",
    "question": "If I don't cum in a condom, can I reuse it?",
    "tags": "condom, use, cum, again, reuse",
    "answer": "No. You never want to reuse a condom or dental dam. A condom is only good for one use, even if you don't cum in it. Not only will reusing a condom make it more likely to break, but it's also possible it has precum."
  },
  {
    "objectID": 49,
    "topic": "barrier method, sex",
    "question": "What does wearing a condom feel like during sex?",
    "tags": "wear, condom, sex",
    "answer": "TBD"
  },
  {
    "objectID": 50,
    "topic": "barrier method, sex",
    "question": "What do I do if I don't like how condoms feel?",
    "tags": "condom, feel",
    "answer": "Try another one! Condoms come in all shapes and sizes, so find one that works for you. There are ribbed condoms, thin ones, smaller or larger ones. There's a condom out there for everyone, so it's a matter of trying different ones out until you find one that fits and works for you."
  },
  {
    "objectID": 51,
    "topic": "barrerier method",
    "question": "Who should bring condoms in the relationship?",
    "tags": "bring, condom",
    "answer": "Both/all partners should plan on bringing/carrying condoms."
  },
  {
    "objectID": 52,
    "topic": "barrier method",
    "question": "How do I know if a condom is okay to use?",
    "tags": "condom, safe, okay, use",
    "answer": "Check the package expiration date and quality. If it is expired, it is not good to use. If the packaging has any damages or tears, it is also not good to use. Throw these out and find a fresh condom with no package damages."
  },
  {
    "objectID": 53,
    "topic": "barrier method, sex",
    "question": "When should I put a condom on?",
    "tags": "condom",
    "answer": "With a male condom, you want to put it on right before you do any sexual activity."
  },
  {
    "objectID": 54,
    "topic": "barrier method",
    "question": "Do I have to be a certain age to get condoms?",
    "tags": "age, condom, buy",
    "answer": "TBD"
  },
  {
    "objectID": 55,
    "topic": "barrier method",
    "question": "Can I get condoms for free?",
    "tags": "condom, free",
    "answer": "Yes! Use this link to find free condoms near you. Typically, clinics and health events will hand out free condoms."
  },
  {
    "objectID": 56,
    "topic": "barrier method",
    "question": "Does condoms size matter?",
    "tags": "condom, size, important",
    "answer": "Sometimes. Most condoms can stretch to any size. It's more of a problem if the condom feels like it slips off during sex. You can try out different condom sizes and types to find one that works and feels good on you."
  },
  {
    "objectID": 57,
    "topic": "barrier method",
    "question": "What do I do if I don't fit in a condom?",
    "tags": "fit, condom, size",
    "answer": "Try another one! Condoms come in all shapes and sizes, so find one that works for you. There are ribbed condoms, thin ones, smaller or larger ones. There's a condom out there for everyone, so it's a matter of trying different ones out until you find one that fits and works for you."
  },
  {
    "objectID": 58,
    "topic": "barrier method",
    "question": "Do condoms expire? How can I tell?",
    "tags": "condom, expire",
    "answer": "Yep, condoms can expire. Check the packaging to find the expiration date. If the condom is exprired, throw it out and find a new one."
  },
  {
    "objectID": 59,
    "topic": "barrier method",
    "question": "Is an expired condom better than nothing?",
    "tags": "expire, condom, nothing, wear",
    "answer": "Technically yes, but it is significant;y more likely to break, which can expose you to STIs and unplanned pregnancy. Instead, find a fresh condom or try soemthing liek mutual masturbation that doesn't require a condom."
  },
  {
    "objectID": 60,
    "topic": "barrier method, sex",
    "question": "Should I use a condom for oral sex?",
    "tags": "condom, oral, sex",
    "answer": "You should use a condom for oral sex on a penis. You should use a dental dam for oral sex on a vagina or anus. Both of these are effective ways to be safe durign oral sex."
  },
  {
    "objectID": 61,
    "topic": "barrier method, sex",
    "question": "What do I do if a condom breaks?",
    "tags": "condom, break",
    "answer": "If a condom breaks, you want to stop sex and put on a new one to lower the risk of unwatned pregnancy/STIs. If you do not know the HIV or STI status of you aprtner, see a doctor to talk about your options."
  },
  {
    "objectID": 62,
    "topic": "barrier method, sex, consent",
    "question": "What do I do if my partner doesn't want to use a condom?",
    "tags": "partner, condom, use",
    "answer": "If your partner doesn't want to use a condom, but you do..."
  },
  {
    "objectID": 63,
    "topic": "consent",
    "question": "How do I say no to sex if I am not ready?",
    "tags": "ready, sex",
    "answer": "You should communicate this with your partner. Your partner should listen..."
  },
  {
    "objectID": 64,
    "topic": "consent",
    "question": "What do I do if I want to have sex but my partner doesn't?",
    "tags": "sex, partner, consent, desire",
    "answer": "You cannot and should not have sex without your partner's consent. Instead, find a sexual activity that you both would be into. Maybe that's mutual masturbation, or other forms of sex. Have an open conversation and find out what each of you is comfortable with."
  },
  {
    "objectID": 65,
    "topic": "sex",
    "question": "Is oral sex really sex?",
    "tags": "oral, sex, real",
    "answer": "Yes, oral sex is a form of sex. This means that you'll want to use protection (a condom or dental dam) to prevent the spread of STIs and protect your health and your partner's."
  },
  {
    "objectID": 66,
    "topic": "birth control",
    "question": "What types of birth control are there?",
    "tags": "birth control, type",
    "answer": "Lots! There are birth control pills that you take everyday. Implants are a small device that goes into your arm and work as birth control for up to three years..."
  },
  {
    "objectID": 67,
    "topic": "relationships",
    "question": "What do I do if I'm not happy with the way my partner treats me?",
    "tags": "partner, relationship, treat, happy",
    "answer": "TBD"
  },
  {
    "objectID": 68,
    "topic": "sex, pregnancy, birth control",
    "question": "Can oral sex or anal sex lead to pregnancy?",
    "tags": "oral, anal, sex, pregnancy",
    "answer": "No. Oral sex and anal sex cannot lead to rpegnancy. Only vaginal ssex can. All of these, though, can lead to STIs."
  },
  {
    "objectID": 69,
    "topic": "sex",
    "question": "Am I a virgin if I use a tampon?",
    "tags": "virgin, tampon",
    "answer": "TBD"
  },
  {
    "objectID": 70,
    "topic": "sex, pregnancy, birth control",
    "question": "Can I get pregnant the first time I have sex?",
    "tags": "pregnant, first time, sex",
    "answer": "Yes, you can. Where you are on you menstruation cycle can affect how liekly you are to get pregnant, but the number of times you have had sex does not. Use birth control or condoms to protect against unwanted prenancy during your first time having sex... and after!"
  },
  {
    "objectID": 71,
    "topic": "body, health",
    "question": "Is there a normal way a vagina or vulva should look?",
    "tags": "vagina, normal",
    "answer": "Nope! Vulvas come in different shapes and sizes. Some people have inner labia that's longer than their outer labia. Some people have"
  },
  {
    "objectID": 72,
    "topic": "health, body",
    "question": "Is my vagina normal?",
    "tags": "vagina, normal",
    "answer": "Probably! Vulvas come in all shapes and sizes, so if you're worried about that, know that whatever you have is normal. If you are worried about abnormal discharge, itchiness, or irritation, talk with a doctor."
  },
  {
    "objectID": 73,
    "topic": "barrier method",
    "question": "What is a dental damn?",
    "tags": "dental damn",
    "answer": "A dental dam is a rectangular piece of latex that you can place over a vagina or anus during oral sex. Do not use a dental dam on a penis for oral sex- use a condom instead!"
  },
  {
    "objectID": 74,
    "topic": "barrier method",
    "question": "What kind of lube should I use with condoms?",
    "tags": "lube, condom",
    "answer": "To be on the safe side, use a water-based lube, since they go with virtually all condom materials (latex, polyisoprene). Do NOT use oil-based lubes with latex condoms because it will break down the material and make the condom prone to break."
  },
  {
    "objectID": 75,
    "topic": "barrier method",
    "question": "What is lube for?",
    "tags": "lube",
    "answer": "Lubrication or lube is a liquid people use to help make sex (and masturbation) feel better and smoother. Lube makes sex feel better because it reduces friction between body parts during sex. A vagina cane produce it's own lubricaiton, but more lube never hurts (so long as you're using the right kind!) Because the anus does not lubricate itself naturally, lube is especially helpful during anal sex."
  },
  {
    "objectID": 76,
    "topic": "barrier method",
    "question": "What are condoms?",
    "tags": "condom",
    "answer": "A male condom is a thin piece of rubber, typically latex, that acts as a barrier method between bodily fluids during vaginal, anal, or oral sex. It protects against STIs and HIV by creating a thin barrier between your body and your partners."
  },
  {
    "objectID": 77,
    "topic": "barrier method",
    "question": "Where can I buy birth control?",
    "tags": "buy, purchase, birth control, pills",
    "answer": "You can get birth control pills by getting a prescription from your doctor."
  },
  {
    "objectID": 78,
    "topic": "barrier method",
    "question": "How do I put on a condom",
    "tags": "condom, wear, put on",
    "answer": "It's easy and gets easier with practice! First, check the package for its expiratin date and if there are any tears or damage to the package. If it looks damaged or is expired, throw it out and get a new one."
  },
  {
    "objectID": 79,
    "topic": "consent",
    "question": "If I don't ask for consent, is it sexual assault?",
    "tags": "consent, sexual assault",
    "answer": "If you do not ask for consent, you do not know if what you are doing is wanted by the other person. If it is not wanted, it is sexual assault. If you do not ask for consent, you run the risk of assault."
  },
  {
    "objectID": 80,
    "topic": "consent",
    "question": "What is consent?",
    "tags": "consent",
    "answer": "Consent is an agreement two partners aboutt he kind of sex or sexual contact they want to have. Consent means a clear, enthusiastic, and sober “yes”. Only a \"yes\" means \"yes.\" It can be withdrawn at any time, given for one kind of sex and not another, and must be given at every step of sexual activity. Remember, if you don't have someone's consent, you run the risk of sexually assaulting them."
  },
  {
    "objectID": 81,
    "topic": "consent, abuse",
    "question": "Is having sex with a drunk person sexual assault?",
    "tags": "sex, drunk, sexual assault, blackout, passed out",
    "answer": "Consent is a clear and *sober* yes. A person who is drunk, passed out, or unconscious cannot give consent to sex."
  },
  {
    "objectID": 82,
    "topic": "consent, abuse",
    "question": "Can men get sexually assaulted?",
    "tags": "men, sexually assaulted",
    "answer": "Yes. Men can get sexually assaulted. There's a misconception that because people with penises get boners, that means they must always want sex when they have a boner. But, there's a difference between being \"physically\" able to have sex and \"mentally\" ready and able to have sex. Someone who has a boner may not be ready to actually have sex or sexual contact. Plus someone who has a boner may be okay with one kind of sex, and not okay with another."
  },
  {
    "objectID": 83,
    "topic": "stis, health",
    "question": "What STIs are treatable?",
    "tags": "stis, curable, treatable",
    "answer": "Virtually all STIs are treatable. Bacterial STIs (chlamydia, gonorrhea) are curable with antibiotics. Parasitic STIs (scabies, crabs, giardia) are curable with prescription lotions, creams, and/or medicaitons. Viral STIs are treatable (herpes, HIV), and some are even curable (some forms of Hepatitis)."
  },
  {
    "objectID": 84,
    "topic": "stis, health",
    "question": "What STIs are curable?",
    "tags": "stis, curable, treatable",
    "answer": "Typically, bacterial STIs (chlamydia, gonorrhea) are curable with antibiotics. Parasitic STIs (scabies, crabs, giardia) are curable with prescription lotions, creams, and/or medicaitons. Viral STIs are treatable (herpes, HIV), and some are even curable (some forms of Hepatitis)."
  },
  {
    "objectID": 85,
    "topic": "consent",
    "question": "How do I ask for consent?",
    "tags": "consent, sex, ask, get",
    "answer": "You can and should ask for consent before and during sex. You can ask things like \"Can I do this...?\" or \"Is this okay...?\" or "
  },
  {
    "objectID": 86,
    "topic": "consent",
    "question": "Will asking for consent all the time ruin the mood?",
    "tags": "consent, ruin, mood",
    "answer": "Definitely not! If you ask us, consent helps create the mood."
  },
  {
    "objectID": 87,
    "topic": "consent",
    "question": "How do I know if consent has been given?",
    "tags": "consent, give, know",
    "answer": "If the person gave a clear, enthusiastic \"yes\". \"I don't know,\" \"I'm not sure,\" \"Wait,\" are not examples of consent. Only a \"yes\" means \"yes."
  },
  {
    "objectID": 88,
    "topic": "consent, sex",
    "question": "Are you supposed to swallow cum during oral sex?",
    "tags": "swallow, cum, sperm, semen, oral, sex",
    "answer": "You definitely do not have to swallow. If you don't want to, spit it out or ask your partner not to cum in your mouth."
  },
  {
    "objectID": 89,
    "topic": "birth control, period, health",
    "question": "What happens if you don't take birth control at the same time everyday or miss a day?",
    "tags": "birth control, period, cycle, menstruation",
    "answer": "The most common effect is spotting, which means you may bleed a bit even when you're not on your period."
  },
  {
    "objectID": 90,
    "topic": "barrier method, stis",
    "question": "Do I need to use a condom if I know my partner is STI-free and I'm on reliable birth control?",
    "tags": "If you and your partner have both been tested, ...",
    "answer": "TBD"
  },
  {
    "objectID": 91,
    "topic": "period, health",
    "question": "What causes your period to be heavier, lighter, longer, or shorter?",
    "tags": "period, change, normal, abnormal, different",
    "answer": "TBD"
  },
  {
    "objectID": 92,
    "topic": "body, sex",
    "question": "Is it my fault if I don't have an orgasm?",
    "tags": "blame, fault, orgasm, cum",
    "answer": "First off, you do not need to have an orgasm to have fun and pelasurable sex. It is not your fault if you don't have an orgasm."
  },
  {
    "objectID": 93,
    "topic": "stis, relationships",
    "question": "How do I talk with my partner about STIs?",
    "tags": "conversation, discussion",
    "answer": "Ask your partner if they are oopen to have a conversation about STIs and testing. ..."
  },
  {
    "objectID": 94,
    "topic": "body, health",
    "question": "How can I prevent a UTI?",
    "tags": "urinary tract infection",
    "answer": "Pee after sex! Peeing after sex will clear your urethra and signficantly reduce your chances of getting an UTI."
  },
  {
    "objectID": 95,
    "topic": "barrier method",
    "question": "What is a female condom?",
    "tags": "",
    "answer": "A female condom is a barrier method made out of nitrile that you wear in the anus or vagina."
  },
  {
    "objectID": 96,
    "topic": "health, body",
    "question": "How can I find a gynecologist?",
    "tags": "",
    "answer": "Use this tool to find a gyncologist near you!"
  },
  {
    "objectID": 97,
    "topic": "health",
    "question": "What is a pap smear and when should I get one?",
    "tags": "",
    "answer": "A pap smear is an exam to screen for cervical cancer. A doctor will \"swab\" your cervix for cells to make sure they look normal. You should get a pap smear every three years and get your first one either after you turn 21 or after you are sexually active."
  }
]

db.Question
  .remove({})
  .then(() => db.Question.collection.insertMany(questions))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
