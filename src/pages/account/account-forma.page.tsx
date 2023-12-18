import { UserUpdateDto, UserDto } from '@/common/types/types';
import { userUpdateSchema } from '@/common/validation-schemas/validation-schemas';
import { InputForm } from '@/components/shared/form/form/input.form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader2 } from 'lucide-react';
import { useState, useRef, ChangeEvent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuthStore } from '@/stores/auth.store.ts';

const AccountFormaPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { currentUser, setUser } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, dirtyFields },
  } = useForm<UserUpdateDto>({
    mode: 'all',
    values: { ...currentUser } as UserDto,
    resolver: yupResolver(userUpdateSchema),
  });
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
    }
  };

  const onSubmit: SubmitHandler<UserUpdateDto> = async (data, e) => {
    e?.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const updatedUser = {...currentUser, firstName: data.firstName, lastName: data.lastName}
      setUser(updatedUser as UserDto);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
            className="rounded-lg">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default AccountFormaPage;
