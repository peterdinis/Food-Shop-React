import { Header } from "../shared";
import useSearchQuery from "../../hooks/useSearchQuery";

const ResetPasswordForm: React.FC = () => {
    const query = useSearchQuery();
    return (
        <>
         <Header text="Reset Password" />

        </>
    )
}

export default ResetPasswordForm;