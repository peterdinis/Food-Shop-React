import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, registerUser } = useAuth();

  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
    watch,
  } = useForm<FormData>();


  const onHandleSubmit = (data: FormData) => {
     try {
        registerUser(data.email, data.password)
     } catch (err) {
        console.error(err);
     }
  }

  return <></>;
};

export default RegisterForm;
