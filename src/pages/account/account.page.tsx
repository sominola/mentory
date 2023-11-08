import { AppRoute } from '@/common/enums/enums';
import { UserDto, UserUpdateDto } from '@/common/types/types';
import { userUpdateSchema } from '@/common/validation-schemas/validation-schemas';
import { InputForm } from '@/components/shared/form/form/form';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { yupResolver } from '@hookform/resolvers/yup';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { Loader2 } from 'lucide-react';
import { ChangeEvent, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const AccountPage = () => {
  return (
    <div>
      <div className="p-[40px] pt-[30px] max-md:py-[10px]">
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
            to="/test"
            className={(data) =>
              'w-full font-medium py-[8px] px-[12px] rounded-lg hover:bg-secondary ' +
              (data.isActive ? 'bg-secondary' : 'text-muted-foreground')
            }>
            General
          </NavLink>
        </section>
        <section className="basis-9/12">
          <AccountForma />
        </section>
      </div>
    </div>
  );
};

const AccountForma = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, dirtyFields },
  } = useForm<UserUpdateDto>({
    mode: 'all',
    values: { firstName: 'Nikita', lastName: 'Savchuk', email: 'sominola@gmail.com' } as UserDto,
    resolver: yupResolver(userUpdateSchema),
  });
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Avatar</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <div className="text-sm">
            <p>This is your avatar.</p>
            <p>Click on the avatar to upload a custom one from your files.</p>
          </div>
          <input
            ref={fileInputRef}
            className="hidden"
            type="file"
            accept="image/png,image/jpeg"
            aria-label="Upload Avatar"
            onChange={handleFileChange}
          />
          <Avatar
            className="w-[78px] h-[78px] cursor-pointer hover:opacity-80"
            onClick={() => fileInputRef.current?.click()}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardContent>
        <CardFooter className="border-t-[1px] py-3 text-muted-foreground bg-secondary">
          <div>An avatar is optional but strongly recommended.</div>
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Email</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="text-sm">
            <p>This is your email.</p>
          </div>
          <InputForm
            autoComplete="email"
            register={register}
            name="email"
            placeholder="Enter Email"
            // title="Email"
            disabled
          />
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Your Name</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <InputForm
            autoComplete="given-name"
            register={register}
            error={errors['firstName']?.message}
            isDirty={dirtyFields['firstName']}
            name="firstName"
            placeholder="Enter First name"
            title="First name"
          />
          <InputForm
            autoComplete="family-name"
            register={register}
            error={errors['lastName']?.message}
            isDirty={dirtyFields['lastName']}
            name="lastName"
            placeholder="Enter First name"
            title="Last name"
          />
        </CardContent>
        <CardFooter className="flex justify-end w-full border-t-[1px] py-2 text-muted-foreground bg-secondary">
          <Button
            disabled={isLoading || !formState.isValid || !formState.isDirty}
            className="rounded-lg"
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 3000);
            }}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AccountPage;
