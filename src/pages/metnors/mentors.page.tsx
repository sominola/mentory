import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const imgSrc =
  'https://res.cloudinary.com/mentorcam/image/upload/ar_414:516,c_fill,f_auto,g_face:center,q_100,w_550/v1/user-profiles/eo0NsIuHpXPKXsgcrNzMfRNbO7r1/images/-NFzvoPKAGSVDLE-4iqC.jpg';

const MentorsPage: React.FC = () => {
  return (
    <div className="py-[50px] flex flex-col gap-5">
      <MentorItem />
      <MentorItem />
      <MentorItem />
      <MentorItem />
      <MentorItem />
    </div>
  );
};

const MentorItem: React.FC = () => {
  return (
    <div
      className="flex w-full h-[410px] max-xs:h-[475px] overflow-hidden border-2 rounded-[32px] scale-95 shadow-lg 
        transform ransition duration-300 hover:scale-100
        max-xs:flex-col">
      <div className="flex max-md:pl-[15px] max-md:pt-[15px] max-xs:w-full max-xs:justify-center max-xs:p-0 max-xs:pb-3">
        <img
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover max-md:w-[150px] max-md:h-[150px] max-md:rounded-full"
          src={imgSrc}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col px-[30px] py-[25px] gap-[20px] w-[70%] max-xs:py-0 max-xs:w-full">
        <section className="flex flex-col gap-3">
          <h1 className="text-5xl text-foregroun font-bold max-xs:text-3xl">Alexandra Zatarain</h1>
          <div className="flex flex-col text-2xl font-semibold max-xs:text-xl">Python Developer</div>
        </section>
        <section className="flex flex-col gap-5">
          <p className="leading-6 text-lg line-clamp-4 max-xs:line-clamp-3">
            Alexandra Zatarain is the Co-Founder and Vice President of Brand and Marketing at Eight Sleep, the world's
            first sleep fitness company. Eight Sleep solves sleep's most pressing issues through innovation and
            cutting-edge technology. The Pod, its best-selling product, has a cult-like following among business
            leaders, entrepreneurs, celebrities, and professional athletes. Among many others, the Pod is the preferred
            sleep accessory of CrossFit 2021 and 2022 champion Justin Medeiros and the Mercedes AMG Petronas Formula 1
            Team. The company has raised $160 million from investors such as General Catalyst, 8VC, Founders Fund, Craft
            Ventures, and Khosla Ventures among others. Alexandra was named to Forbes' 30 Under 30 list in Consumer Tech
            in 2017, and to Inc.'s Top 100 Female Founder's list in 2020.
          </p>
          <div className="flex flex-wrap">
            <div className="flex items-center truncate gap-[5px]">
              <div className="text-foreground">●</div>
              <div className="MentorBullet_bullet__Y5yIv">
                <span className="font-semibold text-lg tracking-tight">Price 4$/h</span>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-between max-xs:justify-center">
          <Button className="rounded-[24px] h-[48px] px-[40px] text-lg">
            <Link to={'/mentors/1'}>View Profile</Link>
          </Button>
          <div className="max-md:hidden">See pricing &amp; availability</div>
        </section>
      </div>
    </div>
  );
};

export default MentorsPage;
