import { AppRoute } from '@/common/enums/enums';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MeetingsPage: React.FC = () => {
  return (
    <div>
      <div className="p-[20px] pt-[15px] max-md:py-[10px] flex justify-between">
        <h2 className="font-medium text-[2rem]">Meetings</h2>
        <div className="flex gap-3 items-center">
          <Button variant="outline" asChild>
            <Link to={AppRoute.MEETINGS_UPCOMING}>Upcoming</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to={AppRoute.MEETINGS_PENDING}>Peding</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to={AppRoute.MEETINGS_HISTORY}>History</Link>
          </Button>
        </div>
      </div>
      <div className="border-b-[1px]"></div>
      <div className="flex mt-[17px] px-[24px]">
        <Outlet />
      </div>
    </div>
  );
};

export default MeetingsPage;
