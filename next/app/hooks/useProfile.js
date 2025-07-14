import { useContext } from 'react';
import { ProfileProvider } from '../ContextProvider/ProfileProvider'; // Adjust the import path as needed

export const useProfile = () => {
  const context = useContext(ProfileProvider);
  
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }

  return context;
};

/*
const ProfileComponent = () => {
  const { profile, setProfile } = useProfile();

  return (
    <div>
      <p>Current Profile: {profile?.profile}</p>
      <button onClick={() => setProfile?.({ profile: 'Updated!' })}>
        Update Profile
      </button>
    </div>
  );
};
*/