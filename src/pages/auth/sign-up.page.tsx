import { Button } from '@/components/ui/button';
import { Accessibility, Loader2 } from 'lucide-react';
import { SignUpDto } from '@/common/types/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signUpSchema } from '@/common/validation-schemas/validation-schemas';
import { InputForm } from '@/components/shared/form/form/form';
import { useState } from 'react';

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const { authStore } = useStores();
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, dirtyFields },
  } = useForm<SignUpDto>({
    mode: 'all',
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpDto> = (data) => {
    console.log(data);
    // event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] py-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
        </div>
        <div className="flex flex-col gap-6">
          <form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
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
                placeholder="Enter Last name"
                title="Last name"
              />
              <InputForm
                autoComplete="email"
                register={register}
                error={errors['email']?.message}
                isDirty={dirtyFields['email']}
                name="email"
                placeholder="Enter email"
                title="Email"
              />
              <InputForm
                autoComplete="new-password"
                register={register}
                error={errors['password']?.message}
                isDirty={dirtyFields['password']}
                name="password"
                placeholder="Enter password"
                title="Password"
                type="password"
              />
              <InputForm
                autoComplete="new-password"
                register={register}
                error={errors['passwordConfirm']?.message}
                isDirty={dirtyFields['passwordConfirm']}
                name="passwordConfirm"
                placeholder="Enter password"
                title="Confirm Password"
                type="password"
              />
              <Button disabled={isLoading || !formState.isValid}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign Up with Email
              </Button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <Button variant="outline" type="button" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Accessibility className="mr-2 h-4 w-4" />}{' '}
            Google
          </Button>
        </div>
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{' '}
          <a href="/terms" className="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
