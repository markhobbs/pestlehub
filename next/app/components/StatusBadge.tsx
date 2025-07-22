// StatusBadge.tsx
import {useContext} from "react";
import Link from "next/link";
import {ProfileContext} from '@/ContextProvider/ProfileProvider';
import IconSVGProfile from "./../../public/IconSVGProfile";

interface Profile {
  profile: {
    username: string;
    token: string;
    status: string;
  }
}

const StatusBadge = () => {
  const {profile} = useContext(ProfileContext) as unknown as Profile;
  const active = (profile && profile.status === "active") || {}
  return (active) 
  ? <Link href={"/pages/dashboard"} title={"Open Dashboard"}>
      <IconSVGProfile active={true}/>
    </Link> 
  : <Link href={"/login"} title="Login to dashboard">
    <IconSVGProfile />
  </Link>};

StatusBadge.displayName = 'StatusBadge';
export default StatusBadge;
