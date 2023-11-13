import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Radio } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const MeetingsPendingPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const array = Array.from(Array(10).keys());

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  if (loading) {
    return (
      <section className="flex flex-col gap-3 w-full">
        {array.map((e) => (
          <Scelet key={e} />
        ))}
      </section>
    );
  }
  return (
    <section className="flex flex-col gap-3 w-full">
      {array.map((e) => (
        <Item key={e} />
      ))}
    </section>
  );
};

const imgSrc =
  'https://res.cloudinary.com/mentorcam/image/upload/ar_414:516,c_fill,f_auto,g_face:center,q_100,w_550/v1/user-profiles/eo0NsIuHpXPKXsgcrNzMfRNbO7r1/images/-NFzvoPKAGSVDLE-4iqC.jpg';

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
                  <div className="flex gap-1 items-center animate-pulse">
                    <Radio className="stroke-red-500" />
                    <h4 className="opacity-60 max-xs:text-xs">In live</h4>
                  </div>
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

const Scelet = () => {
  return (
    <div className="flex items-center px-3 h-[80px] w-full border-[1px] rounded-lg">
      <div className="flex justify-between w-full">
        <div className="flex gap-3 items-center hover:opacity-80">
          <Skeleton className="w-[68px] h-[68px] flex-none rounded-full"></Skeleton>
          <div className="flex flex-col gap-3">
            <Skeleton className="w-[200px] h-[20px] max-md:w-[120px]"></Skeleton>
            <Skeleton className="w-[200px] h-[20px] max-md:w-[120px]"></Skeleton>
          </div>
        </div>
        <div className="flex items-center">
          <Skeleton className="w-[128px] h-[38px] max-md:w-[80px]"></Skeleton>
        </div>
      </div>
    </div>
  );
};

export default MeetingsPendingPage;
