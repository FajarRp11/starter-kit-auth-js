const InputError = ({ message }: { message: React.ReactNode }) => {
  return <p className="mt-2 text-xs text-red-600">{message}</p>;
};

export default InputError;
