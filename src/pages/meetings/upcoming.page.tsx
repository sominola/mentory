import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const imgSrc =
  'https://res.cloudinary.com/mentorcam/image/upload/ar_414:516,c_fill,f_auto,g_face:center,q_100,w_550/v1/user-profiles/eo0NsIuHpXPKXsgcrNzMfRNbO7r1/images/-NFzvoPKAGSVDLE-4iqC.jpg';

const MeetingsUpcomingPage: React.FC = () => {
  return (
    <section className="flex flex-col gap-3 w-full">
      {Array.from(Array(10).keys()).map((e) => (
        <Item key={e} />
      ))}
    </section>
  );
};

const Item: React.FC = () => {
  return (
    <div className="flex items-center px-3 h-[80px] w-full border-[1px] rounded-lg">
      <div className="flex justify-between w-full">
        <Link to="/mentors/1">
          <div className="flex gap-3 items-center hover:opacity-80">
            <div className="w-[68px] h-[68px] flex-none">
              <img className="w-full h-full rounded-full object-cover" src={imgSrc} />
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <div>
                  <h2 className="text-xl font-bold max-xs:text-sm">Alexandra Zatarain</h2>
                  <h3 className="max-xs:text-xs opacity-60">Event start in 5 minutes</h3>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex items-center">
          <Button className="max-xs:text-xs max-xs:px-1" onClick={() => toast('Link copied')}>
            Copy meet link
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MeetingsUpcomingPage;
