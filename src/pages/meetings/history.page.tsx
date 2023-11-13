import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MeetingsHistoryPage: React.FC = () => {
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

type Status = 'Success' | 'Cancelled';

function getRandomStatus(): Status {
  const statuses: Status[] = ['Success', 'Cancelled'];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
}

function getRandomDate(from: Date, to: Date): Date {
  const fromTimestamp = from.getTime();
  const toTimestamp = to.getTime();
  const randomTimestamp = Math.floor(Math.random() * (toTimestamp - fromTimestamp + 1)) + fromTimestamp;

  return new Date(randomTimestamp);
}
const startDate = new Date(2023, 8, 1); // January 1, 2022
const endDate = new Date();

const Item: React.FC = () => {
  const status = getRandomStatus();
  const date = getRandomDate(startDate, endDate);

  return (
    <div className="flex items-center px-3 h-[80px] w-full border-[1px] rounded-lg">
      <div className="flex justify-between w-full">
        <div>
          <Link to="/mentors/1">
            <div className="flex gap-3 items-center hover:opacity-80">
              <div className="w-[68px] h-[68px] flex-none">
                <img className="w-full h-full rounded-full object-cover" src={imgSrc} />
              </div>
              <div className="flex flex-col">
                <div className="flex">
                  <div>
                    <h2 className="text-xl font-bold max-xs:text-sm">Alexandra Zatarain</h2>
                    <div className="flex gap-3">
                      {status === 'Success' && <h4 className="text-sm font-semibold text-green-400">Success</h4>}
                      {status === 'Cancelled' && (
                        <h4 className="text- font-semibold text-destructive brightness-150">Cancelled</h4>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="text-sm text-end">{date.toLocaleString()}</div>
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

export default MeetingsHistoryPage;
