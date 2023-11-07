import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { AtSign, CheckCircle2, Circle, Facebook, Linkedin, Star, Twitter } from 'lucide-react';
import { useState } from 'react';

const imgSrc =
  'https://res.cloudinary.com/mentorcam/image/upload/ar_414:516,c_fill,f_auto,g_face:center,q_100,w_550/v1/user-profiles/eo0NsIuHpXPKXsgcrNzMfRNbO7r1/images/-NFzvoPKAGSVDLE-4iqC.jpg';

const MentorPage: React.FC = () => {
  return (
    <div className="pt-[40px]">
      <MentorCompo />
    </div>
  );
};

const getDate = (date: Date | undefined) => {
  if (!date) return null;
  // Define the day and month names
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Get the day of the week and month
  const dayOfWeek = daysOfWeek[date.getDay()];
  const monthName = months[date.getMonth()];

  // Get the day of the month
  const dayOfMonth = date.getDate();

  // Create the desired string format
  return `${dayOfWeek}, ${monthName} ${dayOfMonth}`;
};

const MentorCompo: React.FC = () => {
  const [isSixty, setIsSixty] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date(2023, 11, 9, 9, 30, 30));

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5 max-md:flex-col">
        <section className="flex flex-col gap-5">
          <section className="p-[40px] border-[1px] border-border rounded-[32px] max-xs:p-[15px] max-md:p-[25px] basis-4/6">
            <div className="flex flex-col gap-5  max-xs:gap-0">
              <div className="flex gap-[20px]">
                <div className="w-[108px] h-[108px] flex-none">
                  <img className="w-full h-full rounded-full object-cover" src={imgSrc} />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex justify-between w-full max-xs:flex-col">
                    <div className="flex">
                      <div>
                        <h2 className="text-4xl font-bold max-md:text-2xl">Alexandra Zatarain</h2>
                        <h3 className="text-2xl max-md:text-lg">Python Developer</h3>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Star height="24px" fill="foreground" />
                      <h5 className="font-bold text-lg">5.00</h5>
                    </div>
                  </div>
                  <div className="border-b-[1px] mt-[20px] w-full max-xs:border-0"></div>
                </div>
              </div>
              <div className="text-lg max-md:text-base">
                Alexandra Zatarain is the Co-Founder and Vice President of Brand and Marketing at Eight Sleep, the
                world's first sleep fitness company. Eight Sleep solves sleep's most pressing issues through innovation
                and cutting-edge technology. The Pod, Alexandra Zatarain is the Co-Founder and Vice President of Brand
                and Marketing at Eight Sleep, the world's first sleep fitness company. Eight Sleep solves sleep's most
                pressing issues through innovation and cutting-edge technology. The Pod, Alexandra Zatarain is the
                Co-Founder and Vice President of Brand and Marketing at Eight Sleep, the world's first sleep fitness
                company. Eight Sleep solves sleep's most pressing issues through innovation and cutting-edge technology.
              </div>
              <div className="border-b-[1px] mt-[20px] w-full"></div>
              <div className="flex justify-center items-center gap-5 h-[75px]">
                <a href="#" className="hover:opacity-80">
                  <Facebook />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Linkedin />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Twitter />
                </a>
                <a href="#" className="hover:opacity-80">
                  <AtSign />
                </a>
              </div>
            </div>
          </section>
          <section className="flex flex-col p-[40px] max-xs:p-[15px] border-[1px] border-border rounded-[32px] basis-2/6 gap-5">
            <h3 className="font-bold text-2xl">2 Reviews</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-[5px] border-r-2">
                <h6 className="text-lg font-medium">Inessa Vulfova</h6>
                <div className="flex">
                  <Star height="24px" className="fill-foreground stroke-none" />
                  <Star height="24px" className="fill-foreground stroke-none" />
                  <Star height="24px" className="fill-foreground stroke-none" />
                  <Star height="24px" className="fill-foreground stroke-none" />
                  <Star height="24px" className="fill-foreground stroke-none" />
                </div>
                <div className="text-lg">Really useful call about MVP and customer acquisition.</div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <h6 className="text-lg font-medium">Kyle Wallgren</h6>
                <div className="flex">
                  <Star height="24px" className="fill-foreground stroke-none" />
                  <Star height="24px" className="fill-foreground stroke-none" />
                  <Star height="24px" className="fill-foreground stroke-none" />
                  <Star height="24px" className="fill-foreground stroke-none" />
                  <Star height="24px" className="fill-foreground stroke-none" />
                </div>
                <div className="text-lg">
                  Alexandra was great! Hands down 10/10. Answered all the questions I had about go-to-market and
                  together we came up with a step-by-step plan.
                </div>
              </div>
            </div>
          </section>
        </section>
        <section
          className="flex flex-col p-[40px] border-[1px] border-border rounded-[32px] basis-2/6 gap-5
      max-xs:p-[15px]">
          <div>
            <h3 className="font-bold text-2xl">Book a call with Alexandra Zatarain</h3>
          </div>
          <div className="flex flex-col gap-3">
            <Button
              className="flex justify-between text-lg h-[62px]"
              variant={isSixty ? 'outline' : 'default'}
              onClick={() => setIsSixty(false)}>
              {isSixty ? <Circle /> : <CheckCircle2 />}
              <div>30 minutes</div>
              <div>$40</div>
            </Button>
            <Button
              className="flex justify-between text-lg h-[62px]"
              variant={isSixty ? 'default' : 'outline'}
              onClick={() => setIsSixty(true)}>
              {isSixty ? <CheckCircle2 /> : <Circle />}
              <div>60 minutes</div>
              <div>$60</div>
            </Button>
          </div>
          <Button className="text-xl font-medium rounded-[24px] h-[48px] px-[40px]">Book now</Button>
          <div>
            <Calendar
              mode="single"
              className="rounded-md border flex justify-center"
              selected={date}
              onSelect={setDate}
            />
          </div>
          <h5 className="font-medium text-lg">{getDate(date)}</h5>
          <div className="grid grid-cols-2 gap-3">
            <Button className="text-lg font-medium rounded-[24px] h-[40px] px-[30px] w-full">10:00am</Button>
            <Button variant="outline" className="text-lg font-medium rounded-[24px] h-[40px] px-[30px] w-full">
              10:00am
            </Button>
            <Button variant="outline" className="text-lg font-medium rounded-[24px] h-[40px] px-[30px] w-full">
              11:00am
            </Button>
            <Button variant="outline" className="text-lg font-medium rounded-[24px] h-[40px] px-[30px] w-full">
              12:00am
            </Button>
            <Button variant="outline" className="text-lg font-medium rounded-[24px] h-[40px] px-[30px] w-full">
              13:00pm
            </Button>
            <Button variant="outline" className="text-lg font-medium rounded-[24px] h-[40px] px-[30px] w-full">
              14:00pm
            </Button>
          </div>
        </section>
      </div>
      <section className="p-[40px] border-[1px] border-border rounded-[32px] max-xs:p-[15px] max-md:p-[25px] flex flex-col items-center gap-[40px] w-full">
        <h2 className="text-4xl font-bold">How It Works</h2>
        <div className="flex justify-between max-sm:flex-col max-sm:gap-5">
          <div className="flex flex-col gap-3 items-center basis-1/4">
            <div className="h-[60px] w-[60px] bg-secondary rounded-full flex justify-center items-center">
              <h3 className="font-bold text-2xl">1</h3>
            </div>
            <h3 className="font-bold text-2xl">Select a call Time</h3>
            <p className="text-lg text-center">Select a date and time from Alexandra’s available time slots.</p>
          </div>

          <div className="flex flex-col gap-3 items-center basis-1/4">
            <div className="h-[60px] w-[60px] bg-secondary rounded-full flex justify-center items-center">
              <h3 className="font-bold text-2xl">2</h3>
            </div>
            <h3 className="font-bold text-2xl">Receive a calendar invite</h3>
            <p className="text-lg text-center">
              After you have selected a date and time, you will receive a calendar invite with a video link.
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center basis-1/4">
            <div className="h-[60px] w-[60px] bg-secondary rounded-full flex justify-center items-center">
              <h3 className="font-bold text-2xl">3</h3>
            </div>
            <h3 className="font-bold text-2xl">Hop on the call</h3>
            <p className="text-lg text-center">
              You and Alexandra will connect via a video call at the scheduled time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorPage;
