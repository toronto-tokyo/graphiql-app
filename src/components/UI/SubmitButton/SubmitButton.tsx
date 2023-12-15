interface SubmitButtonProps {
  disabled: boolean;
}

function SubmitButton({ disabled }: SubmitButtonProps) {
  return (
    <div>
      <button type="submit" disabled={disabled}>
        Submit
      </button>
    </div>
  );
}

export default SubmitButton;
