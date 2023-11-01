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
        {props.error && (
          <svg width="18" height="18" viewBox="0 0 20 20">
            <path
              className="fill-destructive"
              fillRule="evenodd"
              d="M2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm12 1V9H6v2h8z"
              clipRule="evenodd"></path>
          </svg>
        )}
        {!props.error && props.isDirty && (
          <svg className="fill-primary" width="18" height="18" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3 5 1.5 1.5L9 14l-3.5-3.5L7 9l2 2 4-4z"
              clipRule="evenodd"></path>
          </svg>
        )}
      </div>
      <input
        {...props.register(props.name)}
        autoComplete={props.autoComplete}
        placeholder={props.placeholder}
        type={props.type}
        readOnly={props.readonly}
        disabled={props.disabled}
        id={props.name}
        className={
          'bg-background text-foreground border-border px-3 py-1 border-solid border-[3px] rounded focus:outline-none focus:border-violet-light ' +
          (props.error && 'border-destructive outline-none ' + props.disabled && 'bg-accents-2 text-accents-3 ')
        }
      />
      {props.error && <div className="text-xs text-destructive brightness-150">* {props.error}</div>}
    </div>
  );
};

export { InputForm };
