type Props = {
  disabled?: boolean;
  children: React.ReactNode;
};

const SubmitForm: React.FC<Props> = (props) => {
  return (
    <button
      disabled={props.disabled}
      type="submit"
      className={
        'text-foreground font-semibold rounded-lg h-8 ' +
        (props.disabled
          ? 'bg-secondary hover:cursor-not-allowed'
          : 'bg-violet hover:bg-violet-dark hover:cursor-pointer')
      }>
      {props.children}
    </button>
  );
};

export { SubmitForm };
