import { AppRoute } from '@/common/enums/enums';
import { NavLink, Outlet } from 'react-router-dom';

const AccountPage = () => {
  return (
    <div>
      <div className="p-[20px] pt-[15px] max-md:py-[10px]">
        <h2 className="font-medium text-[2rem]">Account Settings</h2>
      </div>
      <div className="border-b-[1px]"></div>
      <div className="flex mt-[47px] px-[74px] justify-between max-md:p-0 max-md:flex-col max-md:mt-[15px] max-md:gap-5">
        <section className="flex flex-col basis-2/12 max-md:flex-row">
          <NavLink
            to={AppRoute.ACCOUNT}
            className={(data) =>
              'w-full font-medium py-[8px] px-[12px] rounded-lg hover:bg-secondary ' +
              (data.isActive ? 'bg-secondary' : '')
            }>
            General
          </NavLink>
          <NavLink
            to={AppRoute.MEETINGS}
            className={(data) =>
              'w-full font-medium py-[8px] px-[12px] rounded-lg hover:bg-secondary ' +
              (data.isActive ? 'bg-secondary' : 'text-muted-foreground')
            }>
            Meetings
          </NavLink>
        </section>
        <section className="basis-9/12">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default AccountPage;
