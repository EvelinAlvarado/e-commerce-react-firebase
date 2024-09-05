import { SubmitHandler, useForm } from "react-hook-form";

type InputsProps = {
  fullName: string;
  email: string;
  phone: number;
};

export const Contacts = (): JSX.Element => {
  /* const [formValues, setFormValues] = useState<{
    fullName: string;
    email: string;
    phone: number | undefined;
  }>({ fullName: "", email: "", phone: undefined });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sended", formValues);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; //name="email",   name="fullName"
    console.log(e.target.name, ":", e.target.value);
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }; */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsProps>();
  const onSubmit: SubmitHandler<InputsProps> = (data) => console.log(data);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[600px]">
        <h2 className="text-center text-2xl py-10 font-semibold text-[#233a5e]">
          Contact
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <input
            className="w-full border-solid border-2 p-2 rounded-xl"
            type="text"
            placeholder="Name"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && (
            <span className="text-red-600 text-sm">This field is required</span>
          )}
          <input
            className="w-full border-solid border-2 p-2 rounded-xl"
            type="email"
            placeholder="E-mail"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-600 text-sm">This field is required</span>
          )}
          <input
            className="w-full border-solid border-2 p-2 rounded-xl"
            type="tel"
            placeholder="Phone"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-red-600 text-sm">This field is required</span>
          )}
          <button
            className="bg-[#ffb603] text-[#233a5e] font-bold rounded-xl uppercase px-4 py-2"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
