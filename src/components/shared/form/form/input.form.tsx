import { cn } from '@/common/utils';
import { CheckCircle2, XCircle } from 'lucide-react';

type Props = {
  name: string;
  placeholder?: string;
  title?: string;
  type?: string;
  readonly?: boolean;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  error?: string | null;
  isDirty?: boolean | null;
  autoComplete?: string | null;
};

const InputForm: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row justify-between">
        {props.title && (
          <label className="text-foreground font-bold" htmlFor={props.name}>
            {props.title}
          </label>
        )}
        {props.error && <XCircle className="fill-destructive stroke-background w-[20px] h-[20px]" />}
        {!props.error && props.isDirty && <CheckCircle2 className="fill-primary stroke-background w-[20px] h-[20px]" />}
      </div>
      <input
        {...props.register(props.name)}
        autoComplete={props.autoComplete}
        placeholder={props.placeholder}
        type={props.type}
        readOnly={props.readonly}
        disabled={props.disabled}
        id={props.name}
        className={cn(
          'bg-background text-foreground border-border px-3 py-1 border-[1px] rounded focus:outline-none focus:border-foreground',
          props?.error && 'border-destructive outline-none',
          props?.disabled && 'bg-muted text-muted-foreground',
        )}
      />
      {props.error && <div className="text-sm font-medium text-destructive brightness-200">* {props.error}</div>}
    </div>
  );
};

export { InputForm };
