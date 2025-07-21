// Button.tsx
import React,{useContext} from "react";
import {ProfileContext} from '@/ContextProvider/ProfileProvider';
import {useRouter} from "next/navigation";

interface Props {
  label: string;
  disabled: boolean;
  addClasses: string;
  action: string;
  id: string;
  table: string;
}
interface Profile {
  setProfile: (profile: string) => void;
}

const Button: React.FC<Props> = (props) => {
  const {label, disabled, action, addClasses} = props;
  const { setProfile } = useContext(ProfileContext) as unknown as Profile;
  const router = useRouter();

  const handleActions = () => {
    switch (action) {
      case "handleLogout":
        handleLogout();
        break;
      case "handleDashboard":
        router.push("/pages/dashboard");
        break;
      case "handleLogin":
        router.push("/login");
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
      setProfile('');
      router.push("/login");
  };

  return (
    <button
      aria-label={label}
      onClick={() => handleActions()}
      className={`${addClasses}`}
      disabled={disabled}>
      {label}
    </button>
  );
};

Button.displayName = 'Button';
export default Button;
